# Session Memory - Tra Thu Gian Affiliate

Last updated: 2026-05-28

## Project
- Project path: `D:\NDGROUP\AI Agent Business Kit\tra-thu-gian-affiliate`
- Framework: Next.js 14 + React 18 + TypeScript
- Style direction: natural/relaxing, light green + cream + tea-brown
- Language: Vietnamese content

## Brand/UI Decisions
- Brand text in header: `TRA THU GIAN` was updated to accented, highlighted style with logo icon.
- User prefers Vietnamese diacritics (no slug-looking labels in UI chips where possible).
- Content-first affiliate style (review helpful first, affiliate second).

## Affiliate Product Decisions
- Tam sen product affiliate: `https://s.shopee.vn/5ApfBMndXs`
- Hoa cuc mat ong product affiliate: `https://s.shopee.vn/70HK7MPvCJ`
- Lavender product affiliate: `https://s.shopee.vn/8KmhiWBfIX`
- Gao lut dau do product affiliate: `https://s.shopee.vn/5q5MkQnhX2`
- Hoa nhai product affiliate: `https://s.shopee.vn/110704kJcg`
- Cam que/hoa hong/tao do/hoa nhai affiliate: `https://s.shopee.vn/2LVUgtdj5Y`

## Content Decisions
- Added separate review-style posts for each tea type.
- Removed redundant cards/posts when user requested.
- Updated one article from 5 tea items to 6 tea items (title + intro + TOC + section list).

## Deployment/GitHub
- Repo: `https://github.com/hungniwaco-stack/trathugian`
- Branch: `main`
- GitHub Pages deploy is configured via Actions workflow.
- For custom domain `trathugian.shop`:
  - `public/CNAME` is set to `trathugian.shop`
  - Next config removed repo basePath so site serves from root domain.

## DNS (Hostinger) Target
- `A @ -> 185.199.108.153`
- `A @ -> 185.199.109.153`
- `A @ -> 185.199.110.153`
- `A @ -> 185.199.111.153`
- `CNAME www -> hungniwaco-stack.github.io`

## Working Preferences From User
- User wants direct execution with minimal back-and-forth.
- User frequently asks quick content/title/link edits and expects immediate updates.
- User prefers concise confirmation after changes.

## Notes For Next Session
- Start by checking `data/site.ts` first for most content/link updates.
- If user says "chưa cập nhật", verify with `rg` and patch immediately.
- For GitHub Pages issues, check:
  1) Actions deploy status
  2) `Settings > Pages > Custom domain`
  3) DNS resolution
  4) HTTPS certificate propagation
