# Design

## Source of truth
- Status: Active
- Last refreshed: 2026-06-25
- Primary product surfaces: `App.tsx`, `components/Hero.tsx`, `components/Projects.tsx`, `components/Navbar.tsx`, `components/Experience.tsx`, `components/Skills.tsx`, `index.css`, `commercialLanes.ts`, `resourceWiring.ts`.
- Evidence reviewed: `README.md`, `docs/service-consolidation.md`, `docs/free-resource-payment-wiring.md`, `docs/final-architecture-notes.md`, `docs/live-service-screenshots.md`, `docs/public-demo-catalog.md`, `public/evidence/live/*`, `public/evidence/portfolio-reel/*`, Chrome audit artifacts under ignored `tmp/`.

## Brand
- Personality: quiet premium, precise, operator-trustworthy, revenue-aware, technically inspectable.
- Trust signals: deployed screenshots, commercial lane names, architecture links, verification evidence, explicit payment/security boundaries.
- Avoid: loud gradients, novelty effects, dense repo sprawl, unsupported revenue/medical/finance/safety claims, fake account-connection claims.

## Product goals
- Goals:
  - Convert a broad GitHub portfolio into a high-trust commercial storefront.
  - Make six buyer-facing service lanes visible before raw repository browsing.
  - Show free-resource/payment readiness without exposing secrets or payout data.
  - Preserve inspectability with architecture links and verification artifacts.
- Non-goals:
  - Hard-delete repositories or rename URLs during open PR work.
  - Promise guaranteed revenue or regulated outcomes.
  - Build a heavy design-system dependency layer.
- Success signals:
  - No mobile horizontal overflow.
  - Fast first read of the six commercial lanes.
  - Clear private-workspace CTA.
  - `npm run verify`, `npm audit --audit-level=high`, and Chrome desktop/mobile audit pass.

## Personas and jobs
- Primary personas: enterprise AI leaders, platform engineers, SOC/NOC/IT operations leads, data platform leads, Korean SMB operators, manufacturing/industrial AI evaluators.
- User jobs: judge credibility quickly, choose a commercial lane, inspect proof, understand boundaries, open a private workspace inquiry.
- Key contexts of use: mobile preview from social/GitHub, desktop review before outreach, technical buyer scanning architecture evidence.

## Information architecture
- Primary navigation: Overview, Experience, Systems, Architecture, Services, Capabilities, Contact.
- Core routes/screens: Hero, experience proof, project gallery, architecture ledger, commercial lanes, free-resource/payment wiring, repo-level service catalog, coverage ledger, capabilities, contact footer.
- Content hierarchy:
  1. Identity and deployed flagship proof.
  2. Commercial lane bundles.
  3. Free API/resource/payment wiring.
  4. Repository-level proof and architecture attachments.

## Design principles
- Principle 1: Commercial clarity over repository volume.
- Principle 2: Premium restraint over decorative noise.
- Principle 3: Evidence before claims.
- Principle 4: Secrets and regulated boundaries must be visible, not hidden.
- Tradeoffs: Use static, repo-native React/CSS instead of adding a component library; prioritize conversion hierarchy over showing every repo equally.

## Visual language
- Color: warm off-white canvas, graphite text, restrained system blue for primary action, deep green only for readiness/success accents.
- Typography: system-first Apple/SF-compatible stack, very large hero type, tight heading tracking, relaxed body copy, uppercase micro-labels.
- Spacing/layout rhythm: large sectional air, cards in calm grids, clear top/bottom breathing room, mobile single-column cards with generous touch targets.
- Shape/radius/elevation: soft continuous corners, thin hairline borders, layered glass/elevation, no harsh drop shadows.
- Motion: small translate/shine interactions only; respect reduced-motion.
- Imagery/iconography: real product screenshots and lucide icons used sparingly as proof markers, not decoration.

## Components
- Existing components to reuse: `Hero`, `Projects`, `Navbar`, `Experience`, `Skills`, commercial lane data in `commercialLanes.ts`, resource wiring data in `resourceWiring.ts`.
- New/changed components: commercial lane cards, resource wiring cards, premium CTA capsules, proof chips, card ordinal badges.
- Variants and states: default, hover, focus-visible, mobile single-column, reduced-motion fallback.
- Token/component ownership: `index.css` owns visual tokens and component styling; data files own commercial copy.

## Accessibility
- Target standard: WCAG 2.2 AA intent for contrast, keyboard access, focus visibility, and semantic landmarks.
- Keyboard/focus behavior: all CTAs are anchors/buttons with visible focus rings and adequate target size.
- Contrast/readability: graphite-on-light, blue labels on white/glass backgrounds, avoid low-opacity text for core copy.
- Screen-reader semantics: `main`, section labels, descriptive links, and decorative icons hidden with `aria-hidden`.
- Reduced motion and sensory considerations: hover transitions are subtle and disabled by existing reduced-motion media query.

## Responsive behavior
- Supported breakpoints/devices: 390px mobile through 1440px desktop; mobile-first no horizontal overflow contract.
- Layout adaptations: hero screenshot moves into copy on mobile; commercial/resource/service cards collapse to one column; CTAs stretch only where needed.
- Touch/hover differences: cards do not require hover for content; mobile CTAs remain visible and large.

## Interaction states
- Loading: static build should paint primary content without skeleton dependence.
- Empty: not applicable for static portfolio sections; absent evidence should render safe placeholders.
- Error: broken images and thin/404 surfaces are caught by verification scripts/audits.
- Success: verification summaries and readiness boundaries are shown as proof rather than transient toasts.
- Disabled: payment/account connection is described as dashboard-only rather than fake-disabled controls.
- Offline/slow network: static copy and links remain usable; screenshots are optimized with WebP previews.

## Content voice
- Tone: concise, premium, technical, evidence-backed, no hype.
- Terminology: use commercial lane names first; use repository names as proof, not as the main product names.
- Microcopy rules: name the buyer, paid motion, proof path, and boundary in one scan; avoid “guaranteed”, “best”, “diagnose”, “investment signal”, or “fully connected payout” claims.

## Implementation constraints
- Framework/styling system: React + Vite + TypeScript + repo-native CSS.
- Design-token constraints: no new dependencies; extend `:root` tokens and existing component classes.
- Performance constraints: keep static build lightweight, reuse existing screenshots/previews, no runtime-heavy animation library.
- Compatibility constraints: Safari/Chrome-friendly CSS, backdrop-filter fallback already present.
- Test/screenshot expectations: `npm audit --audit-level=high`, `npm run verify`, and Chrome desktop/mobile audit for `#service-offers` before claiming done.

## Open questions
- [ ] Replace GitHub issue CTAs with real booking/payment links after provider dashboards and account verification are complete / owner / affects checkout conversion.
- [ ] Re-capture live service screenshots after PR merge and deployment / owner / affects visual freshness.
