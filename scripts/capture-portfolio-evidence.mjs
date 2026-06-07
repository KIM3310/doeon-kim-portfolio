import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { spawn } from 'node:child_process';

const root = process.cwd();
const distDir = resolve(root, 'dist');
const outputDir = resolve(root, 'public/evidence/portfolio-reel');
const outputPath = join(outputDir, 'systems-gallery.png');

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp4': 'video/mp4',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function serveStatic(pathname, response) {
  const normalized = decodeURIComponent(pathname).replace(/^\/+/, '') || 'index.html';
  const candidate = resolve(distDir, normalized);
  const full = candidate.startsWith(distDir) && existsSync(candidate)
    ? candidate
    : resolve(distDir, 'index.html');

  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(full)] ?? 'application/octet-stream',
    'Access-Control-Allow-Origin': '*',
  });
  response.end(readFileSync(full));
}

function createDevToolsSession(webSocketUrl) {
  const ws = new WebSocket(webSocketUrl);
  const pending = new Map();
  let seq = 0;

  const opened = new Promise((resolveOpen, reject) => {
    ws.addEventListener('open', resolveOpen, { once: true });
    ws.addEventListener('error', reject, { once: true });
  });

  ws.addEventListener('message', event => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;

    const { resolveMessage, rejectMessage } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) rejectMessage(new Error(message.error.message));
    else resolveMessage(message.result);
  });

  const send = async (method, params = {}) => {
    await opened;
    return new Promise((resolveMessage, rejectMessage) => {
      const id = ++seq;
      pending.set(id, { resolveMessage, rejectMessage });
      ws.send(JSON.stringify({ id, method, params }));
    });
  };

  return {
    send,
    close: () => ws.close(),
  };
}

async function main() {
  if (!existsSync(resolve(distDir, 'index.html'))) {
    throw new Error('Missing dist/index.html. Run npm run build before capturing portfolio evidence.');
  }

  mkdirSync(outputDir, { recursive: true });

  const server = createServer((request, response) => {
    const url = new URL(request.url ?? '/', 'http://127.0.0.1');
    serveStatic(url.pathname, response);
  });
  await new Promise(resolveServer => server.listen(0, '127.0.0.1', resolveServer));
  const port = server.address().port;

  const chromePort = 43000 + Math.floor(Math.random() * 10000);
  const userDataDir = `/tmp/kim3310-portfolio-capture-${Date.now()}`;
  const targetUrl = `http://127.0.0.1:${port}/#projects`;
  const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
    '--headless=new',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--hide-scrollbars',
    '--remote-debugging-address=127.0.0.1',
    `--remote-debugging-port=${chromePort}`,
    `--user-data-dir=${userDataDir}`,
    '--window-size=1440,1400',
    targetUrl,
  ], { stdio: 'ignore' });

  let session;
  try {
    let pages;
    for (let attempt = 0; attempt < 80; attempt += 1) {
      try {
        pages = await fetch(`http://127.0.0.1:${chromePort}/json`).then(res => res.json());
        if (pages.some(item => item.url === targetUrl)) break;
      } catch {
      }
      await delay(250);
    }
    const page = pages?.find(item => item.url === targetUrl) ?? pages?.[0];
    if (!page) throw new Error('Chrome DevTools endpoint did not become ready for portfolio capture.');

    session = createDevToolsSession(page.webSocketDebuggerUrl);
    await session.send('Runtime.enable');
    await session.send('Page.enable');

    const sectionResult = await session.send('Runtime.evaluate', {
      awaitPromise: true,
      returnByValue: true,
      expression: `(async () => {
        await document.fonts?.ready;
        const section = document.querySelector('#projects');
        if (!section) throw new Error('Projects section was not found');
        section.querySelectorAll('details').forEach((details, index) => { details.open = index < 2; });
        section.scrollIntoView({ block: 'start' });
        await new Promise(resolve => setTimeout(resolve, 700));
        const rect = section.getBoundingClientRect();
        return {
          x: Math.max(0, rect.left),
          y: Math.max(0, window.scrollY + rect.top),
          width: Math.min(document.documentElement.clientWidth, rect.width),
          height: Math.min(rect.height, 1180),
          projectCards: document.querySelectorAll('.project-card').length,
        };
      })()`,
    });

    if (sectionResult.exceptionDetails) {
      throw new Error(sectionResult.exceptionDetails.exception?.description ?? 'Portfolio capture setup failed');
    }

    const clip = sectionResult.result.value;
    if (clip.projectCards < 12) {
      throw new Error(`Expected project cards before capture, found ${clip.projectCards}`);
    }

    const screenshot = await session.send('Page.captureScreenshot', {
      format: 'png',
      captureBeyondViewport: true,
      clip: {
        x: clip.x,
        y: clip.y,
        width: clip.width,
        height: clip.height,
        scale: 1,
      },
    });
    const bytes = Buffer.from(screenshot.data, 'base64');
    writeFileSync(outputPath, bytes);
    console.log(`captured ${outputPath} (${bytes.length} bytes)`);
  } finally {
    session?.close();
    if (!chrome.killed) chrome.kill('SIGTERM');
    server.close();
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
