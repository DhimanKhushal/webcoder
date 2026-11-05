# Portfolio handoff for Simran

The portfolio hub and all six detail pages are implemented. Simran's
`88fade2` adds the shared ads experience, SMO and SEO pages, and website filtering.
Marketing assets and performance evidence remain placeholders pending team data.
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

- Every detail page now has eight main sections. Preserve the full-width dark hero,
  light introduction, gray showcase and dark evidence/experience rhythm. Later
  sections explain the scope, process, FAQs and enquiry. Keep each service's
  narrative specific rather than copying the SMO section content.
- `app/portfolio/page.tsx`: hub sections and collection links.
- `app/portfolio/[slug]/page.tsx`: all six detail routes, route validation,
  metadata and canonical URLs, delegating to the shared detail renderer.
- `components/portfolio/detail-renderer.tsx`: typed dispatch to the page families.
- `components/portfolio/detail-layout.tsx` and `detail-layout.module.css`: shared
  full-width hero, section colours, scope rows, process, FAQ and enquiry components.
- `components/portfolio/smo-portfolio.tsx` and `social-format-showcase.tsx`: SMO
  galleries, video areas and keyboard-accessible Posts/Carousels/Stories previews.
- `components/portfolio/seo-portfolio.tsx`: SEO scope, relevant project and clearly
  separated keyword/ranking evidence placeholders.
- `components/portfolio/paid-portfolio.tsx` and `lib/paid-portfolios.ts`: typed
  platform-specific content for the three advertising pages.
- `components/portfolio/website-portfolio.tsx`: build options, project browser,
  website experience, process and industry links.
- `components/portfolio/meta-ads-experience.tsx`: shared Meta, Google and LinkedIn
  format previews, keyboard-accessible tabs and campaign placeholders.
- `components/portfolio/website-portfolio-browser.tsx`: build-type and niche filters,
  text search, filter reset and contextual no-match enquiry.
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
The detail pages deliberately retain `noindex` metadata; remove that directive
when their real assets and evidence are approved for public indexing.

Review fixes: detail-page text has a 12px minimum; a typed niche now carries into
the no-match explanation, and the enquiry includes the selected build type.
Route checks, source lint and the production build pass. Browser QA covers all six
detail pages at 1440, 768 and 390px, all ads tabs and keyboard controls, website
search, niche/build filters and the no-match state. Build-type filters currently
show no matches until the team verifies and populates `websiteTechnology`.

Pushing GitHub `main` does not itself deploy the live VPS. Production deployment
is a separate step; this handoff does not change the running production service.
