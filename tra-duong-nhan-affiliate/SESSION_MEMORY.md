# Session Memory - Tra Duong Nhan Affiliate

Last updated: 2026-05-30

## Canonical Working Location (DO NOT ASK AGAIN)
- Standalone root: `D:\Hungniwaco\Claude Code\tra-duong-nhan-website`
- App root: `D:\Hungniwaco\Claude Code\tra-duong-nhan-website\tra-duong-nhan-affiliate`
- Always edit inside the app root above.

## Project State (Locked)
- This project is cloned from the tea template and converted to `Trà Dưỡng Nhan`.
- Folder renamed from `tra-thu-gian-affiliate` to `tra-duong-nhan-affiliate`.
- Build status: `npm run build` passes after taxonomy migration.

## Branding (Current)
- Brand name: `TRÀ DƯỠNG NHAN`.
- Header text and alt labels use `Trà Dưỡng Nhan`.
- Logo path remains: `public/images/brand/logo.png` (placeholder until user provides new logo).

## Domain / SEO Base (Working Assumption)
- Working metadata base and schema domain currently set to: `https://traduongnhan.shop`.
- `robots.ts` and `sitemap.ts` use `traduongnhan.shop`.
- No `CNAME` file in cloned project (removed to avoid inheriting old domain by mistake).

## Taxonomy (Locked)
- Categories:
  - `tra-duong-nhan`
  - `review-tra-duong-nhan`
  - `routine-dep-da`
  - `thanh-loc-co-the`
  - `kien-thuc-duong-nhan`
- Old category routes removed from this project:
  - `/tra-ngu-ngon`
  - `/giam-stress`
  - `/review-tra`
  - `/healthy-lifestyle`
  - `/kien-thuc-tra`

## Content Dataset (Locked)
- `data/site.ts` replaced with real `Trà Dưỡng Nhan` sample dataset:
  - New product IDs/slugs/titles/descriptions.
  - New post slugs and interlink map (`relatedSlugs`) aligned to new taxonomy.
  - Review template fields include `quickSummary`, `bestFor`, `notFor`, FAQ blocks.

## Category Routes Added
- `/tra-duong-nhan`
- `/review-tra-duong-nhan`
- `/routine-dep-da`
- `/thanh-loc-co-the`
- `/kien-thuc-duong-nhan`

## Technical Rules (Locked)
- Keep schema strategy: `Article`, `FAQPage`, `BreadcrumbList`.
- Do not add `Product` schema unless merchant-required fields are fully available.
- Date display for article UI: `dd/mm/yyyy`.
- Dynamic article canonical comes from `generateMetadata` in `app/bai-viet/[slug]/page.tsx`.

## Canonical Rules (Locked)
- Do not set global `alternates.canonical: "/"` in `app/layout.tsx`.
- Canonical must be set per top-level page explicitly.
- Ensure category canonical paths match new taxonomy routes.

## Verification Playbook
- After edits, run `npm run build` in:
  - `D:\Hungniwaco\Claude Code\tra-duong-nhan-website\tra-duong-nhan-affiliate`
- For deploy verification (when connected to a real domain):
  1) Check one category page canonical.
  2) Check one article page date + schema.
  3) Check `sitemap.xml` has only new taxonomy routes.

## User Preferences (Locked)
- Execute directly with minimal back-and-forth.
- Keep replies concise.
- Vietnamese content with proper diacritics.
