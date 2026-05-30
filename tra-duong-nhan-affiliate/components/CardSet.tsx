import Link from "next/link";
import type { BlogPost, FAQ, Product } from "@/data/site";
import { categoryLabelMap } from "@/data/site";
import AffiliateButton from "./AffiliateButton";

const formatVnd = (value: number) => `${value.toLocaleString("vi-VN")}đ`;

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <article className="card">
      <p className="chip">{categoryLabelMap[post.category]}</p>
      <h3><Link href={`/bai-viet/${post.slug}`}>{post.title}</Link></h3>
      <p>{post.description}</p>
    </article>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const discountPercent = product.priceOriginal > 0
    ? Math.round(((product.priceOriginal - product.priceSale) / product.priceOriginal) * 100)
    : 0;
  return (
    <article className="card">
      <img className="product-image" src={product.image} alt={product.name} loading="lazy" />
      <h3>{product.name}</h3>
      <p className="price-row">
        <span className="price-sale">{formatVnd(product.priceSale)}</span>
        <span className="price-original">{formatVnd(product.priceOriginal)}</span>
        {discountPercent > 0 ? <span className="price-badge">-{discountPercent}%</span> : null}
      </p>
      <p>{product.shortDesc}</p>
      <ul>{product.benefits.map((b) => <li key={b}>{b}</li>)}</ul>
      <AffiliateButton href={product.affiliateUrl} />
    </article>
  );
}

export function CategoryCard({ slug, name, desc }: { slug: string; name: string; desc: string }) {
  return (
    <article className="card">
      <h3><Link href={`/${slug}`}>{name}</Link></h3>
      <p>{desc}</p>
    </article>
  );
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  return (
    <section>
      <h2>FAQ</h2>
      {faqs.map((faq) => (
        <details key={faq.question} className="faq-item">
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </section>
  );
}
