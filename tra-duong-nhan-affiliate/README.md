# Tra Thu Gian Affiliate (Next.js)

Website affiliate tiếng Việt cho niche: trà thư giãn, trà ngủ ngon và healthy lifestyle cho dân văn phòng.

## Công nghệ
- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS thuần, nhẹ và dễ chỉnh sửa

## Chạy local
1. Mở terminal tại thư mục project:
   ```bash
   cd "D:\NDGROUP\AI Agent Business Kit\tra-thu-gian-affiliate"
   ```
2. Cài dependencies:
   ```bash
   npm install
   ```
3. Chạy môi trường dev:
   ```bash
   npm run dev
   ```
4. Truy cập:
   [http://localhost:3000](http://localhost:3000)

## Build production
```bash
npm run build
npm run start
```

## Theo doi SEO (GSC + GA4)
1. Tao property `https://trathugian.shop` tren Google Search Console.
2. Xac minh domain bang DNS TXT o Hostinger.
3. Gui sitemap: `https://trathugian.shop/sitemap.xml`.
4. Gan GA4 bang Google Tag Manager hoac script GA trong `app/layout.tsx` neu co `G-XXXXXXX`.

## Bat GA4 nhanh
1. Tao file `.env.local` trong thu muc project.
2. Them dong:
   `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`
3. Chay lai `npm run dev` hoac build/deploy lai.

## Cấu trúc chính
- `app/`: routes và layout
- `components/`: Header, Footer, ArticleCard, ProductCard, AffiliateButton, FAQSection, CategoryCard, Breadcrumb, TableOfContents, DisclaimerBox
- `data/site.ts`: dữ liệu mẫu bài viết, sản phẩm, FAQ, category

## Route quan trọng
- `/`
- `/tra-ngu-ngon`
- `/giam-stress`
- `/review-tra`
- `/healthy-lifestyle`
- `/kien-thuc-tra`
- `/bai-viet/[slug]`
- `/review/tra-tam-sen-say-kho-giup-ngu-ngon-thanh-nhiet`

## Lưu ý SEO/GEO
- Mỗi trang có `metadata` (title + description)
- Heading H1/H2/H3 rõ ràng
- Nội dung dùng ngôn ngữ cẩn trọng: hỗ trợ, giúp, có thể, thường được dùng
- Có disclaimer sức khỏe ở footer và trong bài
