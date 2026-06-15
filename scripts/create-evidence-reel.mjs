import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';
import { spawn } from 'node:child_process';

const root = process.cwd();
const outputDir = resolve(root, 'public/evidence/portfolio-reel');
const voiceAiff = join(outputDir, 'narration.aiff');
const voiceWav = join(outputDir, 'narration.wav');
const videoPath = join(outputDir, 'kim3310-systems-gallery-reel.mp4');
const posterPath = join(outputDir, 'kim3310-systems-gallery-reel-poster.png');
const transcriptPath = join(outputDir, 'transcript.txt');

const narrationLines = [
  'Welcome to the KIM3310 Systems Gallery.',
  'This portfolio is built around reviewable AI systems, not static case studies.',
  'AIX Pilot leads with a deployed enterprise GenAI console for retrieval, agent workflows, data-loss prevention, evaluations, and KPI reporting.',
  'StagePilot shows tool-call reliability through parser recovery, bounded retries, and benchmark evidence for malformed model output.',
  'AegisOps turns incident logs and monitoring screenshots into structured reports, replay evaluations, and operator handoff artifacts.',
  'The Enterprise LLM Adoption Kit demonstrates governance with role-based access, prompt-injection checks, PII redaction, audit logging, and evaluation gates.',
  'The systems gallery connects all thirty-five editable repositories to review lanes, proof routes, and recorded demo evidence.',
  'The gallery closes with a clean coverage ledger: thirty-five editable repositories with recorded pull-request and CI evidence from the audit pass.',
];
const narration = narrationLines.join(' ');

const slides = [
  {
    title: 'AIX Pilot',
    kicker: 'Enterprise GenAI console',
    body: 'RAG, agent workflows, DLP masking, evaluation gates, KPI reporting.',
    image: '/evidence/live/aix-pilot.png',
  },
  {
    title: 'StagePilot',
    kicker: 'Tool-call reliability',
    body: 'Parser recovery, bounded retry, benchmark evidence, package-ready proof.',
    image: '/evidence/live/stage-pilot.png',
  },
  {
    title: 'AegisOps',
    kicker: 'Incident operations',
    body: 'Replay evals, structured reports, severity, RCA, and handoff artifacts.',
    image: '/evidence/live/aegisops.png',
  },
  {
    title: 'Enterprise LLM Adoption Kit',
    kicker: 'Governance and rollout controls',
    body: 'RBAC, redaction, injection checks, audit logs, eval gates.',
    image: '/evidence/live/enterprise-llm-adoption-kit.png',
  },
  {
    title: 'Systems Gallery',
    kicker: 'Evidence-first repository map',
    body: '35 editable repositories now connect to review lanes, demo proof, architecture notes, and quality gates.',
    image: '/evidence/portfolio-reel/systems-gallery.png',
  },
  {
    title: 'TwinCity UI',
    kicker: 'Spatial operations proof',
    body: 'Operator-facing digital twin surface with route and event contracts.',
    image: '/evidence/live/twincity-ui.png',
  },
  {
    title: 'Coverage Ledger',
    kicker: 'Recorded operating posture',
    body: '35 editable repositories with recorded pull-request and CI evidence from the audit pass.',
    image: '/evidence/live/secure-xl2hwp-local.png',
  },
];

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mp4': 'video/mp4',
  '.wav': 'audio/wav',
  '.png': 'image/png',
  '.webp': 'image/webp',
};

function run(command, args) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('exit', code => {
      if (code === 0) resolveRun();
      else reject(new Error(`${command} exited with code ${code}`));
    });
    child.on('error', reject);
  });
}

function renderRecorderPage() {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>KIM3310 evidence reel recorder</title>
  <style>
    body { margin: 0; background: #f5f5f7; display: grid; place-items: center; min-height: 100vh; }
    canvas { width: 1280px; height: 720px; max-width: 100vw; box-shadow: 0 24px 80px rgba(29,29,31,.12); }
  </style>
</head>
<body>
  <canvas id="stage" width="1280" height="720"></canvas>
  <audio id="narration" src="/evidence/portfolio-reel/narration.wav" preload="auto"></audio>
  <script type="module">
    window.__reelDone = false;
    window.__recordingStatus = 'init';
    window.addEventListener('error', event => { window.__reelError = event.message; });
    window.addEventListener('unhandledrejection', event => {
      window.__reelError = event.reason?.message ?? String(event.reason);
    });

    const params = new URLSearchParams(window.location.search);
    const timelineScale = params.get('fast') === '1' ? 0.08 : 1;
    const slides = ${JSON.stringify(slides)};
    const canvas = document.getElementById('stage');
    const ctx = canvas.getContext('2d');
    const audio = document.getElementById('narration');
    const W = canvas.width;
    const H = canvas.height;
    const slideDuration = 6.8 * timelineScale;
    const tailDuration = 2.2 * timelineScale;
    const totalDuration = slides.length * slideDuration + tailDuration;
    const images = await Promise.all(slides.map(async slide => {
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.decoding = 'async';
      image.src = slide.image;
      await image.decode();
      return image;
    }));
    window.__recordingStatus = 'images ready';

    function roundRect(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + width, y, x + width, y + height, radius);
      ctx.arcTo(x + width, y + height, x, y + height, radius);
      ctx.arcTo(x, y + height, x, y, radius);
      ctx.arcTo(x, y, x + width, y, radius);
      ctx.closePath();
    }

    function drawWrapped(text, x, y, maxWidth, lineHeight, maxLines = 3) {
      const words = text.split(' ');
      let line = '';
      let lines = 0;
      for (const word of words) {
        const test = line ? line + ' ' + word : word;
        if (ctx.measureText(test).width > maxWidth && line) {
          ctx.fillText(line, x, y);
          y += lineHeight;
          lines += 1;
          line = word;
          if (lines >= maxLines - 1) break;
        } else {
          line = test;
        }
      }
      if (line && lines < maxLines) ctx.fillText(line, x, y);
    }

    function drawFrame(seconds) {
      const slideIndex = Math.min(slides.length - 1, Math.floor(seconds / slideDuration));
      const slide = slides[slideIndex];
      const image = images[slideIndex];
      const local = (seconds % slideDuration) / slideDuration;
      const progress = Math.min(1, seconds / totalDuration);

      ctx.clearRect(0, 0, W, H);
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, '#fbfbfd');
      bg.addColorStop(.52, '#f5f5f7');
      bg.addColorStop(1, '#ececf0');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = 'rgba(29,29,31,.055)';
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 48) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 48) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      ctx.save();
      ctx.shadowColor = 'rgba(29,29,31,.14)';
      ctx.shadowBlur = 36;
      ctx.shadowOffsetY = 20;
      roundRect(468, 72, 740, 514, 22);
      ctx.fillStyle = 'rgba(255,255,255,.76)';
      ctx.fill();
      ctx.restore();

      roundRect(488, 92, 700, 486, 16);
      ctx.save();
      ctx.clip();
      const zoom = 1.03 + local * 0.035;
      const frameW = 700;
      const frameH = 486;
      const imgRatio = image.width / image.height;
      const frameRatio = frameW / frameH;
      let drawW = frameW * zoom;
      let drawH = drawW / imgRatio;
      if (drawH < frameH * zoom) {
        drawH = frameH * zoom;
        drawW = drawH * imgRatio;
      }
      const panX = -24 * local;
      const panY = -34 * local;
      ctx.drawImage(image, 488 + (frameW - drawW) / 2 + panX, 92 + (frameH - drawH) / 2 + panY, drawW, drawH);
      ctx.restore();
      ctx.strokeStyle = 'rgba(199,199,204,.75)';
      ctx.lineWidth = 1;
      roundRect(488, 92, 700, 486, 16);
      ctx.stroke();

      ctx.fillStyle = '#0071e3';
      ctx.font = '800 18px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('KIM3310 SYSTEMS GALLERY', 72, 98);
      ctx.fillStyle = '#1d1d1f';
      ctx.font = '800 56px -apple-system, BlinkMacSystemFont, sans-serif';
      drawWrapped(slide.title, 72, 182, 380, 62, 2);
      ctx.fillStyle = '#12805c';
      ctx.font = '800 24px -apple-system, BlinkMacSystemFont, sans-serif';
      drawWrapped(slide.kicker, 72, 286, 365, 32, 2);
      ctx.fillStyle = '#3a3a3c';
      ctx.font = '560 23px -apple-system, BlinkMacSystemFont, sans-serif';
      drawWrapped(slide.body, 72, 360, 372, 34, 4);

      ctx.fillStyle = 'rgba(255,255,255,.70)';
      roundRect(72, 548, 338, 64, 14);
      ctx.fill();
      ctx.fillStyle = '#6e6e73';
      ctx.font = '740 15px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText('35 editable repos · recorded PR and CI audit', 92, 586);

      ctx.fillStyle = 'rgba(0,113,227,.12)';
      roundRect(72, 648, 1110, 8, 5);
      ctx.fill();
      ctx.fillStyle = '#0071e3';
      roundRect(72, 648, 1110 * progress, 8, 5);
      ctx.fill();
    }

    window.__posterBase64 = canvas.toDataURL('image/png').split(',')[1];

    const canvasStream = canvas.captureStream(24);
    await audio.play();
    audio.pause();
    audio.currentTime = 0;
    window.__recordingStatus = 'audio primed';
    const captureAudio = audio.captureStream ?? audio.mozCaptureStream;
    if (!captureAudio) throw new Error('Audio captureStream is not available in this browser');
    const audioStream = captureAudio.call(audio);
    if (!audioStream.getAudioTracks().length) throw new Error('Narration audio track was not captured');
    window.__recordingStatus = 'audio captured';
    const stream = new MediaStream([...canvasStream.getVideoTracks(), ...audioStream.getAudioTracks()]);
    const recorderMimeType = [
      'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
      'video/mp4',
    ].find(type => MediaRecorder.isTypeSupported(type));
    if (!recorderMimeType) throw new Error('No supported MP4 MediaRecorder type was found');
    const recorder = new MediaRecorder(stream, {
      mimeType: recorderMimeType,
      videoBitsPerSecond: 1100000,
      audioBitsPerSecond: 96000,
    });
    const chunks = [];
    recorder.ondataavailable = event => {
      if (event.data.size) chunks.push(event.data);
      window.__recordingStatus = 'chunk ' + chunks.length;
    };
    recorder.onstop = async () => {
      window.__recordingStatus = 'stopping';
      const blob = new Blob(chunks, { type: recorderMimeType });
      window.__uploadStatus = 'posting';
      const upload = await fetch('/__upload-reel', {
        method: 'POST',
        headers: { 'Content-Type': recorderMimeType },
        body: blob,
      });
      window.__uploadStatus = 'status ' + upload.status;
      if (!upload.ok) throw new Error('Reel upload failed with status ' + upload.status);
      window.__reelBytes = blob.size;
      const posterBlob = await (await fetch('data:image/png;base64,' + window.__posterBase64)).blob();
      const posterUpload = await fetch('/__upload-poster', {
        method: 'POST',
        headers: { 'Content-Type': 'image/png' },
        body: posterBlob,
      });
      if (!posterUpload.ok) throw new Error('Poster upload failed with status ' + posterUpload.status);
      window.__posterBytes = posterBlob.size;
      window.__uploadStatus = 'ok ' + blob.size;
      window.__reelDone = true;
    };

    let startTime = 0;
    function animate(now) {
      if (!startTime) startTime = now;
      const seconds = (now - startTime) / 1000;
      drawFrame(seconds);
      if (seconds < totalDuration) requestAnimationFrame(animate);
    }

    drawFrame(0);
    window.__posterBase64 = canvas.toDataURL('image/png').split(',')[1];
    recorder.start(1000);
    window.__recordingStatus = 'recording';
    await audio.play();
    requestAnimationFrame(animate);
    setTimeout(() => {
      if (recorder.state !== 'inactive') recorder.stop();
      audio.pause();
    }, totalDuration * 1000);
  </script>
</body>
</html>`;
}

function serveFile(pathname, response) {
  const normalized = decodeURIComponent(pathname).replace(/^\/+/, '');
  const rel = normalized.startsWith('evidence/')
    ? join('public', normalized)
    : normalized;
  const full = resolve(root, rel);
  if (!full.startsWith(root) || !existsSync(full)) {
    response.writeHead(404);
    response.end('not found');
    return;
  }
  response.writeHead(200, {
    'Content-Type': mimeTypes[extname(full)] ?? 'application/octet-stream',
    'Access-Control-Allow-Origin': '*',
  });
  response.end(readFileSync(full));
}

async function chromeEvaluate(webSocketUrl, expression) {
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
    }
  });
  const send = (method, params = {}) => new Promise((resolveMessage, rejectMessage) => {
    const id = ++seq;
    pending.set(id, { resolveMessage, rejectMessage });
    ws.send(JSON.stringify({ id, method, params }));
  });
  await send('Runtime.enable');
  const result = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  ws.close();
  if (result.exceptionDetails) {
    const description = result.exceptionDetails.exception?.description
      ?? result.exceptionDetails.text
      ?? 'Chrome evaluation failed';
    throw new Error(description);
  }
  return result.result.value;
}

function cleanupTempAudio() {
  for (const tempFile of [voiceAiff, voiceWav]) {
    if (existsSync(tempFile)) unlinkSync(tempFile);
  }
}

async function main() {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(transcriptPath, `${narrationLines.join('\n')}\n`, 'utf8');

  try {
    await run('/usr/bin/say', ['-v', 'Samantha', '-r', '166', '-o', voiceAiff, narration]);
    await run('/usr/bin/afconvert', [voiceAiff, '-o', voiceWav, '-f', 'WAVE', '-d', 'LEI16']);

    const server = createServer((request, response) => {
      const url = new URL(request.url ?? '/', 'http://127.0.0.1');
      const uploadTargets = new Map([
        ['/__upload-reel', videoPath],
        ['/__upload-poster', posterPath],
      ]);
      const uploadTarget = uploadTargets.get(url.pathname);
      if (uploadTarget && request.method === 'POST') {
        (async () => {
          const chunks = [];
          for await (const chunk of request) chunks.push(Buffer.from(chunk));
          const body = Buffer.concat(chunks);
          writeFileSync(uploadTarget, body);
          console.log(`received ${url.pathname} (${body.length} bytes)`);
          response.writeHead(204);
          response.end();
        })().catch(error => {
          response.writeHead(500);
          response.end(`upload failed: ${error.message}`);
        });
        return;
      }
      if (url.pathname === '/__reel.html') {
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(renderRecorderPage());
        return;
      }
      serveFile(url.pathname, response);
    });
    await new Promise(resolveServer => server.listen(0, '127.0.0.1', resolveServer));
    const port = server.address().port;

    const chromePort = 42000 + Math.floor(Math.random() * 10000);
    const userDataDir = `/tmp/kim3310-reel-chrome-${Date.now()}`;
    const recorderUrl = `http://127.0.0.1:${port}/__reel.html${process.env.FAST_REEL === '1' ? '?fast=1' : ''}`;
    const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', [
      '--headless=new',
      '--no-first-run',
      '--no-default-browser-check',
      '--disable-gpu',
      '--autoplay-policy=no-user-gesture-required',
      '--remote-debugging-address=127.0.0.1',
      `--remote-debugging-port=${chromePort}`,
      `--user-data-dir=${userDataDir}`,
      recorderUrl,
    ], { stdio: 'ignore' });

    try {
      let pages;
      for (let attempt = 0; attempt < 80; attempt += 1) {
        try {
          pages = await fetch(`http://127.0.0.1:${chromePort}/json`).then(res => res.json());
          if (pages.some(item => item.url === recorderUrl)) break;
        } catch {
        }
        await delay(250);
      }
      if (!pages?.length) throw new Error('Chrome DevTools endpoint did not become ready');
      const page = pages.find(item => item.url === recorderUrl);
      if (!page) throw new Error(`Recorder page was not found. Open pages: ${pages.map(item => item.url).join(', ')}`);
      await delay(1000);

      const resultJson = await chromeEvaluate(page.webSocketDebuggerUrl, `(async () => JSON.stringify(await new Promise((resolve, reject) => {
        const snapshot = () => ({
          done: window.__reelDone,
          location: window.location.href,
          readyState: document.readyState,
          recordingStatus: window.__recordingStatus,
          uploadStatus: window.__uploadStatus,
          videoBytes: window.__reelBytes,
          posterBytes: window.__posterBytes,
        });
        const started = Date.now();
        const timer = setInterval(() => {
          if (window.__reelDone) {
            clearInterval(timer);
            resolve(snapshot());
          }
          if (window.__reelError) {
            clearInterval(timer);
            reject(new Error(window.__reelError + ' ' + JSON.stringify(snapshot())));
          }
          if (Date.now() - started > 90000) {
            clearInterval(timer);
            reject(new Error('Timed out waiting for reel recording ' + JSON.stringify(snapshot())));
          }
        }, 250);
      })))()`);
      const result = typeof resultJson === 'string' ? JSON.parse(resultJson) : resultJson;

      if (!existsSync(videoPath)) {
        throw new Error(`Reel video upload did not create an output file: ${JSON.stringify(result)}`);
      }
      if (!existsSync(posterPath)) {
        throw new Error(`Reel poster upload did not create an output file: ${JSON.stringify(result)}`);
      }
      console.log(`created ${videoPath} (${result.videoBytes} bytes)`);
      console.log(`created ${posterPath} (${result.posterBytes} bytes)`);
    } finally {
      if (!chrome.killed) chrome.kill('SIGTERM');
      server.close();
    }
  } finally {
    cleanupTempAudio();
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
