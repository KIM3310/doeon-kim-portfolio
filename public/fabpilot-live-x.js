const MISSIONS = [
  {
    id: 'release',
    railTitle: 'Etch thermal + yield drift',
    railMeta: 'SEV-1 · Release boundary',
    railSummary: 'One unstable service lane threatens yield recovery under peak load.',
    heroBadge: 'SEV-1 live mission',
    heroTitle: 'Etch line thermal + yield drift',
    heroCopy: 'Tool ET-204 shows thermal instability while lot queue divergence hints at release risk across one production lane.',
    heroStatus: 'Approval gate active',
    metrics: [
      { value: '6', label: 'lots at risk', detail: 'one lane under watch' },
      { value: '94 sec', label: 'voice to brief', detail: 'operator-ready summary' },
      { value: '3', label: 'decision layers', detail: 'observe · reason · approve' }
    ],
    pipeline: [
      { title: 'Observe', copy: 'Fuse operator speech, service alarms, SPC drift, and shared dashboard state.' },
      { title: 'Reason', copy: 'Rank thermal instability against config drift and rollback risk.' },
      { title: 'Approve', copy: 'Stage release hold, SOP drill-down, and console navigation behind approval.' }
    ],
    incident: {
      severity: 'SEV-1',
      title: 'Etch line thermal + yield drift',
      summary: 'Cross-modal evidence suggests service instability cascading into yield risk before full recovery failure becomes obvious.',
      window: 'Window · 09:14 → 09:31',
      owner: 'Owner · Release lead',
      mode: 'Mode · Multimodal risk triage',
      cards: [
        { value: '+4.8σ', label: 'SPC burst' },
        { value: '6', label: 'lots exposed' },
        { value: '0', label: 'unsafe auto-actions' }
      ],
      rootCause: 'Thermal instability amplified by an unsafe change boundary is the strongest explanation.',
      escalation: 'Escalate release lead, maintenance owner, and shift lead together.'
    },
    timeline: [
      { stamp: '09:14', text: 'SPC chart crosses warning threshold while the queue still looks superficially healthy.' },
      { stamp: '09:21', text: 'Repeated service alarms and lot divergence widen the blast radius for recovery.' },
      { stamp: '09:27', text: 'The system recommends a release hold before rollout drift broadens.' }
    ],
    decisionPosture: 'Grounded reasoning',
    decisionSummary: 'The reasoning is inspectable: observed evidence, strongest hypothesis, alternative explanation, and boundary conditions remain visible.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Service alarms, SPC drift, and operator note correlate around the same release lane.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'Thermal instability is the best fit because alarm cadence and prior incident similarity align tightly.' },
      { label: 'Hypothesis #2', state: 'moderate', copy: 'Pure change-logic regression remains possible, but it does not explain the thermal signature alone.' },
      { label: 'Boundary', state: 'caution', copy: 'Real-world intervention still requires explicit owner approval beyond the command surface.' }
    ],
    automationPosture: 'Observe → reason → approve',
    automationSummary: 'The system stages the next safe steps without hiding uncertainty: open the service detail page, prepare a release hold, and attach rollback context.',
    automationSteps: [
      { state: 'ready', title: 'Open ET-204 detail view', copy: 'Deep-link into the service dashboard with the exact alarm window and SPC overlay preselected.' },
      { state: 'review', title: 'Stage release hold proposal', copy: 'Prepare containment for six lots with blast-radius notes and release criteria.' },
      { state: 'review', title: 'Launch SOP step window', copy: 'Open the service-stability SOP at the recommended validation step for shift review.' },
      { state: 'blocked', title: 'Physical maintenance boundary', copy: 'Any real-world intervention remains explicitly outside autonomous action.' }
    ],
    voiceQuote: 'ET-204 is the dominant source of risk. The evidence supports thermal instability over simple drift, with six lots requiring immediate containment review.',
    handoff: [
      { label: 'Affected scope', value: '6 lots / lane B' },
      { label: 'Immediate ask', value: 'Approve release hold + SOP drill-down' },
      { label: 'Signed artifact', value: 'Shift handoff pack ready' }
    ],
    artifact: 'Mission: Etch thermal + yield drift\nObserved: SPC burst + alarm cadence + operator note\nDecision: release hold recommended\nBoundary: physical maintenance blocked without owner approval\nHandoff: signed shift artifact ready'
  },
  {
    id: 'overlay',
    railTitle: 'Lithography overlay anomaly',
    railMeta: 'SEV-2 · Quality drift',
    railSummary: 'Overlay variance emerges while throughput remains deceptively healthy.',
    heroBadge: 'SEV-2 live mission',
    heroTitle: 'Lithography overlay drift after recipe update',
    heroCopy: 'Alignment variance climbs after a recipe package update while the line still looks healthy from a throughput-only view.',
    heroStatus: 'Rollback route prepared',
    metrics: [
      { value: '2', label: 'changes exposed', detail: 'customer-critical path' },
      { value: '+18%', label: 'overlay variance', detail: 'above model envelope' },
      { value: '1', label: 'rollback path', detail: 'bounded revert only' }
    ],
    pipeline: [
      { title: 'Observe', copy: 'Connect alignment drift, release history, and quality dashboard state.' },
      { title: 'Reason', copy: 'Separate true process drift from metrology noise.' },
      { title: 'Approve', copy: 'Prepare bounded rollback and change review with owner signoff.' }
    ],
    incident: {
      severity: 'SEV-2',
      title: 'Lithography overlay drift after recipe update',
      summary: 'The evidence points to a recipe-linked overlay drift event rather than a broad hardware failure.',
      window: 'Window · 13:08 → 13:24',
      owner: 'Owner · Litho quality engineer',
      mode: 'Mode · Release-aware process reasoning',
      cards: [
        { value: '+18%', label: 'overlay variance' },
        { value: '2', label: 'changes pending review' },
        { value: '15 min', label: 'observation hold' }
      ],
      rootCause: 'Recipe package R-31 likely changed alignment sensitivity under one mask family.',
      escalation: 'Escalate litho engineer and release owner together.'
    },
    timeline: [
      { stamp: '13:08', text: 'Recipe package R-31 reaches the target service family.' },
      { stamp: '13:16', text: 'Overlay variance breaches learned tolerance while throughput remains stable.' },
      { stamp: '13:21', text: 'The system recommends bounded rollback instead of broad rollback theatre.' }
    ],
    decisionPosture: 'Confidence-qualified reasoning',
    decisionSummary: 'The system shows not only the favored hypothesis but also what was ruled out, so rollback proposals feel engineered rather than improvised.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Overlay drift and release timing align tightly while broader service health remains stable.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'Recipe-linked alignment sensitivity is the best fit.' },
      { label: 'Hypothesis #2', state: 'moderate', copy: 'Metrology noise is less likely because the variance persists across repeated checks.' },
      { label: 'Boundary', state: 'caution', copy: 'Change release cannot be automated until rollback and validation are explicitly approved.' }
    ],
    automationPosture: 'Review → prepare → approve',
    automationSummary: 'The product packages the rollback path, exposed changes, and observation window into one owner-reviewable action bundle.',
    automationSteps: [
      { state: 'ready', title: 'Open recipe release console', copy: 'Pin package history and the affected service family on one screen.' },
      { state: 'review', title: 'Stage bounded rollback', copy: 'Prepare a recipe revert while preserving trace context.' },
      { state: 'review', title: 'Hold change disposition', copy: 'Draft a temporary change review decision for the two exposed changes.' },
      { state: 'blocked', title: 'Final release decision', copy: 'Change release waits for owner approval.' }
    ],
    voiceQuote: 'This is a recipe-linked SEV-2 quality event. The strongest path is a bounded rollback of package R-31 for the affected service family.',
    handoff: [
      { label: 'Affected scope', value: '2 changes / one recipe family' },
      { label: 'Immediate ask', value: 'Approve bounded rollback' },
      { label: 'Signed artifact', value: 'Validation hold plan ready' }
    ],
    artifact: 'Mission: Lithography overlay drift\nObserved: release timing + overlay variance\nDecision: bounded rollback\nBoundary: owner signoff required\nHandoff: validation hold plan ready'
  },
  {
    id: 'handoff',
    railTitle: 'Shift handoff + hold drift',
    railMeta: 'SEV-2 · Handoff governance',
    railSummary: 'A release hold is partially staged, but a shift transition risks losing the exact reasoning and approval history.',
    heroBadge: 'SEV-2 governance mission',
    heroTitle: 'Shift handoff drift around a pending release hold',
    heroCopy: 'The operational risk is not a broken service but a broken memory boundary: the next shift may inherit incomplete reasoning and stale UI state.',
    heroStatus: 'Signed handoff required',
    metrics: [
      { value: '4', label: 'changes awaiting review', detail: '2 owners still misaligned' },
      { value: '88 sec', label: 'handoff pack ready', detail: 'checkpoint preserved' },
      { value: '4', label: 'approval checkpoints', detail: 'before mutation continues' }
    ],
    pipeline: [
      { title: 'Observe', copy: 'Bind pending hold state, incomplete approvals, and UI checkpoints together.' },
      { title: 'Reason', copy: 'Distinguish safe context recovery from unsafe state mutation.' },
      { title: 'Approve', copy: 'Generate a signed handoff record and recover the exact console path for the next shift.' }
    ],
    incident: {
      severity: 'SEV-2',
      title: 'Shift handoff drift around a pending release hold',
      summary: 'The biggest risk is losing the reasoning and approval chain during shift transition.',
      window: 'Window · 19:42 → 19:58',
      owner: 'Owner · Release lead + quality owner',
      mode: 'Mode · Governance-aware operations',
      cards: [
        { value: '4', label: 'changes awaiting review' },
        { value: '2', label: 'owners not aligned' },
        { value: '1', label: 'signed handoff needed' }
      ],
      rootCause: 'A partially completed hold workflow and incomplete shift documentation created a context-fracture risk.',
      escalation: 'Escalate shift lead and quality owner together.'
    },
    timeline: [
      { stamp: '19:42', text: 'Hold workflow starts but pauses before final confirmation.' },
      { stamp: '19:49', text: 'Shift boundary approaches while two owners still disagree.' },
      { stamp: '19:56', text: 'The system pivots to signed handoff generation and state recovery.' }
    ],
    decisionPosture: 'Governance-aware reasoning',
    decisionSummary: 'The system treats ambiguity as a first-class operational risk and explicitly prefers signed handoff over silent completion.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Hold flow is incomplete and ownership is about to transition.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'The dominant risk is reasoning loss across shifts.' },
      { label: 'Safe path', state: 'strong', copy: 'Generate a signed handoff package and restore console state for the next owner.' },
      { label: 'Boundary', state: 'caution', copy: 'No governance mutation proceeds without explicit acceptance.' }
    ],
    automationPosture: 'Review → document → resume',
    automationSummary: 'The system restores exact console state, packages the approval chain, and prevents silent continuation.',
    automationSteps: [
      { state: 'ready', title: 'Capture paused console state', copy: 'Freeze the current hold path, pending approvals, and owner context into the session record.' },
      { state: 'review', title: 'Generate signed handoff pack', copy: 'Package rationale, evidence, and next-click path for the incoming shift lead.' },
      { state: 'review', title: 'Restore navigator checkpoint', copy: 'Open the exact console step where the next shift should resume.' },
      { state: 'blocked', title: 'Governance mutation boundary', copy: 'No change release or hold mutation occurs until the new owner accepts context.' }
    ],
    voiceQuote: 'The biggest risk is losing context across the shift boundary. Accept the signed handoff package, reopen the stored checkpoint, and only then continue.',
    handoff: [
      { label: 'Affected scope', value: '4 changes / 2 owners' },
      { label: 'Immediate ask', value: 'Accept signed handoff before mutation' },
      { label: 'Signed artifact', value: 'Checkpoint + rationale preserved' }
    ],
    artifact: 'Mission: Shift handoff drift\nObserved: incomplete hold workflow + ownership mismatch\nDecision: signed handoff and checkpoint recovery\nBoundary: no mutation before owner acceptance\nHandoff: checkpoint + rationale preserved'
  }
];

const refs = {
  rail: document.getElementById('scenario-rail'),
  heroBadge: document.getElementById('hero-badge'),
  heroTitle: document.getElementById('hero-title'),
  heroCopy: document.getElementById('hero-copy'),
  heroStatus: document.getElementById('hero-status'),
  heroSummary: document.getElementById('hero-summary'),
  heroMetrics: document.getElementById('hero-metrics'),
  pipelineStrip: document.getElementById('pipeline-strip'),
  incidentTitle: document.getElementById('incident-title'),
  incidentSummary: document.getElementById('incident-summary'),
  briefCards: document.getElementById('brief-cards'),
  timelineList: document.getElementById('timeline-list'),
  decisionPosture: document.getElementById('decision-posture'),
  decisionSummary: document.getElementById('decision-summary'),
  decisionList: document.getElementById('decision-list'),
  automationPosture: document.getElementById('automation-posture'),
  automationSummary: document.getElementById('automation-summary'),
  runwaySteps: document.getElementById('runway-steps'),
  voiceQuote: document.getElementById('voice-quote'),
  voiceAudience: document.getElementById('voice-audience'),
  handoffStrip: document.getElementById('handoff-strip'),
  artifactPreview: document.getElementById('artifact-preview'),
  copyBrief: document.getElementById('copy-brief'),
  downloadPack: document.getElementById('download-pack'),
  copyShareLink: document.getElementById('copy-share-link')
};

const escapeHtml = (value) => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function renderMissionCards(items, el, renderer) {
  if (!el) return;
  el.innerHTML = items.map(renderer).join('');
}

function buildMissionPack(mission) {
  return {
    mission_id: mission.id,
    title: mission.incident.title,
    severity: mission.incident.severity,
    summary: mission.incident.summary,
    window: mission.incident.window,
    owner: mission.incident.owner,
    root_cause: mission.incident.rootCause,
    escalation: mission.incident.escalation,
    decision_trace: mission.decisionTrace,
    automation_steps: mission.automationSteps,
    handoff: mission.handoff,
  };
}

function syncMissionUrl(id) {
  const url = new URL(window.location.href);
  url.searchParams.set('mission', id);
  window.history.replaceState({}, '', url.toString());
}

function setMission(id) {
  const mission = MISSIONS.find((item) => item.id === id) || MISSIONS[0];
  if (!mission) return;
  syncMissionUrl(mission.id);

  if (refs.heroBadge) refs.heroBadge.textContent = mission.heroBadge;
  if (refs.heroTitle) refs.heroTitle.textContent = mission.heroTitle;
  if (refs.heroCopy) refs.heroCopy.textContent = mission.heroCopy;
  if (refs.heroStatus) refs.heroStatus.textContent = mission.heroStatus;
  if (refs.heroSummary) refs.heroSummary.textContent = `FabPilot Live X turns multimodal operational context into a reviewable command surface: evidence graph, decision trace, approval-gated action, signed handoff, and replayable debug evidence.`;

  renderMissionCards(mission.metrics, refs.heroMetrics, (item) => `<article class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span><p>${escapeHtml(item.detail)}</p></article>`);
  renderMissionCards(mission.pipeline, refs.pipelineStrip, (item) => `<article class="card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.copy)}</p></article>`);

  if (refs.incidentTitle) refs.incidentTitle.textContent = mission.incident.title;
  if (refs.incidentSummary) refs.incidentSummary.textContent = mission.incident.summary;
  renderMissionCards(mission.incident.cards, refs.briefCards, (item) => `<article class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`);
  renderMissionCards(mission.timeline, refs.timelineList, (item) => `<li><p><strong>${escapeHtml(item.stamp)}</strong> — ${escapeHtml(item.text)}</p></li>`);

  if (refs.decisionPosture) refs.decisionPosture.textContent = mission.decisionPosture;
  if (refs.decisionSummary) refs.decisionSummary.textContent = mission.decisionSummary;
  renderMissionCards(mission.decisionTrace, refs.decisionList, (item) => `<article class="card"><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(item.copy)}</p></article>`);

  if (refs.automationPosture) refs.automationPosture.textContent = mission.automationPosture;
  if (refs.automationSummary) refs.automationSummary.textContent = mission.automationSummary;
  renderMissionCards(mission.automationSteps, refs.runwaySteps, (item) => `<li><p><strong>${escapeHtml(item.title)}</strong> — ${escapeHtml(item.copy)}</p></li>`);

  if (refs.voiceQuote) refs.voiceQuote.textContent = mission.voiceQuote;
  if (refs.voiceAudience) refs.voiceAudience.textContent = mission.incident.owner;
  renderMissionCards(mission.handoff, refs.handoffStrip, (item) => `<article class="card"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></article>`);
  if (refs.artifactPreview) refs.artifactPreview.textContent = JSON.stringify(buildMissionPack(mission), null, 2);

  if (refs.rail) {
    [...refs.rail.querySelectorAll('button')].forEach((button) => {
      button.setAttribute('aria-selected', String(button.dataset.missionId === mission.id));
    });
  }

  try { localStorage.setItem('fabpilot_mission', mission.id); } catch {}
}

function downloadArtifact() {
  if (!refs.artifactPreview) return;
  const blob = new Blob([refs.artifactPreview.textContent || ''], { type: 'application/json;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'fabpilot-mission-pack.json';
  a.click();
  URL.revokeObjectURL(url);
}

function copyText(value) {
  navigator.clipboard?.writeText(value).catch(() => {});
}

document.addEventListener('DOMContentLoaded', () => {
  if (refs.rail) {
    refs.rail.innerHTML = MISSIONS.map((mission, index) => `
      <button class="card" type="button" data-mission-id="${mission.id}" aria-selected="false">
        <strong>Mission ${index + 1}</strong>
        <span>${escapeHtml(mission.railTitle)}</span>
        <p>${escapeHtml(mission.railSummary)}</p>
      </button>
    `).join('');
    [...refs.rail.querySelectorAll('button')].forEach((button) => button.addEventListener('click', () => setMission(button.dataset.missionId)));
  }

  const initial = (() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const requested = params.get('mission');
      if (requested && MISSIONS.some((mission) => mission.id === requested)) return requested;
      return localStorage.getItem('fabpilot_mission') || MISSIONS[0].id;
    } catch {
      return MISSIONS[0].id;
    }
  })();
  setMission(initial);

  refs.copyBrief?.addEventListener('click', () => copyText(refs.artifactPreview?.textContent || ''));
  refs.downloadPack?.addEventListener('click', downloadArtifact);
  refs.copyShareLink?.addEventListener('click', () => copyText(window.location.href));
});
