# Local quality assurance — October 9, 2026

- npm install completed; audit reported zero vulnerabilities.
- ESLint, TypeScript, production build and five promotion date tests passed.
- In-app Chromium browser: homepage checked at 320, 360, 375, 390, 430, 600, 768, 820, 1024, 1280, 1440 and 1920 widths; no horizontal overflow.
- Remaining pages including the 404 state checked at 320, 390, 768, 1024 and 1440: 65 layout checks, no horizontal overflow.
- Mobile drawer opens, native modal behavior contains focus, Escape closes it and aria-expanded returns false.
- Form rejects empty input and validates fictional demo input; success message explicitly confirms nothing was sent or saved.
- Premium inquiry URL preselects Premium. FAQ accordion opens. Physician image loads successfully (original source width 2048).
- Keyboard activation of skip link focuses main without changing the hash route. In-page discovery link likewise avoids hash router conflicts.
- No browser console errors observed during these checks.
- Telephone, email, main-site and encoded directions hrefs inspected. Main-site research succeeded. Calls, email sending and real-world driving directions were not initiated.
- Reduced-motion CSS disables transitions and transforms; Motion respects useReducedMotion. System-level preference toggling was not performed.
- Safari, Firefox, Edge and physical iOS/Android devices were not tested. Lighthouse scores were not measured; target scores are not represented as achieved.
- Hash routing supports static-host refreshes; builds are checked with both root and /HealingTouch/ asset bases.

Owner review remains necessary for logo and photography rights, Premium terms, conflicting enrollment fees, legal copy, testimonial permission and future form integration. No Git repository, remote, push, deployment, DNS or WordPress modification was performed.

## Hero and map update
User-supplied hero integrated. Live Google Maps pin at A111 verified in the browser. Updated homepage checked at 320, 390, 768, 1024, 1440 and 1920 widths without horizontal overflow. Lint and production build passed. Embedded Google Maps is now a third-party resource; legal/privacy copy should account for it.
