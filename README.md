# Healing Touch DPC Premium

Independent, local-first premium experience for Healing Touch Direct Primary Care. React, Vite, TypeScript, Tailwind CSS, Lucide, Motion, React Hook Form and Zod. No WordPress connection, backend, deployment or remote repository.

## Run locally

With Node 24 and npm on PATH:

```powershell
npm install
npm run dev
npm run lint
npm run typecheck
npm test
npm run build
```

This PC has bundled Node but no npm command. A workspace-local npm download is available under ignored `tools/package`. Equivalent commands:

```powershell
node tools/package/bin/npm-cli.js install
node tools/package/bin/npm-cli.js run dev
node tools/package/bin/npm-cli.js run lint
node tools/package/bin/npm-cli.js run build
```

Use the exact Local URL printed by Vite. `npm run preview` previews the production build. Installed dependency versions are pinned in package-lock.json; use `npm ci` for repeatable installs.

## Structure

`src/components`: layout, shared editorial components, inquiry form. `src/pages`: lazy-loaded homepage and route-specific content. `src/data`: editable business content. `src/lib`: form integration boundary and date automation. `src/styles`: responsive design and reduced-motion rules. `public/images`: local brand, hero and physician assets. `.github/workflows`: future manual Pages workflow.

## Editing

See CONTENT.md for memberships, promotions, FAQs and contact edits; ASSETS.md for image replacement. Business information is based on the public reference website and needs owner review before publication. Premium is a proposed digital experience, not an approved additional clinical tier. No new clinical privileges are promised.

## Forms and future integrations

The form validates on the device. It does not send, log or save entered data. `src/lib/formService.ts` is the integration boundary. Add a practice-approved secure service only after reviewing data handling, access, retention, consent, and applicable obligations. Keep informational fields only. No sensitive medical information in browser storage, URLs, analytics or GitHub.

Concierge is disabled through siteConfig. Future concierge may answer public navigation and practice questions only. For ElevenLabs, either use owner-approved prerecorded audio stored locally, or an approved backend that issues limited access credentials. API keys stay server-side. Set welcomeAudio only after providing an approved asset and implement explicit play controls; never autoplay. The disabled welcome control is a placeholder.

## Deployment and troubleshooting

See DEPLOYMENT.md. No push or deployment is authorized yet. Hash routing avoids static refresh failures. VITE_BASE_PATH controls assets on repository Pages hosting. Restart Vite after environment changes. If PowerShell blocks npm.ps1, use npm.cmd or the local npm CLI above. If a port is occupied, use the next URL printed by Vite. If image downloads fail, use documented placeholders. Safari/Firefox and physical device behavior require additional browser testing; do not claim those browsers were tested unless recorded in QA.md.
