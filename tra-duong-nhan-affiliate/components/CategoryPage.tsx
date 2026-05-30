import { posts } from "@/data/site";
import Link from "next/link";
import { ArticleCard } from "./CardSet";
import { Breadcrumb } from "./LayoutBits";

export default function CategoryPage({ slug, title, desc }: { slug: string; title: string; desc: string }) {
  const filtered = posts.filter((p) => p.category === slug);
  const clusterMap: Record<string, { hubSlug: string; spokeSlugs: string[]; relatedCats: { label: string; href: string }[] }> = {
    "tra-duong-nhan": {
      hubSlug: "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau",
      spokeSlugs: [
        "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay",
        "lich-uong-tra-duong-nhan-sang-trua-toi",
        "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam"
      ],
      relatedCats: [
        { label: "Review trà dưỡng nhan", href: "/review-tra-duong-nhan" },
        { label: "Routine đẹp da", href: "/routine-dep-da" }
      ]
    },
    "thanh-loc-co-the": {
      hubSlug: "thanh-loc-co-the-bang-tra-thao-moc-7-ngay",
      spokeSlugs: [
        "uong-tra-duong-nhan-luc-nao-la-tot-nhat",
        "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay",
        "review-tra-gao-lut-hoa-hong-co-hop-thanh-loc"
      ],
      relatedCats: [
        { label: "Trà dưỡng nhan", href: "/tra-duong-nhan" },
        { label: "Kiến thức dưỡng nhan", href: "/kien-thuc-duong-nhan" }
      ]
    },
    "review-tra-duong-nhan": {
      hubSlug: "6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay",
      spokeSlugs: [
        "review-tra-goji-tao-do-hoa-cuc-co-hop-da-xam",
        "review-tra-hoa-hong-lai-kho-co-thuc-su-dep-da",
        "review-tra-gao-lut-hoa-hong-co-hop-thanh-loc"
      ],
      relatedCats: [
        { label: "Trà dưỡng nhan", href: "/tra-duong-nhan" },
        { label: "Thanh lọc cơ thể", href: "/thanh-loc-co-the" }
      ]
    },
    "routine-dep-da": {
      hubSlug: "routine-uong-tra-duong-nhan-21-ngay-cho-da-sang",
      spokeSlugs: [
        "lich-uong-tra-duong-nhan-sang-trua-toi",
        "uong-tra-duong-nhan-luc-nao-la-tot-nhat",
        "thuc-don-nhe-khi-dung-tra-duong-nhan"
      ],
      relatedCats: [
        { label: "Trà dưỡng nhan", href: "/tra-duong-nhan" },
        { label: "Kiến thức dưỡng nhan", href: "/kien-thuc-duong-nhan" }
      ]
    },
    "kien-thuc-duong-nhan": {
      hubSlug: "kien-thuc-tra-duong-nhan-thanh-phan-va-luu-y",
      spokeSlugs: [
        "uong-tra-duong-nhan-luc-nao-la-tot-nhat",
        "tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau",
        "review-tra-hoa-hong-lai-kho-co-thuc-su-dep-da"
      ],
      relatedCats: [
        { label: "Review trà dưỡng nhan", href: "/review-tra-duong-nhan" },
        { label: "Routine đẹp da", href: "/routine-dep-da" }
      ]
    }
  };
  const cluster = clusterMap[slug];
  const hubPost = cluster ? posts.find((p) => p.slug === cluster.hubSlug) : null;
  const spokePosts = cluster
    ? cluster.spokeSlugs.map((item) => posts.find((p) => p.slug === item)).filter((item): item is (typeof posts)[number] => Boolean(item))
    : [];

  return (
    <div className="section">
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: title }]} />
      <h1>{title}</h1>
      <p>{desc}</p>
      {hubPost ? (
        <section className="card">
          <h2>Bài trụ cột của chuyên mục</h2>
          <h3><Link href={`/bai-viet/${hubPost.slug}`}>{hubPost.title}</Link></h3>
          <p>{hubPost.description}</p>
        </section>
      ) : null}
      {spokePosts.length > 0 ? (
        <section className="card">
          <h2>Lộ trình đọc theo nhu cầu</h2>
          <ul>
            {spokePosts.map((post) => (
              <li key={post.slug}>
                <Link href={`/bai-viet/${post.slug}`}>{post.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {cluster?.relatedCats?.length ? (
        <section className="card">
          <h2>Khám phá cụm liên quan</h2>
          <ul>
            {cluster.relatedCats.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      <div className="grid grid-2">{filtered.map((post) => <ArticleCard key={post.slug} post={post} />)}</div>
    </div>
  );
}
