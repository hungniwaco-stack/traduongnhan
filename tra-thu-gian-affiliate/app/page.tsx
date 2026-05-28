import type { Metadata } from "next";
import Link from "next/link";
import { categories, posts, products } from "@/data/site";
import { ArticleCard, CategoryCard, ProductCard } from "@/components/CardSet";

export const metadata: Metadata = {
  title: "Trang chủ | Trà thư giãn cho dân văn phòng",
  description: "Khám phá trà ngủ ngon, review trà mới và healthy routine nhẹ nhàng cho dân văn phòng."
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-banner">
        <p className="hero-kicker">Tea & Calm Living</p>
        <h1>Trà thư giãn & healthy lifestyle cho dân văn phòng</h1>
        <p>Gợi ý các loại trà thảo mộc giúp bạn thư giãn, ngủ ngon hơn và xây dựng thói quen sống nhẹ nhàng mỗi ngày.</p>
        <Link className="btn btn-primary" href="/tra-ngu-ngon">Khám phá trà ngủ ngon</Link>
        <Link className="btn btn-secondary" href="/review-tra">Xem review trà</Link>
      </section>

      <section className="section">
        <div className="mini-banner card">
          <div>
            <p className="mini-kicker">Gợi ý tuần này</p>
            <h2>Top 6 loại trà dễ bắt đầu cho dân văn phòng</h2>
            <p>Ưu tiên dễ uống, dễ pha và phù hợp routine buổi tối nhẹ nhàng.</p>
          </div>
          <Link className="btn btn-primary" href="/bai-viet/5-loai-tra-cho-dan-van-phong-de-uong-ban-ngay">Xem danh sách</Link>
        </div>
      </section>

      <section className="section">
        <h2>Bài viết nổi bật về trà ngủ ngon</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "tra-ngu-ngon").slice(0, 2).map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Review trà mới nhất</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "review-tra").map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Trà cho dân văn phòng</h2>
        <div className="grid grid-3">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="section">
        <h2>Healthy routine buổi tối</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "healthy-lifestyle").map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Top sản phẩm trà được gợi ý</h2>
        <div className="grid grid-2">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="section">
        <h2>Chuyên mục chính</h2>
        <div className="grid grid-3">{categories.map((cat) => <CategoryCard key={cat.slug} slug={cat.slug} name={cat.name} desc={cat.desc} />)}</div>
      </section>
    </>
  );
}
