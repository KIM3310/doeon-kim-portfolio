const MISSIONS = [
  {
    id: 'release',
    railTitle: 'Wafer scheduler release risk',
    railMeta: 'SEV-1 · Release boundary',
    railSummary: 'One risky service change threatens operational recovery under peak load.',
    heroBadge: 'SEV-1 live mission',
    heroTitle: 'Wafer scheduler release risk',
    heroCopy: 'Service T1-OPS shows thermal instability while change queue divergence hints at release risk across one production lane.',
    heroStatus: 'Approval gate active',
    metrics: [
      { value: '6', label: 'changes at risk', detail: 'one lane under watch' },
      { value: '94 sec', label: 'voice to brief', detail: 'operator-ready summary' },
      { value: '3', label: 'decision layers', detail: 'observe · reason · approve' }
    ],
    telemetry: { radius: '3 services · 6 changes', time: '94 sec', confidence: '0.86' },
    mapNodes: ['Voice intake', 'Evidence graph', 'Approval runway'],
    pipeline: [
      { title: 'Observe', copy: 'Fuse operator speech, service alarms, SPC drift, and shared dashboard state.' },
      { title: 'Reason', copy: 'Rank thermal instability against config drift and rollback risk.' },
      { title: 'Approve', copy: 'Stage release hold, SOP drill-down, and console navigation behind approval.' }
    ],
    incident: {
      severity: 'SEV-1',
      summary: 'Cross-modal evidence suggests service instability cascading into release risk before full recovery failure becomes obvious.',
      window: 'Window · 09:14 → 09:31',
      owner: 'Owner · Release lead',
      mode: 'Mode · Multimodal risk triage',
      cards: [
        { value: '+4.8σ', label: 'SPC burst' },
        { value: '6', label: 'changes exposed' },
        { value: '0', label: 'unsafe auto-actions allowed' }
      ],
      rootCause: 'The strongest explanation is thermal instability amplified by an unsafe change boundary; the release is risky because evidence and rollback proof are incomplete.',
      escalation: 'Escalate release lead, maintenance owner, and shift lead together so change-state and operational-state decisions stay synchronized.'
    },
    evidenceCaption: 'Correlated change + service evidence',
    evidenceNodes: [
      { label: 'Alarm', title: 'Thermal alarm cadence', detail: 'Repeated alarms spike before the release posture fully degrades.' },
      { label: 'State', title: 'SPC drift', detail: 'Key process variable breaks its learned envelope inside the review window.' },
      { label: 'History', title: 'Prior incident match', detail: 'Similarity retrieval surfaces an archived maintenance-linked release miss.' },
      { label: 'Voice', title: 'Operator report', detail: 'Shift operator confirms abnormal stabilization time after the last change set.' }
    ],
    timeline: [
      { stamp: '09:14', text: 'SPC chart crosses warning threshold while the queue still looks superficially healthy.' },
      { stamp: '09:21', text: 'Repeated service alarms and change divergence widen the blast radius for recovery.' },
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
      { state: 'review', title: 'Stage release hold proposal', copy: 'Prepare containment for six changes with blast-radius notes and release criteria.' },
      { state: 'review', title: 'Launch SOP step window', copy: 'Open the service-stability SOP at the recommended validation step for shift review.' },
      { state: 'blocked', title: 'Physical maintenance boundary', copy: 'Any real-world intervention remains explicitly outside autonomous action.' }
    ],
    automationNote: 'The trust boundary is visible: the system can stage actions, but it does not fake authority it does not have.',
    voiceAudience: 'Audience · Shift lead + process engineer',
    voiceTone: 'Tone · calm / operational',
    voiceOutput: 'Output · 42-second spoken brief',
    voiceQuote: 'ET-204 is the dominant source of risk. The evidence supports thermal instability over simple change drift, with six changes requiring immediate containment review. I recommend opening the service detail page, preparing a release hold, and validating the service stability SOP before physical intervention.',
    handoff: [
      { label: 'Affected scope', value: '6 changes / lane B' },
      { label: 'Immediate ask', value: 'Approve release hold + SOP drill-down' },
      { label: 'Signed artifact', value: 'Shift handoff pack ready' }
    ],
    debugPosture: 'Replay-ready · trace sealed',
    debugSummary: 'Every live event is session-bound and replayable: voice transcript, screenshot hash, evidence retrieval, proposed actions, approvals, and blocked boundaries.',
    debugMetrics: [
      { value: 'trace:fplx-release-0914', label: 'Trace ID' },
      { value: '182ms', label: 'Grounding latency' },
      { value: '0', label: 'Unsafe actions attempted' }
    ],
    debugEvents: [
      { stamp: '09:14:07', title: 'voice.transcript', detail: 'Operator asks for the highest-risk service and change cluster.' },
      { stamp: '09:14:18', title: 'vision.grounding', detail: 'Shared dashboard pins the unstable lane and review window.' },
      { stamp: '09:14:24', title: 'action.plan', detail: 'System proposes release hold and service-detail review, awaiting approval.' },
      { stamp: '09:14:29', title: 'guard.block', detail: 'Physical maintenance path is flagged as out-of-bounds for autonomous execution.' }
    ]
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
      { value: '2', label: 'changes immediately exposed', detail: 'customer-critical path' },
      { value: '+18%', label: 'overlay variance', detail: 'above model envelope' },
      { value: '1', label: 'safe rollback path', detail: 'recipe bundle revert only' }
    ],
    telemetry: { radius: '2 changes · 1 service family', time: '121 sec', confidence: '0.81' },
    mapNodes: ['Voice escalation', 'Overlay evidence graph', 'Rollback runway'],
    pipeline: [
      { title: 'Observe', copy: 'Connect alignment drift, release history, and quality dashboard state.' },
      { title: 'Reason', copy: 'Separate real process drift from metrology-noise and service-health false positives.' },
      { title: 'Approve', copy: 'Prepare bounded rollback and change review with explicit owner signoff.' }
    ],
    incident: {
      severity: 'SEV-2',
      summary: 'The evidence points to a recipe-linked overlay drift event rather than a broad hardware failure.',
      window: 'Window · 13:08 → 13:24',
      owner: 'Owner · Litho quality engineer',
      mode: 'Mode · Release-aware process reasoning',
      cards: [
        { value: '+18%', label: 'overlay variance' },
        { value: '2', label: 'changes pending review' },
        { value: '15 min', label: 'observation hold window' }
      ],
      rootCause: 'Recipe package R-31 likely changed alignment sensitivity under one mask family, which explains the localized drift without broader instability.',
      escalation: 'Escalate litho engineer and release owner together so rollback and change disposition remain synchronized.'
    },
    evidenceCaption: 'Release-aligned quality evidence',
    evidenceNodes: [
      { label: 'Release', title: 'Recipe package delta', detail: 'Drift begins shortly after R-31 reaches the affected service family.' },
      { label: 'Quality', title: 'Overlay envelope break', detail: 'Variance spikes above the model envelope without correlated thermal alarms.' },
      { label: 'History', title: 'Rollback precedent', detail: 'Runbook recommends bounded revert while preserving calibration metadata.' },
      { label: 'Voice', title: 'Engineer note', detail: 'On-call engineer confirms no cross-family instability across neighboring services.' }
    ],
    timeline: [
      { stamp: '13:08', text: 'Recipe package R-31 reaches the target service family.' },
      { stamp: '13:16', text: 'Overlay variance breaches learned tolerance while throughput remains stable.' },
      { stamp: '13:21', text: 'The system recommends bounded rollback instead of broad rollback theatre.' }
    ],
    decisionPosture: 'Confidence-qualified reasoning',
    decisionSummary: 'The system shows not only the favored hypothesis but also what was ruled out, so rollback proposals feel engineered rather than improvised.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Overlay drift and release timing align tightly while broader service health remains stable.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'Recipe-linked alignment sensitivity is the best fit to the localized drift pattern.' },
      { label: 'Hypothesis #2', state: 'moderate', copy: 'Metrology noise is less likely because the variance persists across repeated checks.' },
      { label: 'Boundary', state: 'caution', copy: 'Change release cannot be automated until rollback and validation are explicitly approved.' }
    ],
    automationPosture: 'Review → prepare → approve',
    automationSummary: 'The product packages the rollback path, exposed changes, and observation window into one owner-reviewable action bundle.',
    automationSteps: [
      { state: 'ready', title: 'Open recipe release console', copy: 'Pin R-31 package history and the affected service family on one screen.' },
      { state: 'review', title: 'Stage bounded rollback', copy: 'Prepare a recipe revert while preserving calibration metadata and trace context.' },
      { state: 'review', title: 'Hold change disposition', copy: 'Draft a temporary change review decision for the two exposed changes.' },
      { state: 'blocked', title: 'Final release decision', copy: 'Change release waits for owner approval and a post-rollback observation commit.' }
    ],
    automationNote: 'Rollback becomes safer because context is packaged before action, not after.',
    voiceAudience: 'Audience · Litho owner + release lead',
    voiceTone: 'Tone · concise / engineering leadership',
    voiceOutput: 'Output · 36-second spoken brief',
    voiceQuote: 'This is a recipe-linked SEV-2 quality event. The strongest path is a bounded rollback of package R-31 for the affected service family, plus a temporary hold on two changes until overlay variance returns inside the validation envelope.',
    handoff: [
      { label: 'Affected scope', value: '2 changes / one recipe family' },
      { label: 'Immediate ask', value: 'Approve bounded rollback' },
      { label: 'Signed artifact', value: 'Validation hold plan ready' }
    ],
    debugPosture: 'Replay-ready · rollback staged',
    debugSummary: 'Rollback proposals and validation checkpoints are tied to one trace so reviewers can inspect exactly why the recommendation appeared.',
    debugMetrics: [
      { value: 'trace:fplx-overlay-1308', label: 'Trace ID' },
      { value: '224ms', label: 'Evidence fusion latency' },
      { value: '1', label: 'Rollback path prepared' }
    ],
    debugEvents: [
      { stamp: '13:08:11', title: 'release.observe', detail: 'Recipe package R-31 enters the target service family.' },
      { stamp: '13:16:04', title: 'quality.alert', detail: 'Overlay variance crosses threshold while neighboring families remain healthy.' },
      { stamp: '13:16:22', title: 'action.plan', detail: 'System prepares rollback console path and change review checklist.' },
      { stamp: '13:16:31', title: 'approval.wait', detail: 'Execution pauses pending release-owner signoff.' }
    ]
  },
  {
    id: 'handoff',
    railTitle: 'Shift handoff + hold drift',
    railMeta: 'SEV-2 · Handoff governance',
    railSummary: 'A release hold is partially staged, but a shift transition risks losing the exact reasoning and approval history.',
    heroBadge: 'SEV-2 governance mission',
    heroTitle: 'Shift handoff drift around a pending release hold',
    heroCopy: 'The operational risk is not a broken service but a broken memory boundary: the next shift may inherit incomplete reasoning, stale UI state, and unsafe ambiguity.',
    heroStatus: 'Signed handoff required',
    metrics: [
      { value: '4', label: 'changes awaiting disposition', detail: '2 owners still misaligned' },
      { value: '88 sec', label: 'handoff pack ready', detail: 'checkpoint preserved' },
      { value: '4', label: 'approval checkpoints', detail: 'before mutation continues' }
    ],
    telemetry: { radius: '4 changes · 2 owners', time: '88 sec', confidence: '0.78' },
    mapNodes: ['Voice recap', 'Audit evidence graph', 'Signed handoff'],
    pipeline: [
      { title: 'Observe', copy: 'Bind pending hold state, incomplete approvals, and UI checkpoints together.' },
      { title: 'Reason', copy: 'Distinguish safe context recovery from unsafe state mutation.' },
      { title: 'Approve', copy: 'Generate a signed handoff record and recover the exact console path for the next shift.' }
    ],
    incident: {
      severity: 'SEV-2',
      summary: 'This is a trust-and-governance incident: the biggest risk is not the current state itself, but losing the reasoning and approval chain during shift transition.',
      window: 'Window · 19:42 → 19:58',
      owner: 'Owner · Release lead + quality owner',
      mode: 'Mode · Governance-aware operations',
      cards: [
        { value: '4', label: 'changes awaiting review' },
        { value: '2', label: 'owners not aligned' },
        { value: '1', label: 'signed handoff pack needed' }
      ],
      rootCause: 'A partially completed hold workflow and incomplete shift documentation created a context-fracture risk just before ownership changed hands.',
      escalation: 'Escalate shift lead and quality owner together; no mutation should occur until the handoff artifact is accepted.'
    },
    evidenceCaption: 'Governance-aware evidence surfaces',
    evidenceNodes: [
      { label: 'Audit', title: 'Approval chain gap', detail: 'The change-hold click path was opened but not finalized before shift transition.' },
      { label: 'UI', title: 'Console checkpoint', detail: 'The system can restore the exact screen and state where the workflow paused.' },
      { label: 'History', title: 'Prior miss pattern', detail: 'A past shift handoff failure caused duplicate release notes and owner confusion.' },
      { label: 'Voice', title: 'Shift recap', detail: 'Outgoing lead requests a signed handoff artifact before any state mutation continues.' }
    ],
    timeline: [
      { stamp: '19:42', text: 'Hold workflow starts but pauses before final confirmation.' },
      { stamp: '19:49', text: 'Shift boundary approaches while two owners still disagree on final disposition.' },
      { stamp: '19:56', text: 'The system pivots to signed handoff generation and state recovery instead of unsafe execution.' }
    ],
    decisionPosture: 'Governance-aware reasoning',
    decisionSummary: 'The system treats ambiguity as a first-class operational risk and explicitly prefers a signed handoff over silent completion when ownership is changing.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Hold flow is incomplete and ownership is about to transition.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'The dominant risk is reasoning loss across shifts, not immediate process failure.' },
      { label: 'Safe path', state: 'strong', copy: 'Generate a signed handoff package and restore console state for the next owner.' },
      { label: 'Boundary', state: 'caution', copy: 'No governance mutation proceeds without explicit acceptance from the incoming owner.' }
    ],
    automationPosture: 'Review → document → resume',
    automationSummary: 'The system restores exact console state, packages the approval chain, and prevents silent continuation of a partially understood hold workflow.',
    automationSteps: [
      { state: 'ready', title: 'Capture paused console state', copy: 'Freeze the current hold path, pending approvals, and owner context into the session record.' },
      { state: 'review', title: 'Generate signed handoff pack', copy: 'Package rationale, evidence, and next-click path for the incoming shift lead.' },
      { state: 'review', title: 'Restore navigator checkpoint', copy: 'Open the exact console step where the next shift should resume after signoff.' },
      { state: 'blocked', title: 'Governance mutation boundary', copy: 'No release or hold mutation occurs until the new owner explicitly accepts context.' }
    ],
    automationNote: 'This scenario proves the product understands where trustworthy automation should stop and documentation should begin.',
    voiceAudience: 'Audience · Incoming shift lead + quality owner',
    voiceTone: 'Tone · controlled / governance-aware',
    voiceOutput: 'Output · 46-second spoken brief',
    voiceQuote: 'Four changes remain in a pending hold workflow, but the biggest risk is losing context across the shift boundary. I recommend accepting the signed handoff package, reopening the stored checkpoint, and only then deciding whether to complete or release the hold path.',
    handoff: [
      { label: 'Affected scope', value: '4 changes / 2 owners' },
      { label: 'Immediate ask', value: 'Accept signed handoff before mutation' },
      { label: 'Signed artifact', value: 'Checkpoint + rationale preserved' }
    ],
    debugPosture: 'Audit-safe · shift replay ready',
    debugSummary: 'Trace history, UI checkpoints, and owner actions are preserved so the next shift can resume without guessing what the system saw or why it stopped.',
    debugMetrics: [
      { value: 'trace:fplx-shift-1942', label: 'Trace ID' },
      { value: '4', label: 'Approval checkpoints' },
      { value: '1', label: 'Signed handoff pack generated' }
    ],
    debugEvents: [
      { stamp: '19:42:08', title: 'navigator.pause', detail: 'Hold flow pauses before final confirmation due to shift transition.' },
      { stamp: '19:49:13', title: 'owner.mismatch', detail: 'Incoming and outgoing owners diverge on final disposition posture.' },
      { stamp: '19:56:27', title: 'handoff.generate', detail: 'Signed handoff pack bundles rationale, evidence, and next UI checkpoint.' },
      { stamp: '19:56:39', title: 'guard.block', detail: 'Governance mutation is blocked until the incoming owner accepts context.' }
    ]
  }
];

const refs = {
  body: document.body,
  rail: document.getElementById('scenario-rail'),
  heroBadge: document.getElementById('hero-badge'),
  heroSummary: document.getElementById('hero-summary'),
  heroTitle: document.getElementById('hero-title'),
  heroCopy: document.getElementById('hero-copy'),
  heroStatus: document.getElementById('hero-status'),
  heroMetrics: document.getElementById('hero-metrics'),
  telemetryRadius: document.getElementById('telemetry-radius'),
  telemetryTime: document.getElementById('telemetry-time'),
  telemetryConfidence: document.getElementById('telemetry-confidence'),
  mapNodeAlpha: document.getElementById('map-node-alpha'),
  mapNodeBeta: document.getElementById('map-node-beta'),
  mapNodeGamma: document.getElementById('map-node-gamma'),
  pipelineStrip: document.getElementById('pipeline-strip'),
  incidentSeverity: document.getElementById('incident-severity'),
  incidentTitle: document.getElementById('incident-title'),
  incidentSummary: document.getElementById('incident-summary'),
  incidentWindow: document.getElementById('incident-window'),
  incidentOwner: document.getElementById('incident-owner'),
  incidentMode: document.getElementById('incident-mode'),
  briefCards: document.getElementById('brief-cards'),
  incidentRootCause: document.getElementById('incident-root-cause'),
  incidentEscalation: document.getElementById('incident-escalation'),
  evidenceCaption: document.getElementById('evidence-caption'),
  evidenceMap: document.getElementById('evidence-map'),
  timelineList: document.getElementById('timeline-list'),
  decisionPosture: document.getElementById('decision-posture'),
  decisionSummary: document.getElementById('decision-summary'),
  decisionList: document.getElementById('decision-list'),
  automationPosture: document.getElementById('automation-posture'),
  automationSummary: document.getElementById('automation-summary'),
  runwaySteps: document.getElementById('runway-steps'),
  automationNote: document.getElementById('automation-note'),
  voiceAudience: document.getElementById('voice-audience'),
  voiceTone: document.getElementById('voice-tone'),
  voiceOutput: document.getElementById('voice-output'),
  voiceQuote: document.getElementById('voice-quote'),
  handoffStrip: document.getElementById('handoff-strip'),
  debugPosture: document.getElementById('debug-posture'),
  debugSummary: document.getElementById('debug-summary'),
  debugMetrics: document.getElementById('debug-metrics'),
  debugEvents: document.getElementById('debug-events'),
  artifactPreview: document.getElementById('artifact-preview'),
  copyBrief: document.getElementById('copy-brief'),
  downloadPack: document.getElementById('download-pack'),
  copyShareLink: document.getElementById('copy-share-link')
};

const STORAGE_KEY = 'fabpilot_active_mission';

const escapeHtml = (value) => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function buildMissionArtifact(mission) {
  return {
    mission_id: mission.id,
    title: mission.heroTitle,
    severity: mission.incident.severity,
    summary: mission.incident.summary,
    window: mission.incident.window,
    owner: mission.incident.owner,
    root_cause: mission.incident.rootCause,
    escalation: mission.incident.escalation,
    decision_trace: mission.decisionTrace,
    automation_steps: mission.automationSteps,
    handoff: mission.handoff,
    debug: {
      posture: mission.debugPosture,
      metrics: mission.debugMetrics,
      events: mission.debugEvents
    }
  };
}

function buildMissionBriefText(mission) {
  return [
    `Mission: ${mission.heroTitle}`,
    `Severity: ${mission.incident.severity}`,
    `Window: ${mission.incident.window}`,
    `Owner: ${mission.incident.owner}`,
    '',
    `Summary: ${mission.incident.summary}`,
    `Root cause hypothesis: ${mission.incident.rootCause}`,
    `Escalation posture: ${mission.incident.escalation}`,
    '',
    'Decision trace:',
    ...mission.decisionTrace.map(item => `- ${item.label}: ${item.copy}`),
    '',
    'Next safe actions:',
    ...mission.automationSteps.map(item => `- [${item.state}] ${item.title}: ${item.copy}`),
    '',
    'Handoff:',
    ...mission.handoff.map(item => `- ${item.label}: ${item.value}`)
  ].join('\n');
}

function renderRail(activeId) {
  refs.rail.innerHTML = MISSIONS.map((mission, index) => `
    <button class="scenario-card" role="tab" aria-selected="${mission.id === activeId}" tabindex="${mission.id === activeId ? '0' : '-1'}" data-mission-id="${mission.id}">
      <span class="scenario-card__meta">Mission ${index + 1} · ${escapeHtml(mission.railMeta)}</span>
      <strong class="scenario-card__title">${escapeHtml(mission.railTitle)}</strong>
      <span class="scenario-card__summary">${escapeHtml(mission.railSummary)}</span>
    </button>
  `).join('');

  const buttons = [...refs.rail.querySelectorAll('.scenario-card')];
  buttons.forEach((button, index) => {
    const activate = () => setMission(button.dataset.missionId);
    button.addEventListener('click', activate);
    button.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
        return;
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        buttons[(index + 1) % buttons.length].focus();
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        buttons[(index - 1 + buttons.length) % buttons.length].focus();
      }
    });
  });
}

function renderMetricBand(items) { refs.heroMetrics.innerHTML = items.map(item => `<article class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span><p>${escapeHtml(item.detail)}</p></article>`).join(''); }
function renderPipeline(items) { refs.pipelineStrip.innerHTML = items.map(item => `<div class="card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.copy)}</p></div>`).join(''); }
function renderBriefCards(items) { refs.briefCards.innerHTML = items.map(item => `<div class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></div>`).join(''); }
function renderEvidence(nodes, timeline) {
  refs.evidenceMap.innerHTML = nodes.map(node => `<article class="card"><span class="doc-label">${escapeHtml(node.label)}</span><strong>${escapeHtml(node.title)}</strong><p>${escapeHtml(node.detail)}</p></article>`).join('');
  refs.timelineList.innerHTML = timeline.map(item => `<li><span class="timeline-stamp">${escapeHtml(item.stamp)}</span><p>${escapeHtml(item.text)}</p></li>`).join('');
}
function renderDecision(items) { refs.decisionList.innerHTML = items.map(item => `<article class="card"><span class="doc-label">${escapeHtml(item.label)}</span><p>${escapeHtml(item.copy)}</p></article>`).join(''); }
function renderAutomation(items) { refs.runwaySteps.innerHTML = items.map(item => `<li><span class="badge">${escapeHtml(item.state)}</span><strong>${escapeHtml(item.title)}</strong><span class="runway-step-copy">${escapeHtml(item.copy)}</span></li>`).join(''); }
function renderHandoff(items) { refs.handoffStrip.innerHTML = items.map(item => `<article class="card"><span class="doc-label">${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></article>`).join(''); }
function renderDebugMetrics(items) { refs.debugMetrics.innerHTML = items.map(item => `<article class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`).join(''); }
function renderDebugEvents(items) { refs.debugEvents.innerHTML = items.map(item => `<li><span class="timeline-stamp">${escapeHtml(item.stamp)}</span><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></li>`).join(''); }

function syncMissionUrl(id) {
  const url = new URL(window.location.href);
  url.searchParams.set('mission', id);
  window.history.replaceState({}, '', url.toString());
}

function getInitialMissionId() {
  const params = new URLSearchParams(window.location.search);
  const requested = params.get('mission');
  if (requested && MISSIONS.some(item => item.id === requested)) return requested;
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && MISSIONS.some(item => item.id === saved)) return saved;
  } catch (error) {
    console.warn('Mission restore skipped:', error);
  }
  return MISSIONS[0].id;
}

function setMission(id) {
  const mission = MISSIONS.find(item => item.id === id) || MISSIONS[0];
  refs.body.dataset.tone = mission.tone;
  syncMissionUrl(mission.id);
  try { window.localStorage.setItem(STORAGE_KEY, mission.id); } catch (error) { console.warn('Mission persistence skipped:', error); }

  refs.heroBadge.textContent = mission.heroBadge;
  refs.heroSummary.textContent = 'FabTwin Guardian turns multimodal operational context into a reviewable command surface: evidence graph, decision trace, approval-gated action, signed handoff, and replayable debug evidence.';
  refs.heroTitle.textContent = mission.heroTitle;
  refs.heroCopy.textContent = mission.heroCopy;
  refs.heroStatus.textContent = mission.heroStatus;
  refs.telemetryRadius.textContent = mission.telemetry.radius;
  refs.telemetryTime.textContent = mission.telemetry.time;
  refs.telemetryConfidence.textContent = mission.telemetry.confidence;
  renderMetricBand(mission.metrics);
  [refs.mapNodeAlpha, refs.mapNodeBeta, refs.mapNodeGamma].forEach((node, index) => { if (node) node.textContent = mission.mapNodes[index] || ''; });
  renderPipeline(mission.pipeline);
  renderRail(mission.id);

  refs.incidentSeverity.textContent = mission.incident.severity;
  refs.incidentTitle.textContent = mission.heroTitle;
  refs.incidentSummary.textContent = mission.incident.summary;
  refs.incidentWindow.textContent = mission.incident.window;
  refs.incidentOwner.textContent = mission.incident.owner;
  refs.incidentMode.textContent = mission.incident.mode;
  refs.incidentRootCause.textContent = mission.incident.rootCause;
  refs.incidentEscalation.textContent = mission.incident.escalation;
  renderBriefCards(mission.incident.cards);

  refs.evidenceCaption.textContent = mission.evidenceCaption;
  renderEvidence(mission.evidenceNodes, mission.timeline);

  refs.decisionPosture.textContent = mission.decisionPosture;
  refs.decisionSummary.textContent = mission.decisionSummary;
  renderDecision(mission.decisionTrace);

  refs.automationPosture.textContent = mission.automationPosture;
  refs.automationSummary.textContent = mission.automationSummary;
  refs.automationNote.textContent = mission.automationNote;
  renderAutomation(mission.automationSteps);

  refs.voiceAudience.textContent = mission.voiceAudience;
  refs.voiceTone.textContent = mission.voiceTone;
  refs.voiceOutput.textContent = mission.voiceOutput;
  refs.voiceQuote.textContent = mission.voiceQuote;
  renderHandoff(mission.handoff);

  refs.debugPosture.textContent = mission.debugPosture;
  refs.debugSummary.textContent = mission.debugSummary;
  renderDebugMetrics(mission.debugMetrics);
  renderDebugEvents(mission.debugEvents);

  refs.artifactPreview.textContent = JSON.stringify(buildMissionArtifact(mission), null, 2);
  refs.copyBrief.onclick = async () => {
    await navigator.clipboard.writeText(buildMissionBriefText(mission));
    refs.copyBrief.textContent = 'Brief copied';
    setTimeout(() => { refs.copyBrief.textContent = 'Copy operator brief'; }, 1400);
  };
  refs.downloadPack.onclick = () => {
    const blob = new Blob([JSON.stringify(buildMissionArtifact(mission), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `fabpilot-${mission.id}-mission-pack.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };
  refs.copyShareLink.onclick = async () => {
    await navigator.clipboard.writeText(window.location.href);
    refs.copyShareLink.textContent = 'Share link copied';
    setTimeout(() => { refs.copyShareLink.textContent = 'Copy share link'; }, 1400);
  };
}

document.addEventListener('DOMContentLoaded', () => setMission(getInitialMissionId()));
