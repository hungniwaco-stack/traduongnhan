import { posts } from "@/data/site";
import { ArticleCard } from "./CardSet";
import { Breadcrumb } from "./LayoutBits";

export default function CategoryPage({ slug, title, desc }: { slug: string; title: string; desc: string }) {
  const filtered = posts.filter((p) => p.category === slug);
  return (
    <div className="section">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: title }]} />
      <h1>{title}</h1>
      <p>{desc}</p>
      <div className="grid grid-2">{filtered.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
    </div>
  );
}
