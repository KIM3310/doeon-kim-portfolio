# Revenue Launch Plan

Date: 2026-06-06 KST

This plan converts the portfolio from proof gallery into a paid-offer surface. It is intentionally conservative: no passive revenue should be assumed until a buyer schedules a call, shares a workflow problem, and agrees to a scoped diagnostic or pilot.

## Current Commercial Position

The fastest path to revenue is not to fund 35 separate products. The strongest path is to sell four packaged B2B offers:

| Offer | First buyer | First paid step | Target pilot |
| --- | --- | ---: | ---: |
| Enterprise AI adoption sprint | AI, data, security, and platform leaders | $8k-$35k | $50k-$150k |
| Agent runtime reliability audit | Engineering teams shipping tool-calling systems | $5k-$20k | $25k-$75k |
| Security and network operations cockpit | SOC, NOC, MSP, IDC, and infrastructure teams | $7k-$25k | $30k-$90k |
| Governed data and document automation pilot | Analytics, manufacturing, Korean back-office, and regulated workflow teams | $10k-$30k | $40k-$120k |

## Buy Only These First

| Resource | Why | Current public pricing signal | Buy timing |
| --- | --- | --- | --- |
| Custom domain | Makes outreach and buyer review cleaner than a GitHub subpath. | Cloudflare lists Free, Pro at $20/mo annually or $25/mo monthly, and at-cost domain registration. | Buy after picking the public brand/domain name. |
| Scheduling page | Removes friction from qualified calls. | Calendly lists Free, Standard at $10/seat/mo annually, Teams at $16/seat/mo annually; Cal.com has a free individual plan and paid team tiers. | Buy immediately after calendar availability is ready. |
| Payment link | Lets a buyer pay for a diagnostic without custom checkout code. | Stripe lists Payment Links and Checkout as no-code or prebuilt hosted payment surfaces under Payments pricing, with custom payment-page domain at $10/mo. | Configure after the first diagnostic offer wording is final. |
| Privacy-safe analytics | Shows which offer lane gets qualified clicks. | Cloudflare Pages includes web analytics positioning; Plausible documents paid subscription tiers; PostHog also has web and product analytics options. | Add after the domain is connected. |
| Professional email alias | Improves trust in outbound and inbound conversations. | Pricing depends on provider and domain. | Buy with the domain. |

Do not buy paid compute, a database, GPU capacity, CRM seats, or enterprise hosting before a buyer conversation proves which lane needs it.

## Public Surface Changes Now Completed

- Added a visible paid offer menu to the portfolio.
- Added four packaged B2B offers with entry pricing, pilot pricing, recurring support ranges, timelines, outcomes, deliverables, and proof repos.
- Added direct email CTA subjects per offer so buyer inquiries arrive with context.
- Added repository coverage links under each offer so proof can be inspected from the offer itself.
- Added verification hooks so the offer section and launch plan stay present in future changes.

## 14-Day Revenue Push

| Day | Action | Pass condition |
| ---: | --- | --- |
| 1 | Pick one domain and connect it to the portfolio. | Domain resolves to the portfolio and SSL is active. |
| 1 | Create four scheduling event types matching the four offers. | Each event has a narrow intake question set. |
| 2 | Create one Stripe Payment Link for a low-risk diagnostic. | The link has clear scope, refund boundary, and invoice settings. |
| 2 | Add the calendar and payment links to the portfolio constants. | CTA path moves from email-only to schedule/pay. |
| 3-5 | Build a 40-account target list across enterprise AI, security ops, network ops, data, manufacturing, and Korean document workflows. | 40 account names and one specific workflow pain per account. |
| 6-10 | Send 20 carefully targeted messages with one proof repo and one offer. | At least 3 replies or 2 calls scheduled. |
| 11-14 | Run calls and pitch the smallest diagnostic, not a vague custom build. | One paid diagnostic or one written pilot-intent thread. |

## Offer Guardrails

- Sell diagnostics first when data access, security review, or buyer authority is unclear.
- Do not promise autonomous medical, safety, or industrial inspection outcomes.
- Keep all regulated, medical, and manufacturing claims scoped as workflow support or validation unless expert review and real data exist.
- Do not build more features until at least one buyer confirms which lane has budget.
- Keep estimates in USD until a Korean buyer requires KRW pricing.

## Account Setup Checklist

| Account | Minimum setup |
| --- | --- |
| Cloudflare | Domain, DNS, SSL, analytics, optional Pages redirect from current GitHub Pages. |
| Calendly or Cal.com | Four event types: AI adoption, runtime reliability, security ops, governed automation. |
| Stripe | One diagnostic product, one pilot deposit product, invoice details, business identity, refund boundary. |
| Email | Domain alias that forwards to the existing email, plus a simple signature with portfolio and GitHub links. |
| Analytics | Track offer CTA clicks, proof repo clicks, and contact clicks without collecting private visitor data. |

## Immediate Next Code Hooks

The current code uses email CTAs because no payment or scheduling account is available in-repo. Once the account owner provides links, replace the mail links in `components/CommercialOffers.tsx` with:

- schedule link for each offer
- payment link for the first diagnostic
- analytics event attribute for offer clicks

## Source Notes

- Stripe pricing and Payment Links/Checkout: https://stripe.com/pricing and https://docs.stripe.com/payment-links/create
- Calendly pricing and plan help: https://calendly.com/pricing and https://calendly.com/help/choose-the-right-calendly-plan-for-your-team
- Cal.com pricing: https://cal.com/pricing
- Cloudflare pricing and Pages: https://www.cloudflare.com/plans/ and https://pages.cloudflare.com/
- Plausible subscription plans: https://plausible.io/docs/subscription-plans
- Vercel pricing comparison point: https://vercel.com/pricing

## Decision

Move to revenue now, but do it through high-ticket, scoped B2B services first. The right first sale is a diagnostic or pilot tied to one measurable workflow, not a broad subscription promise.
