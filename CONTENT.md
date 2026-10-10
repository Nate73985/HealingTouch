# Content management and verification

Research date: October 9, 2026. Primary sources:

- https://healingtouchdpc.com/ — contact email, telephone, hours, address, philosophy.
- https://healingtouchdpc.com/about-us/ — physician name, degrees, residency, chief residency and double board certification.
- https://healingtouchdpc.com/membership-pricing/ — $125/month, $49 enrollment fee; STYKU initial $99, follow-up $49.
- https://healingtouchdpc.com/advantage-of-dpc/ — service categories and extended consultations.
- https://healingtouchdpc.com/faq/ — insurance, membership scope, pediatric and employer information.

Copy is summarized; the public source is authoritative, and owner confirmation is needed before launch. The FAQ contains inconsistent enrollment fees ($0 introductory, $99 adult/$49 child, waivers). The dedicated pricing page is used, with a confirmation notice. The September 30 $999 annual offer on the homepage has no year; it is not shown as active. No guaranteed appointment timing or outcome is promised.

## Files to edit

| Content | Location |
| --- | --- |
| Homepage copy, contact, hours, address, CTAs, announcement | src/data/site.ts |
| Membership prices, benefits, availability, disclaimers | src/data/memberships.ts |
| Promotions, dates, terms and eligibility | src/data/promotions.ts |
| Services and experience benefits | src/data/services.ts |
| FAQ categories and answers | src/data/faq.ts |
| Approved testimonials | src/data/testimonials.ts |
| Physician biography and page introductions | src/components/Shared.tsx; src/pages/ContentPage.tsx |
| Homepage section headings | src/pages/Home.tsx |

Dates use YYYY-MM-DD calendar dates in the visitor’s local timezone. End dates include the entire final day. Keep active false until terms are verified. Expired offers do not appear as available. No artificial countdown is created. Announcement dates are optional; enabled false hides it. Tests cover boundary dates and daylight-saving behavior.

Testimonials are empty pending explicit reuse approval. Add only approved quote/name pairs with approved true. No fabricated reviews, ratings or social accounts. Privacy and Terms are review placeholders. Accessibility copy describes implemented features without claiming certification.

Before publishing, approve hero photography, replace the temporary monogram with the official unchanged logo, confirm physician image reuse permission, reconcile pricing, approve Premium terminology and any tier details, review all legal copy and integrate a real form service if desired.

## Executive concept presentation
The owner-provided October 9 Premium brief supplies the conceptual starting price of USD 99,999 annually, five primary privileges and six supporting privileges. These are proposal content, not verified current practice offerings. Edit src/data/premium.ts for the Premium page and src/data/memberships.ts for its linked membership card. The page-bottom disclaimer and global footer explain the concept status. No checkout, gym partner, guaranteed specialist timing or emergency transportation is represented.
