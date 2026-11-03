# Portfolio handoff for Simran

The portfolio hub is implemented, and six detail URLs are scaffolded. Their page
bodies are intentionally empty, retaining the shared site header and footer.
Continue from the latest `main`, which also contains the current site's earlier
service pages, case studies, typography and AI-first positioning updates.

## Start here

Save or commit any current local work before switching branches. Do not reset it.

```sh
git fetch origin
git switch main
git pull --ff-only origin main
pnpm install --frozen-lockfile
pnpm dev --port 3010
```

Create your working branch from this updated `main`. The older `portfolio` branch
predates the current site; do not merge it wholesale over these updates.

## Approved scope: seven pages total

| URL | Work to complete |
| --- | --- |
| `/portfolio` | Existing hub: Organic Marketing, Performance Marketing and Website Development sections. Preserve this structure and the links to all six detail pages. |
| `/portfolio/smo` | Social media work, graphic design and video editing together. No separate graphic-design or video-editing pages. |
| `/portfolio/seo` | Relevant SEO projects, keyword rankings, dates and verified results. |
| `/portfolio/meta-ads` | Meta campaign screenshots and supporting text. |
| `/portfolio/google-ads` | Google campaign screenshots and supporting text. |
| `/portfolio/linkedin-ads` | LinkedIn campaign screenshots and supporting text. |
| `/portfolio/websites` | Overview, WordPress/custom-coded work, niche buttons and niche search. |

Organic Marketing and Performance Marketing are sections of the hub, not extra
overview pages. The website technology and niche views also remain within the
single Websites page; do not add separate stack or industry routes.

Every detail page must work as a direct shared link. Someone opening
`/portfolio/meta-ads` should immediately see the Meta portfolio and its context,
without navigating through the hub. Include an optional link back to `/portfolio`.

## Implementation entry points

- `app/portfolio/page.tsx`: hub sections and collection links.
- `app/portfolio/[slug]/page.tsx`: all six empty detail routes, route validation,
  metadata and canonical URLs. Replace its `return null` with the detail renderer.
- `lib/portfolio.ts`: shared collection data, valid slugs and URL helpers.
- `components/portfolio/portfolio.module.css`: hub styles using existing brand tokens.
- `components/portfolio/portfolio-preview.tsx`: interactive website preview in the hero.
- `components/portfolio/featured-projects.tsx`: existing website project gallery.
- `lib/case-studies.ts` and `public/projects/`: existing website data and screenshots;
  retain the existing `/projects/[slug]` case-study links.

Use one shared screenshot-and-text template for Meta, Google and LinkedIn Ads,
fed by their collection slugs. SMO, SEO and Websites can have layouts appropriate
to their content. Keep the shared data central rather than duplicating project
records across pages. Read `AGENTS.md` and the relevant installed guides under
`node_modules/next/dist/docs/` before coding; this project runs Next/Vinext.

## Content and website filtering

The team still needs to supply SMO creatives/videos, SEO ranking evidence and ad
campaign screenshots/results. The user explicitly approved blank screens or
fallbacks until that data arrives. Keep placeholders clearly recognisable; do not
invent clients, campaign spend, leads, rankings, ROAS, testimonials or growth figures.

For Websites, allow browsing WordPress/custom-coded work and selecting or searching
a niche. Show matching projects when available. If none match, show a contact card
with what we can provide for that niche and a relevant enquiry CTA. Verify each
project's stack before assigning technology filters; an image alone does not prove it.

Preserve Webcodder's blue, neutral surfaces, Instrument Serif display type and
DM Sans body type. Keep graphics and video under SMO, and maintain responsive,
keyboard-accessible controls and reduced-motion behavior.

## Verification and publication

```sh
pnpm exec eslint app components lib
pnpm exec tsc --noEmit
pnpm build
git diff --check
```

Full typecheck currently has the pre-existing `worker/index.ts` error:
`Cannot find name 'Fetcher'`. Keep this separate from portfolio regressions.

Verify all seven URLs, an unknown portfolio slug returning 404, direct navigation,
hub links, images and mobile/desktop layouts. Use Ego Lite for browser QA.
Empty detail pages deliberately have `noindex` metadata; remove that directive
when their actual portfolio content is ready for public indexing.

Pushing GitHub `main` does not itself deploy the live VPS. Production deployment
is a separate step; this handoff does not change the running production service.
