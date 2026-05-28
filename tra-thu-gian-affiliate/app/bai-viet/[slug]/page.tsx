import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryLabelMap, posts, products } from "@/data/site";
import { Breadcrumb, DisclaimerBox, TableOfContents } from "@/components/LayoutBits";
import { FAQSection, ProductCard } from "@/components/CardSet";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Bài viết không tồn tại" };
  return { title: `${post.title} | Tra Thu Gian`, description: post.description };
}

export default function BlogPostPage({ params }: Props) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  return (
    <article className="article">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: categoryLabelMap[post.category], href: `/${post.category}` }, { label: post.title }]} />
      <h1>{post.title}</h1>
      <p>{post.intro}</p>
      <TableOfContents items={post.toc} />
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
        <ProductCard product={products[0]} />
      </section>
      <FAQSection faqs={post.faqs} />
    </article>
  );
}
