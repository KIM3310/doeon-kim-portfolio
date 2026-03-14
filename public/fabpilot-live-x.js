const MISSIONS = [
  {
    id: 'release',
    railTitle: 'Etch thermal + yield drift',
    railMeta: 'SEV-1 · Lot hold boundary',
    railSummary: 'One unstable etch chamber threatens downstream yield on a priority lot lane.',
    heroBadge: 'SEV-1 live mission',
    heroTitle: 'Etch line thermal + yield drift',
    heroCopy: 'Tool ET-204 chamber B shows thermal instability while lot queue divergence hints at imminent yield loss on one production lane.',
    heroStatus: 'Approval gate active',
    metrics: [
      { value: '6', label: 'lots at risk', detail: 'one lane under watch' },
      { value: '94 sec', label: 'voice to brief', detail: 'operator-ready summary' },
      { value: '3', label: 'decision layers', detail: 'observe · reason · approve' }
    ],
    pipeline: [
      { title: 'Observe', copy: 'Fuse operator speech, tool alarms, SPC drift, chamber telemetry, and shared dashboard state.' },
      { title: 'Reason', copy: 'Rank chamber thermal instability against recipe drift and recent maintenance effects.' },
      { title: 'Approve', copy: 'Stage lot hold, SOP drill-down, and console navigation behind explicit approval.' }
    ],
    incident: {
      severity: 'SEV-1',
      title: 'Etch line thermal + yield drift',
      summary: 'Cross-modal evidence suggests chamber instability cascading into yield risk before scrap or lot-hold decisions become obvious.',
      window: 'Window · 09:14 → 09:31',
      owner: 'Owner · Etch process engineer',
      mode: 'Mode · Multimodal risk triage',
      cards: [
        { value: '+4.8σ', label: 'SPC burst' },
        { value: '6', label: 'lots exposed' },
        { value: '0', label: 'unsafe auto-actions' }
      ],
      rootCause: 'Chamber B thermal instability after the last maintenance window is the strongest explanation.',
      escalation: 'Escalate the etch process engineer, equipment owner, and shift lead together.'
    },
    evidenceCaption: 'Correlated tool + process evidence',
    evidenceNodes: [
      { label: 'SPC', title: 'Critical sigma drift', detail: 'A key etch process variable breaks its learned envelope inside the review window.' },
      { label: 'Tool', title: 'Alarm cadence', detail: 'Chamber thermal alerts spike before yield posture fully degrades.' },
      { label: 'History', title: 'Prior incident match', detail: 'Historical similarity surfaces a maintenance-linked chamber instability event with matching symptoms.' },
      { label: 'Voice', title: 'Operator report', detail: 'The shift operator confirms abnormal stabilization time after the last chamber clean.' }
    ],
    timeline: [
      { stamp: '09:14', text: 'The SPC chart crosses a warning threshold while the lot queue still looks superficially healthy.' },
      { stamp: '09:21', text: 'Repeated chamber alarms and lot divergence widen the blast radius for downstream yield.' },
      { stamp: '09:27', text: 'The system recommends a bounded lot hold before the tool state drifts further.' }
    ],
    decisionPosture: 'Grounded reasoning',
    decisionSummary: 'The reasoning is inspectable: observed evidence, strongest hypothesis, alternative explanation, and boundary conditions remain visible.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Tool alarms, SPC drift, lot divergence, and the operator note correlate around ET-204 chamber B.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'Chamber thermal instability is the best fit because alarm cadence and prior incident similarity align tightly.' },
      { label: 'Hypothesis #2', state: 'moderate', copy: 'Recipe drift remains possible, but it does not explain the thermal signature on its own.' },
      { label: 'Boundary', state: 'caution', copy: 'Real-world intervention and lot disposition still require explicit owner approval beyond the command surface.' }
    ],
    automationPosture: 'Observe → reason → approve',
    automationSummary: 'The system stages the next safe steps without hiding uncertainty: open the tool detail page, prepare a lot hold, and attach the exact validation context.',
    automationSteps: [
      { state: 'ready', title: 'Open ET-204 tool detail', copy: 'Deep-link into the tool dashboard with the exact alarm window, chamber view, and SPC overlay preselected.' },
      { state: 'review', title: 'Stage lot hold proposal', copy: 'Prepare containment for six lots with blast-radius notes, chamber context, and release criteria.' },
      { state: 'review', title: 'Launch SOP validation step', copy: 'Open the etch stability SOP at the recommended validation step for shift review.' },
      { state: 'blocked', title: 'Physical maintenance boundary', copy: 'Any real-world chamber intervention remains explicitly outside autonomous action.' }
    ],
    voiceQuote: 'ET-204 chamber B is the dominant source of risk. The evidence supports thermal instability over simple recipe drift, with six lots requiring immediate containment review.',
    handoff: [
      { label: 'Affected scope', value: '6 lots / lane B' },
      { label: 'Immediate ask', value: 'Approve lot hold + SOP drill-down' },
      { label: 'Signed artifact', value: 'Shift handoff pack ready' }
    ],
    debugPosture: 'Replay-ready',
    debugSummary: 'Every live event is session-bound and reusable: transcript, evidence retrieval, proposed actions, approvals, and blocked boundaries all survive the live moment.',
    debugMetrics: [
      { value: 'trace:fplx-etch-0914', label: 'Trace ID' },
      { value: '182ms', label: 'Grounding latency' },
      { value: '0', label: 'Unsafe actions attempted' }
    ],
    debugEvents: [
      { stamp: '09:14:07', text: 'voice.transcript — operator asks which etch tool and lot cluster carry the highest yield risk.' },
      { stamp: '09:14:18', text: 'evidence.retrieve — dashboard state, SPC context, tool alarms, and SOP fragment are linked to the mission.' },
      { stamp: '09:14:24', text: 'action.plan — lot hold and validation path are staged, awaiting approval.' },
      { stamp: '09:14:29', text: 'guard.block — physical chamber intervention remains out of bounds for autonomous execution.' }
    ],
    artifact: 'Mission: Etch thermal + yield drift\nObserved: SPC burst + chamber alarm cadence + operator note\nDecision: bounded lot hold recommended\nBoundary: physical maintenance blocked without owner approval\nHandoff: signed shift artifact ready'
  },
  {
    id: 'overlay',
    railTitle: 'Lithography overlay anomaly',
    railMeta: 'SEV-2 · Recipe drift',
    railSummary: 'Overlay variance emerges after a recipe package change while throughput still looks deceptively healthy.',
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
      { title: 'Observe', copy: 'Connect alignment drift, recipe history, and quality dashboard state.' },
      { title: 'Reason', copy: 'Separate true process drift from metrology noise.' },
      { title: 'Approve', copy: 'Prepare bounded recipe rollback and review with owner signoff.' }
    ],
    incident: {
      severity: 'SEV-2',
      title: 'Lithography overlay drift after recipe update',
      summary: 'The evidence points to a recipe-linked overlay drift event rather than a broad hardware failure.',
      window: 'Window · 13:08 → 13:24',
      owner: 'Owner · Litho quality engineer',
      mode: 'Mode · Recipe-aware process reasoning',
      cards: [
        { value: '+18%', label: 'overlay variance' },
        { value: '2', label: 'changes pending review' },
        { value: '15 min', label: 'observation hold' }
      ],
      rootCause: 'Recipe package R-31 likely changed alignment sensitivity under one mask family.',
      escalation: 'Escalate the lithography engineer and recipe owner together.'
    },
    evidenceCaption: 'Recipe-aligned quality evidence',
    evidenceNodes: [
      { label: 'Recipe', title: 'Recipe package delta', detail: 'Drift begins shortly after the package reaches the affected lot family.' },
      { label: 'Quality', title: 'Overlay envelope break', detail: 'Variance spikes above the model envelope while throughput still looks healthy.' },
      { label: 'History', title: 'Rollback precedent', detail: 'Past runbook guidance recommends a bounded revert rather than broad fab-wide rollback.' },
      { label: 'Voice', title: 'Engineer note', detail: 'On-call engineer confirms neighboring services remain stable.' }
    ],
    timeline: [
      { stamp: '13:08', text: 'Recipe package R-31 reaches the target lot family.' },
      { stamp: '13:16', text: 'Overlay variance breaches learned tolerance while throughput remains stable.' },
      { stamp: '13:21', text: 'The system recommends bounded rollback instead of broad fab-wide rollback.' }
    ],
    decisionPosture: 'Confidence-qualified reasoning',
    decisionSummary: 'The system shows not only the favored hypothesis but also what was ruled out, so rollback proposals feel engineered rather than improvised.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Overlay drift and recipe timing align tightly while neighboring tool health remains stable.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'Recipe-linked alignment sensitivity is the best fit.' },
      { label: 'Hypothesis #2', state: 'moderate', copy: 'Metrology noise is less likely because the variance persists across repeated checks.' },
      { label: 'Boundary', state: 'caution', copy: 'Recipe release cannot be automated until rollback and validation are explicitly approved.' }
    ],
    automationPosture: 'Review → prepare → approve',
    automationSummary: 'The product packages the rollback path, exposed recipe deltas, and observation window into one owner-reviewable action bundle.',
    automationSteps: [
      { state: 'ready', title: 'Open recipe release console', copy: 'Pin package history and the affected lot family on one screen.' },
      { state: 'review', title: 'Stage bounded rollback', copy: 'Prepare a recipe revert while preserving trace context.' },
      { state: 'review', title: 'Hold recipe disposition', copy: 'Draft a temporary review decision for the two exposed recipe deltas.' },
      { state: 'blocked', title: 'Final release decision', copy: 'Recipe release waits for owner approval.' }
    ],
    voiceQuote: 'This is a recipe-linked SEV-2 quality event. The strongest path is a bounded rollback of package R-31 for the affected lot family.',
    handoff: [
      { label: 'Affected scope', value: '2 recipe deltas / one lot family' },
      { label: 'Immediate ask', value: 'Approve bounded rollback' },
      { label: 'Signed artifact', value: 'Validation hold plan ready' }
    ],
    debugPosture: 'Rollback-ready',
    debugSummary: 'The rollback path, exposed changes, and owner checkpoints are preserved in one trace so the recommendation can be audited after the fact.',
    debugMetrics: [
      { value: 'trace:fplx-overlay-1308', label: 'Trace ID' },
      { value: '224ms', label: 'Evidence fusion latency' },
      { value: '1', label: 'Rollback path prepared' }
    ],
    debugEvents: [
      { stamp: '13:08:11', text: 'release.observe — package R-31 reaches the target lot family.' },
      { stamp: '13:16:04', text: 'quality.alert — overlay variance crosses threshold while neighboring tools remain healthy.' },
      { stamp: '13:16:22', text: 'action.plan — bounded rollback and recipe review checklist prepared.' },
      { stamp: '13:16:31', text: 'approval.wait — execution pauses pending owner signoff.' }
    ],
    artifact: 'Mission: Lithography overlay drift\nObserved: recipe timing + overlay variance\nDecision: bounded rollback\nBoundary: owner signoff required\nHandoff: validation hold plan ready'
  },
  {
    id: 'handoff',
    railTitle: 'Shift handoff + hold drift',
    railMeta: 'SEV-2 · Handoff governance',
    railSummary: 'A lot hold is partially staged, but a shift transition risks losing the exact reasoning and approval history.',
    heroBadge: 'SEV-2 governance mission',
    heroTitle: 'Shift handoff drift around a pending lot hold',
    heroCopy: 'The operational risk is not a broken tool but a broken memory boundary: the next shift may inherit incomplete reasoning and stale UI state.',
    heroStatus: 'Signed handoff required',
    metrics: [
      { value: '4', label: 'lots awaiting review', detail: '2 owners still misaligned' },
      { value: '88 sec', label: 'handoff pack ready', detail: 'checkpoint preserved' },
      { value: '4', label: 'approval checkpoints', detail: 'before mutation continues' }
    ],
    pipeline: [
      { title: 'Observe', copy: 'Bind pending lot-hold state, incomplete approvals, and UI checkpoints together.' },
      { title: 'Reason', copy: 'Distinguish safe context recovery from unsafe state mutation.' },
      { title: 'Approve', copy: 'Generate a signed handoff record and recover the exact console path for the next shift.' }
    ],
    incident: {
      severity: 'SEV-2',
      title: 'Shift handoff drift around a pending lot hold',
      summary: 'The biggest risk is losing the reasoning and approval chain during shift transition.',
      window: 'Window · 19:42 → 19:58',
      owner: 'Owner · Shift lead + quality owner',
      mode: 'Mode · Governance-aware operations',
      cards: [
        { value: '4', label: 'lots awaiting review' },
        { value: '2', label: 'owners not aligned' },
        { value: '1', label: 'signed handoff needed' }
      ],
      rootCause: 'A partially completed lot-hold workflow and incomplete shift documentation created a context-fracture risk.',
      escalation: 'Escalate shift lead and quality owner together.'
    },
    evidenceCaption: 'Governance-aware evidence',
    evidenceNodes: [
      { label: 'Audit', title: 'Approval chain gap', detail: 'The lot-hold click path was opened but not finalized before the shift transition.' },
      { label: 'UI', title: 'Checkpoint recovery', detail: 'The system can reopen the exact screen where the workflow paused.' },
      { label: 'History', title: 'Prior miss pattern', detail: 'A past shift handoff failure caused duplicate lot-hold notes and owner confusion.' },
      { label: 'Voice', title: 'Shift recap', detail: 'Outgoing lead requests signed handoff before any state mutation continues.' }
    ],
    timeline: [
      { stamp: '19:42', text: 'Lot-hold workflow starts but pauses before final confirmation.' },
      { stamp: '19:49', text: 'Shift boundary approaches while two owners still disagree.' },
      { stamp: '19:56', text: 'The system pivots to signed handoff generation and state recovery.' }
    ],
    decisionPosture: 'Governance-aware reasoning',
    decisionSummary: 'The system treats ambiguity as a first-class operational risk and explicitly prefers signed handoff over silent completion.',
    decisionTrace: [
      { label: 'Observed', state: 'solid', copy: 'Lot-hold flow is incomplete and ownership is about to transition.' },
      { label: 'Hypothesis #1', state: 'strong', copy: 'The dominant risk is reasoning loss across shifts.' },
      { label: 'Safe path', state: 'strong', copy: 'Generate a signed handoff package and restore console state for the next owner.' },
      { label: 'Boundary', state: 'caution', copy: 'No governance mutation proceeds without explicit acceptance.' }
    ],
    automationPosture: 'Review → document → resume',
    automationSummary: 'The system restores exact console state, packages the approval chain, and prevents silent continuation.',
    automationSteps: [
      { state: 'ready', title: 'Capture paused console state', copy: 'Freeze the current lot-hold path, pending approvals, and owner context into the session record.' },
      { state: 'review', title: 'Generate signed handoff pack', copy: 'Package rationale, evidence, and next-click path for the incoming shift lead.' },
      { state: 'review', title: 'Restore navigator checkpoint', copy: 'Open the exact console step where the next shift should resume.' },
      { state: 'blocked', title: 'Governance mutation boundary', copy: 'No lot disposition or hold mutation occurs until the new owner accepts context.' }
    ],
    voiceQuote: 'The biggest risk is losing context across the shift boundary. Accept the signed handoff package, reopen the stored checkpoint, and only then continue.',
    handoff: [
      { label: 'Affected scope', value: '4 lots / 2 owners' },
      { label: 'Immediate ask', value: 'Accept signed handoff before mutation' },
      { label: 'Signed artifact', value: 'Checkpoint + rationale preserved' }
    ],
    debugPosture: 'Audit-safe',
    debugSummary: 'Trace history, UI checkpoints, and owner actions are preserved so the next shift can resume without guessing what the system saw or why it stopped.',
    debugMetrics: [
      { value: 'trace:fplx-handoff-1942', label: 'Trace ID' },
      { value: '4', label: 'Approval checkpoints' },
      { value: '1', label: 'Signed handoff generated' }
    ],
    debugEvents: [
      { stamp: '19:42:08', text: 'navigator.pause — lot-hold flow pauses before final confirmation due to shift transition.' },
      { stamp: '19:49:13', text: 'owner.mismatch — incoming and outgoing owners diverge on final disposition.' },
      { stamp: '19:56:27', text: 'handoff.generate — signed handoff pack bundles rationale, evidence, and next checkpoint.' },
      { stamp: '19:56:39', text: 'guard.block — governance mutation remains blocked until context is accepted.' }
    ],
    artifact: 'Mission: Shift handoff drift\nObserved: incomplete lot-hold workflow + ownership mismatch\nDecision: signed handoff and checkpoint recovery\nBoundary: no mutation before owner acceptance\nHandoff: checkpoint + rationale preserved'
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
  incidentSeverity: document.getElementById('incident-severity'),
  incidentTitle: document.getElementById('incident-title'),
  incidentSummary: document.getElementById('incident-summary'),
  incidentWindow: document.getElementById('incident-window'),
  incidentOwner: document.getElementById('incident-owner'),
  incidentMode: document.getElementById('incident-mode'),
  briefCards: document.getElementById('brief-cards'),
  evidenceCaption: document.getElementById('evidence-caption'),
  evidenceMap: document.getElementById('evidence-map'),
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
  debugPosture: document.getElementById('debug-posture'),
  debugSummary: document.getElementById('debug-summary'),
  debugMetrics: document.getElementById('debug-metrics'),
  debugEvents: document.getElementById('debug-events'),
  artifactPreview: document.getElementById('artifact-preview'),
  copyBrief: document.getElementById('copy-brief'),
  downloadPack: document.getElementById('download-pack'),
  copyShareLink: document.getElementById('copy-share-link')
};

let activeMissionId = MISSIONS[0]?.id || 'release';

const escapeHtml = (value) => String(value ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

function renderMissionCards(items, el, renderer) {
  if (!el) return;
  el.innerHTML = items.map(renderer).join('');
}

function buildOperatorBrief(mission) {
  return [
    `Mission: ${mission.incident.title}`,
    `Severity: ${mission.incident.severity}`,
    `Window: ${mission.incident.window}`,
    `Owner: ${mission.incident.owner}`,
    '',
    `Summary: ${mission.incident.summary}`,
    `Root cause hypothesis: ${mission.incident.rootCause}`,
    `Escalation posture: ${mission.incident.escalation}`,
    '',
    'Next safe actions:',
    ...mission.automationSteps.map((item) => `- [${item.state}] ${item.title}: ${item.copy}`),
  ].join('\n');
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
  activeMissionId = mission.id;
  syncMissionUrl(mission.id);

  if (refs.heroBadge) refs.heroBadge.textContent = mission.heroBadge;
  if (refs.heroTitle) refs.heroTitle.textContent = mission.heroTitle;
  if (refs.heroCopy) refs.heroCopy.textContent = mission.heroCopy;
  if (refs.heroStatus) refs.heroStatus.textContent = mission.heroStatus;
  if (refs.heroSummary) refs.heroSummary.textContent = `FabPilot Live X turns multimodal operational context into a reviewable command surface: evidence graph, decision trace, approval-gated action, signed handoff, and replayable debug evidence.`;

  renderMissionCards(mission.metrics, refs.heroMetrics, (item) => `<article class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span><p>${escapeHtml(item.detail)}</p></article>`);
  renderMissionCards(mission.pipeline, refs.pipelineStrip, (item) => `<article class="card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.copy)}</p></article>`);

  if (refs.incidentSeverity) refs.incidentSeverity.textContent = mission.incident.severity;
  if (refs.incidentTitle) refs.incidentTitle.textContent = mission.incident.title;
  if (refs.incidentSummary) refs.incidentSummary.textContent = mission.incident.summary;
  if (refs.incidentWindow) refs.incidentWindow.textContent = mission.incident.window;
  if (refs.incidentOwner) refs.incidentOwner.textContent = mission.incident.owner;
  if (refs.incidentMode) refs.incidentMode.textContent = mission.incident.mode;
  renderMissionCards(mission.incident.cards, refs.briefCards, (item) => `<article class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`);
  renderMissionCards(mission.timeline, refs.timelineList, (item) => `<li><p><strong>${escapeHtml(item.stamp)}</strong> — ${escapeHtml(item.text)}</p></li>`);
  if (refs.evidenceCaption) refs.evidenceCaption.textContent = mission.evidenceCaption;
  renderMissionCards(mission.evidenceNodes, refs.evidenceMap, (item) => `<article class="card"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.detail)}</p></article>`);

  if (refs.decisionPosture) refs.decisionPosture.textContent = mission.decisionPosture;
  if (refs.decisionSummary) refs.decisionSummary.textContent = mission.decisionSummary;
  renderMissionCards(mission.decisionTrace, refs.decisionList, (item) => `<article class="card"><strong>${escapeHtml(item.label)}</strong><p>${escapeHtml(item.copy)}</p></article>`);

  if (refs.automationPosture) refs.automationPosture.textContent = mission.automationPosture;
  if (refs.automationSummary) refs.automationSummary.textContent = mission.automationSummary;
  renderMissionCards(mission.automationSteps, refs.runwaySteps, (item) => `<li><p><strong>${escapeHtml(item.title)}</strong> — ${escapeHtml(item.copy)}</p></li>`);

  if (refs.voiceQuote) refs.voiceQuote.textContent = mission.voiceQuote;
  if (refs.voiceAudience) refs.voiceAudience.textContent = mission.incident.owner;
  renderMissionCards(mission.handoff, refs.handoffStrip, (item) => `<article class="card"><span>${escapeHtml(item.label)}</span><strong>${escapeHtml(item.value)}</strong></article>`);
  if (refs.debugPosture) refs.debugPosture.textContent = mission.debugPosture;
  if (refs.debugSummary) refs.debugSummary.textContent = mission.debugSummary;
  renderMissionCards(mission.debugMetrics, refs.debugMetrics, (item) => `<article class="card"><strong>${escapeHtml(item.value)}</strong><span>${escapeHtml(item.label)}</span></article>`);
  renderMissionCards(mission.debugEvents, refs.debugEvents, (item) => `<li><p><strong>${escapeHtml(item.stamp)}</strong> — ${escapeHtml(item.text)}</p></li>`);
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
  a.download = `fabpilot-${activeMissionId}-mission-pack.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function copyText(value) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value).catch(() => fallbackCopyText(value));
    return;
  }
  fallbackCopyText(value);
}

function fallbackCopyText(value) {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', 'true');
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } catch {}
  document.body.removeChild(textarea);
}

document.addEventListener('DOMContentLoaded', () => {
  if (refs.rail) {
    refs.rail.innerHTML = MISSIONS.map((mission, index) => `
      <button class="scenario-card" type="button" role="tab" data-mission-id="${mission.id}" aria-selected="false" aria-controls="incident-title">
        <span class="scenario-card__meta">Mission ${index + 1} · ${escapeHtml(mission.railMeta)}</span>
        <strong class="scenario-card__title">${escapeHtml(mission.railTitle)}</strong>
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

  refs.copyBrief?.addEventListener('click', () => {
    copyText(buildOperatorBrief(MISSIONS.find((mission) => mission.id === activeMissionId) || MISSIONS[0]));
    refs.copyBrief.textContent = 'Brief copied';
    window.setTimeout(() => { if (refs.copyBrief) refs.copyBrief.textContent = 'Copy operator brief'; }, 1400);
  });
  refs.downloadPack?.addEventListener('click', downloadArtifact);
  refs.copyShareLink?.addEventListener('click', () => {
    copyText(window.location.href);
    refs.copyShareLink.textContent = 'Share link copied';
    window.setTimeout(() => { if (refs.copyShareLink) refs.copyShareLink.textContent = 'Copy share link'; }, 1400);
  });
});
