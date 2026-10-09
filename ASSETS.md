# Local assets

No images are hotlinked. The official logo download returned HTTP 403; the monogram is a clearly designated temporary placeholder, not a redesigned official logo.

| File | Page / section | Purpose | Recommended dimensions / format | Replacement |
| --- | --- | --- | --- | --- |
| public/images/brand/logo-placeholder.svg | Header and footer, all pages | Temporary HT monogram | Official logo SVG or transparent PNG; natural aspect ratio | Supply official unaltered logo and update Logo in App.tsx; preserve proportions |
| public/images/hero/premium-hero-placeholder.svg | Home hero | Original vector illustration of a calm wellness space; not a photograph of the clinic | 1200×1500 desktop, 900×1000 mobile; WebP/AVIF | Replace with approved warm healthcare or wellness photography; update picture sources and descriptive alt in Home.tsx |
| public/images/physician/dr-t.jpg | Home and About physician editorial | Public physician photograph downloaded from practice website | 960×1280 portrait WebP, ideally under 250 KB | Obtain owner approval for reuse; replace and update asset call in Shared.tsx |
| public/images/physician/dr-t-placeholder.svg | Physician image error fallback | Clearly labeled portrait placeholder | 960×1280 SVG | Remains only as a fallback until owner provides the photograph |

Physician source: https://healingtouchdpc.com/wp-content/uploads/2022/11/63ca9a0b-6de7-4b6a-bf8a-31d65b927a7c-scaled.jpg. Public access is not a license grant; practice approval remains required.

Future optional photos: membership-family-placeholder.webp (1200×800), wellness-placeholder.webp (1200×800), employer-placeholder.webp (1200×800). These are specifications, not currently referenced files. Offer cards accept local image paths relative to images/. No invented patients or staff are depicted.

Social preview specification: 1200×630 PNG/WebP, official approved logo, purple/ivory background, headline “Exceptional healthcare. Personally delivered.” Create it after logo approval. Set absolute og:image and twitter:image URLs in index.html once the production origin is known. No broken placeholder image URL is emitted now.

## Updated hero
public/images/hero/healing-touch-hero.png is the user-supplied 1536×1024 PNG from Healing touch blank hero image.png. It replaces the hero illustration. Desktop uses the image’s open left area for text; mobile shows the complete image below the copy. The prior SVG is retained as an unused placeholder.

The location preview now embeds Google Maps using siteConfig.mapsEmbedUrl for 3530 S Val Vista Dr, Suite A111, Gilbert, AZ 85297. Google serves the map externally; no API key is configured.

## Hero composition revision
Restored the original split layout and framed right-hand image, including the editorial caption and purple Premium strip. The supplied realistic interior image remains in that frame with a right-focused crop. Google Maps is unchanged.
