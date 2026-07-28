(() => {
  "use strict";

  const script = document.currentScript;
  const configUrl = script?.dataset?.config || "./ad-data-config.json";
  let config = null;
  let consent = false;
  let resourceViewSent = false;

  function privacySignalBlocksCollection() {
    return navigator.globalPrivacyControl === true ||
      navigator.doNotTrack === "1" ||
      window.doNotTrack === "1";
  }

  function readStoredConsent() {
    if (!config || privacySignalBlocksCollection()) return false;
    try {
      return window.localStorage.getItem(config.consentStorageKey) === "granted";
    } catch {
      return false;
    }
  }

  function writeStoredConsent(value) {
    try {
      window.localStorage.setItem(config.consentStorageKey, value ? "granted" : "denied");
      return true;
    } catch {
      return false;
    }
  }

  function updateConsentPanel() {
    const panel = document.querySelector("[data-consent-panel]");
    if (!panel) return;
    const status = panel.querySelector("[data-consent-status]");
    const allow = panel.querySelector("[data-consent-allow]");
    const deny = panel.querySelector("[data-consent-deny]");
    if (status) {
      status.textContent = privacySignalBlocksCollection()
        ? "Privacy signal detected. Aggregate measurement is off."
        : consent
          ? "Anonymous aggregate measurement is on."
          : "Anonymous aggregate measurement is off.";
    }
    allow?.setAttribute("aria-pressed", String(consent));
    deny?.setAttribute("aria-pressed", String(!consent));
    if (privacySignalBlocksCollection()) {
      allow?.setAttribute("disabled", "");
    }
  }

  function eventPayload(event) {
    if (!config || !config.allowedEvents.includes(event)) return null;
    return {
      repo: config.repo,
      event,
      surface: "central_resource",
      consentVersion: config.consentVersion,
    };
  }

  async function track(event) {
    if (!config || !consent || privacySignalBlocksCollection()) return false;
    const payload = eventPayload(event);
    if (!payload) return false;
    try {
      const response = await fetch(config.endpoint, {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        keepalive: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      return response.ok;
    } catch {
      return false;
    }
  }

  function trackResourceViewOnce() {
    if (resourceViewSent) return;
    resourceViewSent = true;
    void track("resource_view");
  }

  function setConsent(value) {
    consent = value === true && !privacySignalBlocksCollection();
    if (!writeStoredConsent(consent)) consent = false;
    updateConsentPanel();
    if (consent) trackResourceViewOnce();
    return consent;
  }

  async function loadBenchmark() {
    const root = document.querySelector("[data-benchmark]");
    if (!root || !config) return;
    try {
      const url = new URL(config.benchmarkEndpoint);
      url.searchParams.set("repo", config.repo);
      const response = await fetch(url, {
        credentials: "omit",
        cache: "no-store",
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("benchmark unavailable");
      const data = await response.json();
      root.querySelector("[data-benchmark-total]").textContent =
        Number(data.totals?.allTime || 0).toLocaleString();
      root.querySelector("[data-benchmark-today]").textContent =
        Number(data.totals?.today || 0).toLocaleString();
      root.dataset.state = "ready";
    } catch {
      root.dataset.state = "unavailable";
    }
  }

  async function loadConfig() {
    const response = await fetch(configUrl, { credentials: "omit", cache: "no-store" });
    if (!response.ok) throw new Error("runtime config unavailable");
    config = await response.json();
    consent = readStoredConsent();
    updateConsentPanel();
    if (consent) trackResourceViewOnce();
    void loadBenchmark();
  }

  document.addEventListener("click", event => {
    const target = event.target instanceof Element
      ? event.target.closest("[data-track-event]")
      : null;
    const eventName = target?.getAttribute("data-track-event");
    if (eventName) void track(eventName);
  });

  document.querySelector("[data-consent-allow]")?.addEventListener("click", () => setConsent(true));
  document.querySelector("[data-consent-deny]")?.addEventListener("click", () => setConsent(false));

  window.Kim3310AdDataRuntime = { setConsent, track };
  loadConfig().catch(() => updateConsentPanel());
})();
