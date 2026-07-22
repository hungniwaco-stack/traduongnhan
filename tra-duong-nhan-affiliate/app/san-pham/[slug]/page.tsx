import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, products } from "@/data/site";
import { Breadcrumb } from "@/components/LayoutBits";
import AffiliateButton from "@/components/AffiliateButton";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { withBasePath } from "@/lib/withBasePath";
import Link from "next/link";

type Props = { params: { slug: string } };

const formatVnd = (value: number) => `${value.toLocaleString("vi-VN")}đ`;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const product = products.find((item) => item.id === params.slug);
  if (!product) return { title: "Sản phẩm không tồn tại" };
  return buildMetadata({
    title: `${product.name} | Trà Dưỡng Nhan`,
    description: product.shortDesc,
    path: `/san-pham/${product.id}`,
    image: product.image
  });
}

export default function ProductPage({ params }: Props) {
  const product = products.find((item) => item.id === params.slug);
  if (!product) notFound();

  const hasDiscount = product.priceOriginal > product.priceSale;
  const discountPercent = hasDiscount
    ? Math.round(((product.priceOriginal - product.priceSale) / product.priceOriginal) * 100)
    : 0;
  const webpSrc = withBasePath(product.image.replace(/\.jpg$/i, ".webp"));
  const relatedReview = posts.find((post) => post.productId === product.id);
  const url = `https://traduongnhan.shop/san-pham/${product.id}/`;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `https://traduongnhan.shop${product.image}`,
    description: product.shortDesc,
    brand: { "@type": "Brand", name: "Trà Dưỡng Nhan" },
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "VND",
      price: product.priceSale,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://traduongnhan.shop/" },
      { "@type": "ListItem", position: 2, name: product.name, item: url }
    ]
  };

  return (
    <article className="article">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: product.name }]} />

      <h1>{product.name}</h1>

      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          className="product-image"
          src={withBasePath(product.image)}
          alt={product.name}
          width={1200}
          height={1200}
          decoding="async"
        />
      </picture>

      <p className="price-row">
        <span className="price-sale">{formatVnd(product.priceSale)}</span>
        {hasDiscount ? <span className="price-original">{formatVnd(product.priceOriginal)}</span> : null}
        {hasDiscount && discountPercent > 0 ? <span className="price-badge">-{discountPercent}%</span> : null}
      </p>

      <p>{product.shortDesc}</p>

      <section className="card">
        <h2>Lợi ích chính</h2>
        <ul>{product.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
      </section>

      <section className="card">
        <h2>Thành phần</h2>
        <p>{product.ingredients}</p>
      </section>

      <section className="card">
        <h2>Phù hợp với ai?</h2>
        <p>{product.whoFor}</p>
      </section>

      <section className="card">
        <h2>Cách pha / nấu</h2>
        <p>{product.howToBrew}</p>
      </section>

      <section className="card">
        <h2>Trải nghiệm thực tế</h2>
        <p>{product.experience}</p>
      </section>

      <section className="disclaimer-box">
        <strong>Lưu ý:</strong> {product.caution} Nội dung chỉ mang tính tham khảo, không thay thế tư vấn y tế chuyên môn.
      </section>

      <AffiliateButton href={product.affiliateUrl} />

      {relatedReview ? (
        <section>
          <h2>Đọc thêm</h2>
          <ul>
            <li><Link href={`/bai-viet/${relatedReview.slug}`}>{relatedReview.title}</Link></li>
          </ul>
        </section>
      ) : null}
    </article>
  );
}
