# Session Memory - Tra Duong Nhan Affiliate

Last updated: 2026-07-22

## Canonical Working Location (DO NOT ASK AGAIN)
- Standalone root (current, confirmed 2026-07-22): `D:\Hungniwaco\CODEX\Tra-duong-nhan`
- App root: `D:\Hungniwaco\CODEX\Tra-duong-nhan\tra-duong-nhan-affiliate`
- Always edit inside app root unless explicitly requested.
- Note: an older note in this file pointed to `D:\Hungniwaco\Claude Code\tra-duong-nhan-website\...` — folder was moved/renamed at some point before 2026-07-22. Git remote is unchanged (`hungniwaco-stack/traduongnhan`), so if in doubt, verify by `git remote -v` rather than trusting either path blindly.
- Related but separate folder with SEO audit source material: `D:\Dropbox\01. DỰ ÁN 2026\INDEX\traduongnhan.shop` (cloud-synced via Dropbox, contains `ACTION-PLAN.md`, `FULL-AUDIT-REPORT.md`, `findings/`, `cluster/cluster-briefs/`). The audit there (dated 2026-07-20) was done via SERP analysis, not a direct crawl — many of its "critical" findings were already fixed in code before the audit ran. Don't trust its findings without checking actual code/live site first. The `cluster/cluster-briefs/*.md` files are SEO outlines with fabricated-sounding scientific citations/stats/prices — reuse only their topic and target keywords, never copy specific claims verbatim (see Content Quality Rules below).

## Domain & Deployment (LOCKED)
- Production domain: `https://traduongnhan.shop`
- GitHub Pages repo: `https://github.com/hungniwaco-stack/traduongnhan`
- GitHub Pages custom domain is connected and HTTPS is enforced.
- DNS target (Hostinger) uses GitHub Pages standard A records and `www` CNAME.

## Technical Routing Rules (LOCKED)
- For custom domain deployment, DO NOT use repository `basePath` (`/traduongnhan`).
- `next.config.mjs` should remain export-only without `basePath` and `assetPrefix` for current custom domain setup.
- Keep helper `lib/withBasePath.ts` with empty base path for current domain setup.

## Branding & UI (CURRENT)
- Brand: `TRÀ DƯỠNG NHAN`
- Header logo source: `public/images/brand/logo.png`
- Logo has been replaced by user-provided file and enlarged for stronger recognition.
- Primary theme direction: herbal, warm, premium; improved CTA contrast already applied.

## Product/Content Rules (LOCKED)
- Product images use: `/images/products/01.jpg` to `/images/products/06.jpg` in order.
- Card image crop should prioritize top content: `object-position: top center`.
- If `priceSale === priceOriginal`, show only one sale price (hide original strikethrough and discount badge).
- Short descriptions must NOT include phrase like `(giá gốc ...)`.
- Product review titles must NOT start with `Review` prefix.

## Affiliate Links (CURRENT)
- 4kg combo product affiliate link is locked to:
  - `https://s.shopee.vn/4qCseh5TIq`

## Content Quality Rules (LOCKED)
- Vietnamese diacritics must be correct everywhere (no mojibake like `TrÃ`, `Ä`, `á»`). Found and fixed one real instance in `data/site.ts` (product `gao-lut-hoa-hong`, `whoFor` field) on 2026-07-22 — worth a full-file grep (`[a-zA-Z]\?[a-zA-Z]|�`) after any bulk data edit.
- Keep schema strategy: `Article`, `FAQPage`, `BreadcrumbList`, plus `Organization` (site-wide, in `app/layout.tsx`) and `Product` (per product page) — both added 2026-07-22.
- `Product` schema is now added on `app/san-pham/[slug]/page.tsx` using only real available fields (name, image, description, brand, offers: price/currency/availability). Do NOT add `aggregateRating` or `review` fields — no real customer rating data exists; fabricating counts/scores would violate the no-fake-claims rule below.
- **No fabricated claims rule**: site voice uses only hedged language ("hỗ trợ", "có thể", "thường được dùng"). Never add specific scientific citations, study statistics, drug-interaction details, or specific review counts/ratings unless verifiably real. This applies especially when adapting the Dropbox `cluster-briefs/` content outlines into actual posts — write in the site's existing cautious style instead of copying their invented citations/numbers.
- Never invent fictional product names/prices/SKUs in content — always tie articles/comparisons to the 6 real products in `data/site.ts`.

## Conversion/UX Upgrades Already Applied
- Added trust blocks and social-proof section on homepage.
- Added sticky mobile CTA on article pages.
- Added internal linking clusters in category pages.
- Added image/logo width-height and decoding hints to reduce layout shift.

## Site Architecture Facts (CURRENT, added 2026-07-22)
- Stack: Next.js 14 App Router, static export (`output: "export"` in `next.config.mjs`), deployed via `.github/workflows/deploy-pages.yml` to GitHub Pages on push to `main`.
- `data/site.ts` is the single source of truth: `products` array (6 items) and `posts` array (15 items as of 2026-07-22, up from 11).
- `lib/seo.ts` exports `buildMetadata({title, description, path, image?})` — use this for ALL page `metadata`/`generateMetadata` instead of writing raw `Metadata` objects. Reason: Next.js does not merge nested `openGraph`/`twitter` objects from the root layout into child pages that omit them, so every page must produce its own complete OG/Twitter block or it silently inherits the homepage's.
- Product detail pages: `app/san-pham/[slug]/page.tsx` (slug = `product.id`), added 2026-07-22, linked from `ProductCard`, included in `app/sitemap.ts`.
- JSON-LD locations: `Organization` in `app/layout.tsx` (site-wide); `Article`+`BreadcrumbList`+`FAQPage` in `app/bai-viet/[slug]/page.tsx`; `Product`+`BreadcrumbList` in `app/san-pham/[slug]/page.tsx`.
- `BlogPost` type has optional `updatedAt?: string` field (added 2026-07-22). The 11 original posts have no real known publish date and still fall back to hardcoded `"30/05/2026"` in the article template — don't fabricate individual dates for them; only set `updatedAt` going forward for genuinely new/edited posts.
- GA4 Measurement ID: `G-7SE02FHN49` (confirmed live and firing 2026-07-22). Because the site is a static export, `NEXT_PUBLIC_GA_ID` must be set as a GitHub Actions repo secret **and** referenced in the workflow's build step (`env: NEXT_PUBLIC_GA_ID: ${{ secrets.NEXT_PUBLIC_GA_ID }}`) — setting only the secret without the workflow `env:` line does nothing, since Next.js inlines `NEXT_PUBLIC_*` vars at build time.
- Product images: `.jpg` is canonical in `data/site.ts`, `.webp` siblings exist for all 6 and are now actually served via `<picture><source type="image/webp">` in `CardSet.tsx` / `san-pham/[slug]/page.tsx` (previously the `.webp` files existed on disk but nothing referenced them).
- GSC: property verified for `traduongnhan.shop`; sitemap resubmitted as `/sitemap.xml` on 2026-07-22, 31 URLs discovered successfully (10 static + 6 products + 15 posts).

## Sandbox/Tooling Gotchas (for Claude, not user-facing)
- `npm run build` hangs indefinitely in the Cowork sandbox because `next/font/google` tries to fetch `fonts.googleapis.com`, which is blocked by the sandbox's network allowlist. Use `node_modules/.bin/tsc --noEmit` (strict mode already on in `tsconfig.json`) to verify changes instead; the real build only needs to succeed on GitHub Actions (which has full network access).
- Direct `curl`/HTTP from bash to `traduongnhan.shop` is also blocked by the sandbox allowlist — use `mcp__workspace__web_fetch` or Claude-in-Chrome tools to check the live site instead.
- This repo's working copy sits on a mount with unusual git-lock permission behavior: `rm` on `.git/index.lock`, fresh loose objects, or `HEAD.lock` fails with "Operation not permitted", but `mv` on the same file succeeds. Workaround before any `git add`/`commit`/`status` that reports a stale lock: `mv .git/index.lock .git/index.lock.bak<N>` then retry immediately.
- `git config user.name`/`user.email` are not persisted in the sandbox — set them each session before committing (`Nguyễn Hữu Hùng` / `hungniwaco@gmail.com`, matching existing commit history).
- No GitHub push credentials exist in the sandbox — commit locally, then tell the user to `git push origin main` from their own machine.
- The working tree has large pre-existing CRLF line-ending drift across ~140 files unrelated to the website (the `agents/`, `commands/`, `skills/`, `workflows/` AI Agent Business Kit files at the repo root) — this shows as "modified" in `git status` but isn't a real change. Never `git add -A`/`git add .`; always stage explicit paths to avoid committing unrelated noise.

## Author & Business Identity (LOCKED, decided 2026-07-22)
- Real author name is **Nguyễn Hữu Hùng** — used as-is, with NO title/role/credential attached (user explicitly chose the "name only, no chức danh" option). Do not add job titles like "chuyên gia" or "biên tập viên" unless the user asks for one later.
- Applied in: article byline (`app/bai-viet/[slug]/page.tsx`, replaces old generic "Ban biên tập Trà Dưỡng Nhan"), `Article` JSON-LD `author` field (now `{"@type": "Person", "name": "Nguyễn Hữu Hùng"}`, publisher stays `Organization` "Trà Dưỡng Nhan"), and one mention on `app/ve-chung-toi/page.tsx`.
- **ATTP certification / business license: deliberately excluded, permanently.** User confirmed this is a pure affiliate site (doesn't manufacture or sell directly), so ATTP food-safety certification doesn't apply and must never be added or implied. Don't re-suggest this.
- Real social media URLs (for `Organization` schema `sameAs`) still not provided — still outstanding if the user has any.

## Performance Findings (2026-07-22, resolved)
- User ran PageSpeed Insights mobile: score 61, LCP 12.2s (very poor), FCP 4.3s, Speed Index 6.1s — but TBT only 30ms and CLS 0, so the bottleneck was NOT server/JS-execution (i.e. the old audit's "server in Brazil" theory looks wrong/irrelevant) — it was unoptimized images.
- Root cause found: `public/images/brand/logo.png` was 1254×1254 / 1.12MB but displayed at only ~76px (`loading="eager"` in header — almost certainly the LCP element); product photos were 1024×1024 sourced at 700KB-1MB each despite rendering in ~220px-tall cards.
- Fixed: resized logo to 300×300 (92KB), product images to 800×800 max + recompressed jpg/webp at quality 78 (each now 35-153KB, down from 150KB-1MB), favicon icons recompressed. Total weight of these assets dropped from ~4.7MB to ~1.2MB. Also fixed one WCAG contrast failure found in the same audit run: `.breadcrumb` text color `#69756a` was 4.34:1 on the cream background (fails AA's 4.5:1) — changed to `#4d5d4f` (6.3:1).
- User has not re-run PageSpeed after this fix yet — if asked to verify, have them re-run `pagespeed.web.dev` on mobile and expect a large jump in the Hiệu suất/Performance score and LCP metric.
- Still not fully addressed: "Sử dụng bộ nhớ đệm hiệu quả" (efficient cache lifetimes, ~1.9MB flagged) — GitHub Pages sets its own default `Cache-Control` headers on `public/` assets and there's no way to override them without fronting the site with a CDN like Cloudflare (this was the old audit's original suggestion, for a different stated reason). Don't re-diagnose this from scratch — it's a known GitHub Pages limitation, not a code bug.

## Outstanding Items (as of 2026-07-22, don't re-derive — just pick up)
- Real social media URLs (Facebook/TikTok/Zalo...) if the user has any, for `Organization` schema `sameAs`.
- Consider Cloudflare (or similar) in front of GitHub Pages if the user wants to fix the "cache lifetime" PageSpeed diagnostic — GitHub Pages itself can't set custom cache headers.
- More articles can be drafted from `cluster-plan.md` in the Dropbox audit folder beyond the 4 already published (`tra-duong-nhan-la-gi`, `ai-khong-nen-uong-tra-duong-nhan`, `cach-pha-tra-duong-nhan-dung-chuan`, `so-sanh-cac-loai-tra-duong-nhan`); a 5th brief (`C2-S4-uong-luc-nao-tot-nhat`) was intentionally skipped as a near-duplicate of the existing `uong-tra-duong-nhan-luc-nao-la-tot-nhat` post.
- Optional/nice-to-have, not urgent: per-category OG images (currently all pages share one default `public/images/og-default.jpg`), a dedicated pillar/"cẩm nang toàn diện" page (referenced conceptually by new articles but not built).
- As of 2026-07-22 the local commit that updates this file (and the author-name commit that follows it) may be ahead of `origin/main` — check `git fetch origin main && git log origin/main -1` before assuming the remote is current; push credentials aren't available in the sandbox so the user must `git push origin main` themselves.

## User Preferences (LOCKED)
- User wants direct execution without repeated confirmation.
- Default behavior: do all requested tasks end-to-end, then report results.
- Communication language: Vietnamese.
- Keep responses concise and practical.
- Comfortable following detailed manual step-by-step instructions for things Claude can't do itself (GitHub secrets, Google Search Console, GA4 dashboard) — give exact click-paths rather than vague pointers.
