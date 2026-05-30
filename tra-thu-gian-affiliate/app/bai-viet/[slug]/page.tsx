import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categoryLabelMap, posts, products } from "@/data/site";
import { Breadcrumb, DisclaimerBox, TableOfContents } from "@/components/LayoutBits";
import { FAQSection, ProductCard } from "@/components/CardSet";
import JsonLd from "@/components/JsonLd";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Bài viết không tồn tại" };
  return {
    title: `${post.title} | Trà Thư Giãn`,
    description: post.description,
    alternates: { canonical: `/bai-viet/${post.slug}/` }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const productForPost = post.productId ? products.find((p) => p.id === post.productId) : products[0];

  const relatedPosts = post.relatedSlugs && post.relatedSlugs.length > 0
    ? post.relatedSlugs
        .map((slug) => posts.find((item) => item.slug === slug))
        .filter((item): item is (typeof posts)[number] => Boolean(item))
        .slice(0, 3)
    : posts.filter((item) => item.category === post.category && item.slug !== post.slug).slice(0, 3);
  const isReview = post.category === "review-tra";
  const updatedAt = "28/05/2026";
  const [day, month, year] = updatedAt.split("/");
  const updatedAtIso = `${year}-${month}-${day}`;
  const url = `https://trathugian.shop/bai-viet/${post.slug}/`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://trathugian.shop/" },
      { "@type": "ListItem", position: 2, name: categoryLabelMap[post.category], item: `https://trathugian.shop/${post.category}/` },
      { "@type": "ListItem", position: 3, name: post.title, item: url }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    inLanguage: "vi-VN",
    mainEntityOfPage: url,
    dateModified: updatedAtIso,
    author: { "@type": "Organization", name: "Trà Thư Giãn" },
    publisher: { "@type": "Organization", name: "Trà Thư Giãn" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  const productSchema = isReview && productForPost
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: productForPost.name,
        description: productForPost.shortDesc,
        image: `https://trathugian.shop${productForPost.image}`,
        category: "Trà thảo mộc",
        brand: { "@type": "Brand", name: "Trà Thư Giãn" },
        url,
        offers: {
          "@type": "Offer",
          url: productForPost.affiliateUrl,
          availability: "https://schema.org/InStock",
          priceCurrency: "VND"
        }
      }
    : null;

  return (
    <article className="article">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      {productSchema ? <JsonLd data={productSchema} /> : null}

      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: categoryLabelMap[post.category], href: `/${post.category}` }, { label: post.title }]} />
      <h1>{post.title}</h1>
      <p>{post.intro}</p>

      <div className="meta-row">
        <p><strong>Tác giả:</strong> Ban biên tập Trà Thư Giãn</p>
        <p><strong>Cập nhật:</strong> {updatedAt}</p>
      </div>

      <section className="card">
        <h2>Tóm tắt nhanh</h2>
        <ul>{(post.quickSummary ?? [post.description]).map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="fit-grid">
        <div className="card">
          <h2>Phù hợp với ai?</h2>
          <ul>{(post.bestFor ?? ["Người cần đồ uống thư giãn nhẹ nhàng.", "Dân văn phòng muốn routine tối ổn định."]).map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div className="card">
          <h2>Ai nên cân nhắc thêm?</h2>
          <ul>{(post.notFor ?? ["Người cần tư vấn y tế chuyên môn cụ thể.", "Người không phù hợp với thành phần thảo mộc nhất định."]).map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <TableOfContents items={post.toc} />
      {isReview ? (
        <>
          <section className="card">
            <h2>So sánh nhanh</h2>
            <ul>
              <li><strong>Hương vị:</strong> {post.sections[0]?.points?.[0] ?? "Dịu, dễ uống."}</li>
              <li><strong>Độ tiện:</strong> {post.sections[1]?.points?.[0] ?? "Phù hợp người bận rộn."}</li>
              <li><strong>Nhóm phù hợp:</strong> {(post.bestFor?.[0] ?? "Dân văn phòng cần thư giãn nhẹ.").replace(".", "")}</li>
            </ul>
          </section>
          <section className="card">
            <h2>Checklist quyết định mua</h2>
            <ul>
              <li>Bạn ưu tiên trà vị dịu, dễ duy trì hằng ngày.</li>
              <li>Bạn có thể dành 3-8 phút để pha trà đúng cách.</li>
              <li>Bạn đã kiểm tra thành phần để tránh dị ứng cá nhân.</li>
              <li>Bạn dùng trà như giải pháp hỗ trợ thói quen, không thay thế tư vấn y tế.</li>
            </ul>
          </section>
        </>
      ) : null}

      {post.sections.map((section, index) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          <h3>Gợi ý triển khai</h3>
          <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
          {index === 1 ? <DisclaimerBox /> : null}
        </section>
      ))}

      <section>
        <h2>Box sản phẩm gợi ý</h2>
        {productForPost ? <ProductCard product={productForPost} /> : null}
      </section>

      <FAQSection faqs={post.faqs} />

      {relatedPosts.length > 0 ? (
        <section>
          <h2>Đọc tiếp</h2>
          <ul>
            {relatedPosts.map((item) => (
              <li key={item.slug}>
                <Link href={`/bai-viet/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}
