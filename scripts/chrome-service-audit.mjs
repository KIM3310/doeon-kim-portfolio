import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';

const root = process.cwd();
const constantsPath = resolve(root, 'constants.ts');
const outputDir = resolve(root, 'tmp');
const outputLabel = (process.env.AUDIT_OUTPUT_LABEL || 'service').replace(/[^a-z0-9_-]/gi, '-');
const jsonPath = resolve(outputDir, `chrome-${outputLabel}-audit.json`);
const markdownPath = resolve(outputDir, `chrome-${outputLabel}-audit.md`);
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const forbiddenButton = /delete|remove|reset|logout|log out|sign out|purchase|buy|pay|subscribe|send|submit|contact|book|deploy|sync|upload|download|share|login|sign in/i;

function parseServices() {
  if (process.env.AUDIT_TARGETS_JSON) {
    const parsed = JSON.parse(process.env.AUDIT_TARGETS_JSON);
    if (!Array.isArray(parsed)) throw new Error('AUDIT_TARGETS_JSON must be an array.');
    return parsed.map(item => {
      if (!item?.repo || !item?.url) throw new Error('Each audit target needs repo and url.');
      return { repo: String(item.repo), url: String(item.url) };
    });
  }

  const text = readFileSync(constantsPath, 'utf8');
  const block = text.match(/export const REPOSITORY_DEMO_URLS:[^{]+\{([\s\S]*?)\n\};/)?.[1] ?? '';
  return [...block.matchAll(/\s*(?:'([^']+)'|([A-Za-z0-9_-]+)):\s*'([^']+)'/g)]
    .map(match => ({ repo: match[1] ?? match[2], url: match[3] }));
}

async function waitForJson(port, path) {
  const url = `http://127.0.0.1:${port}${path}`;
  let lastError;
  for (let attempt = 0; attempt < 100; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
      lastError = new Error(`${url} returned ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await delay(150);
  }
  throw lastError ?? new Error(`Chrome endpoint did not become ready: ${url}`);
}

async function openCdpPage(port) {
  let pages = await waitForJson(port, '/json');
  let page = pages.find(item => item.type === 'page');
  if (!page) {
    await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' });
    pages = await waitForJson(port, '/json');
    page = pages.find(item => item.type === 'page');
  }
  if (!page?.webSocketDebuggerUrl) {
    throw new Error('No Chrome page target with a DevTools websocket was found.');
  }
  return page;
}

async function createSession(webSocketUrl, onEvent = () => {}) {
  const ws = new WebSocket(webSocketUrl);
  const pending = new Map();
  let seq = 0;

  await new Promise((resolveOpen, reject) => {
    ws.addEventListener('open', resolveOpen, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolveMessage, rejectMessage } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) rejectMessage(new Error(message.error.message));
      else resolveMessage(message.result);
      return;
    }
    if (message.method) onEvent(message);
  });

  return {
    send(method, params = {}) {
      return new Promise((resolveMessage, rejectMessage) => {
        const id = ++seq;
        pending.set(id, { resolveMessage, rejectMessage });
        ws.send(JSON.stringify({ id, method, params }));
      });
    },
    close() {
      ws.close();
    },
  };
}

async function waitForPageLoad(session, timeoutMs = 9000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    const state = await session.send('Runtime.evaluate', {
      expression: 'document.readyState',
      returnByValue: true,
    }).catch(() => null);
    if (state?.result?.value === 'complete' || state?.result?.value === 'interactive') return;
    await delay(150);
  }
}

async function evaluateJson(session, expression, timeout = 10000) {
  const result = await session.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
    timeout,
  });
  if (result.exceptionDetails) {
    const detail = result.exceptionDetails.exception?.description ?? result.exceptionDetails.text;
    throw new Error(detail);
  }
  return result.result.value;
}

const metricsExpression = `(() => {
  const visible = el => {
    if (el.classList?.contains('sr-only') || el.closest('[aria-hidden="true"]')) return false;
    const style = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
  };
  const textOf = el => (el.textContent || el.getAttribute('aria-label') || el.getAttribute('title') || '').replace(/\\s+/g, ' ').trim();
  const all = [...document.querySelectorAll('body *')].filter(visible);
  const leafish = el => el.children.length <= 4 && !['HTML', 'BODY', 'SCRIPT', 'STYLE'].includes(el.tagName);
  const bodyText = all.filter(leafish).map(textOf).filter(Boolean).join(' ').replace(/\\s+/g, ' ').trim();
  const overflow = all.filter(leafish).filter(el => {
    const rect = el.getBoundingClientRect();
    return rect.left < -2 || rect.right > window.innerWidth + 2;
  }).slice(0, 10).map(el => ({ tag: el.tagName, className: String(el.className).slice(0, 90), text: textOf(el).slice(0, 90), left: Math.round(el.getBoundingClientRect().left), right: Math.round(el.getBoundingClientRect().right) }));
  const clipped = all.filter(leafish).filter(el => {
    const style = getComputedStyle(el);
    const text = textOf(el);
    if (text.length < 12) return false;
    if (style.whiteSpace === 'nowrap' && el.scrollWidth > el.clientWidth + 3) return true;
    return style.overflow === 'hidden' && el.scrollHeight > el.clientHeight + 3;
  }).slice(0, 10).map(el => ({ tag: el.tagName, className: String(el.className).slice(0, 90), text: textOf(el).slice(0, 90), scrollWidth: el.scrollWidth, clientWidth: el.clientWidth, scrollHeight: el.scrollHeight, clientHeight: el.clientHeight }));
  const brokenImages = [...document.images].filter(img => img.complete && img.naturalWidth === 0).slice(0, 10).map(img => ({ src: img.currentSrc || img.src, alt: img.alt }));
  const emptyControls = [...document.querySelectorAll('button, a, [role="button"]')].filter(visible).filter(el => textOf(el).length === 0 && !el.querySelector('svg,img')).slice(0, 10).map(el => ({ tag: el.tagName, href: el.getAttribute('href'), className: String(el.className).slice(0, 90) }));
  const tinyTargets = [...document.querySelectorAll('button, a, input, select, textarea, summary, [role="button"]')].filter(visible).filter(el => {
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0 && (rect.width < 32 || rect.height < 28);
  }).slice(0, 10).map(el => ({ tag: el.tagName, text: textOf(el).slice(0, 80), width: Math.round(el.getBoundingClientRect().width), height: Math.round(el.getBoundingClientRect().height) }));
  const h1 = [...document.querySelectorAll('h1')].map(textOf).filter(Boolean).slice(0, 3);
  return {
    location: location.href,
    title: document.title,
    h1,
    bodyChars: bodyText.length,
    viewport: { width: innerWidth, height: innerHeight },
    documentHeight: Math.round(document.documentElement.scrollHeight),
    controls: {
      buttons: document.querySelectorAll('button').length,
      links: document.querySelectorAll('a').length,
      summaries: document.querySelectorAll('summary').length,
      inputs: document.querySelectorAll('input, textarea, select').length,
    },
    statusFlags: {
      likely404: /404|not found|page not found|there isn't a github pages site here|this site can't be reached/i.test(bodyText + ' ' + document.title),
      veryThin: bodyText.length < 300,
      hasMain: !!document.querySelector('main, [role="main"]'),
      hasH1: h1.length > 0,
      hasCTA: [...document.querySelectorAll('button, a')].some(el => /demo|start|run|open|try|review|export|generate|analyze|launch|view|learn/i.test(textOf(el))),
    },
    visibleButtons: [...document.querySelectorAll('button')].filter(visible).map(textOf).filter(Boolean).slice(0, 12),
    visibleLinks: [...document.querySelectorAll('a')].filter(visible).map(a => ({ text: textOf(a).slice(0, 60), href: a.getAttribute('href') })).slice(0, 12),
    overflow,
    clipped,
    brokenImages,
    emptyControls,
    tinyTargets,
    auditLogs: window.__chromeServiceAuditLogs ?? [],
  };
})()`;

const interactionExpression = `(async () => {
  const actions = [];
  const visible = el => {
    if (el.classList?.contains('sr-only') || el.closest('[aria-hidden="true"]')) return false;
    const style = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
  };
  const textOf = el => (el.textContent || el.getAttribute('aria-label') || el.getAttribute('title') || '').replace(/\\s+/g, ' ').trim();
  const forbidden = ${forbiddenButton.toString()};
  for (const [index, el] of [...document.querySelectorAll('summary')].filter(visible).slice(0, 5).entries()) {
    el.click();
    actions.push('summary:' + index);
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  for (const [index, el] of [...document.querySelectorAll('a[href^="#"]')].filter(visible).slice(0, 4).entries()) {
    el.click();
    actions.push('hash-link:' + index + ':' + textOf(el).slice(0, 40));
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  let clickedButtons = 0;
  for (const el of [...document.querySelectorAll('button:not([type="submit"])')].filter(visible)) {
    const label = textOf(el);
    if (!label || forbidden.test(label)) continue;
    el.click();
    actions.push('button:' + label.slice(0, 40));
    clickedButtons += 1;
    await new Promise(resolve => setTimeout(resolve, 120));
    if (clickedButtons >= 5) break;
  }
  scrollTo(0, Math.min(document.documentElement.scrollHeight, 900));
  actions.push('scroll:down');
  await new Promise(resolve => setTimeout(resolve, 160));
  scrollTo(0, 0);
  actions.push('scroll:top');
  return actions;
})()`;

async function auditPass(session, service, mode) {
  if (mode === 'mobile') {
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
    });
  } else {
    await session.send('Emulation.clearDeviceMetricsOverride').catch(() => {});
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 1000,
      deviceScaleFactor: 1,
      mobile: false,
    });
  }

  await session.send('Page.navigate', { url: service.url });
  await waitForPageLoad(session);
  await delay(900);
  const before = await evaluateJson(session, metricsExpression);
  const actions = await evaluateJson(session, interactionExpression);
  await delay(400);
  const after = await evaluateJson(session, metricsExpression);
  return { mode, before, actions, after };
}

function scorePass(pass) {
  const metrics = pass.after ?? pass.before ?? {};
  const flags = metrics.statusFlags ?? {};
  const issues = [];
  if (flags.likely404) issues.push('likely 404/not-found surface');
  if (flags.veryThin) issues.push('thin content');
  if (!flags.hasH1) issues.push('missing h1');
  if (!flags.hasCTA) issues.push('weak or missing CTA');
  if ((metrics.overflow ?? []).length) issues.push(`${metrics.overflow.length} overflow candidates`);
  if ((metrics.clipped ?? []).length) issues.push(`${metrics.clipped.length} clipped text candidates`);
  if ((metrics.brokenImages ?? []).length) issues.push(`${metrics.brokenImages.length} broken image candidates`);
  if ((metrics.emptyControls ?? []).length) issues.push(`${metrics.emptyControls.length} empty controls`);
  if ((metrics.auditLogs ?? []).filter(log => log.level === 'error').length) issues.push('console errors');
  return issues;
}

function renderMarkdown(results) {
  const lines = [
    '# Chrome Service Audit',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    'This audit opens each portfolio demo in Google Chrome through the DevTools protocol, performs safe UI interactions, and records desktop and mobile layout signals.',
    '',
    '| Repo | URL | Key issues |',
    '| --- | --- | --- |',
  ];
  for (const result of results) {
    const issues = [
      ...scorePass(result.desktop).map(issue => `desktop: ${issue}`),
      ...scorePass(result.mobile).map(issue => `mobile: ${issue}`),
    ];
    lines.push(`| ${result.repo} | ${result.url} | ${issues.length ? issues.join('<br>') : 'No blocking automated issue'} |`);
  }
  lines.push('');
  lines.push('## Detailed Findings');
  for (const result of results) {
    lines.push('');
    lines.push(`### ${result.repo}`);
    lines.push('');
    lines.push(`- URL: ${result.url}`);
    for (const pass of [result.desktop, result.mobile]) {
      const metrics = pass.after ?? {};
      lines.push(`- ${pass.mode}: title "${metrics.title ?? ''}", h1 "${(metrics.h1 ?? []).join(' / ')}", actions ${pass.actions.join(', ') || 'none'}`);
      const issues = scorePass(pass);
      lines.push(`- ${pass.mode} issues: ${issues.length ? issues.join('; ') : 'none'}`);
    }
  }
  lines.push('');
  return `${lines.join('\n')}\n`;
}

async function main() {
  if (!existsSync(chromePath)) throw new Error(`Chrome was not found at ${chromePath}`);
  mkdirSync(outputDir, { recursive: true });

  const port = Number(process.env.AUDIT_CHROME_PORT || 0) || (55000 + Math.floor(Math.random() * 5000));
  const userDataDir = `/tmp/kim3310-service-audit-${Date.now()}`;
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--hide-scrollbars',
    '--remote-debugging-address=127.0.0.1',
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,1000',
    'about:blank',
  ], { stdio: 'ignore' });

  const events = [];
  let session;
  try {
    const page = await openCdpPage(port);
    session = await createSession(page.webSocketDebuggerUrl, event => {
      if (['Runtime.exceptionThrown', 'Log.entryAdded'].includes(event.method)) events.push(event);
    });
    await session.send('Page.enable');
    await session.send('Runtime.enable');
    await session.send('Log.enable');
    await session.send('Page.addScriptToEvaluateOnNewDocument', {
      source: `
        window.__chromeServiceAuditLogs = [];
        const keepLog = (level, args) => {
          window.__chromeServiceAuditLogs.push({
            level,
            message: args.map(item => String(item)).join(' ').slice(0, 300),
            at: Date.now()
          });
        };
        for (const level of ['warn', 'error']) {
          const original = console[level];
          console[level] = (...args) => {
            keepLog(level, args);
            return original.apply(console, args);
          };
        }
        window.addEventListener('error', event => keepLog('error', [event.message]));
        window.addEventListener('unhandledrejection', event => keepLog('error', [event.reason?.message ?? String(event.reason)]));
      `,
    });

    const services = parseServices();
    const results = [];
    for (const service of services) {
      const started = Date.now();
      try {
        const desktop = await auditPass(session, service, 'desktop');
        const mobile = await auditPass(session, service, 'mobile');
        results.push({ ...service, elapsedMs: Date.now() - started, desktop, mobile });
        console.log(`${service.repo}: checked`);
      } catch (error) {
        results.push({ ...service, elapsedMs: Date.now() - started, error: error.message });
        console.log(`${service.repo}: ERROR ${error.message}`);
      }
    }

    writeFileSync(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), events, results }, null, 2));
    writeFileSync(markdownPath, renderMarkdown(results));
    console.log(`wrote ${jsonPath}`);
    console.log(`wrote ${markdownPath}`);
  } finally {
    session?.close();
    if (!chrome.killed) chrome.kill('SIGTERM');
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
