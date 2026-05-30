import type { Metadata } from "next";
import Link from "next/link";
import { categories, posts, products } from "@/data/site";
import { ArticleCard, CategoryCard, ProductCard } from "@/components/CardSet";

export const metadata: Metadata = {
  title: "Trang chủ | Trà dưỡng nhan",
  description: "Khám phá trà dưỡng nhan, bài review thực tế và routine chăm sóc sắc đẹp bền vững.",
  alternates: { canonical: "/" }
};

export default function HomePage() {
  return (
    <>
      <section className="hero hero-banner">
        <p className="hero-kicker">Tea & Beauty Ritual</p>
        <h1>Trà dưỡng nhan và routine làm đẹp mỗi ngày</h1>
        <p>Gợi ý các dòng trà dưỡng nhan dễ bắt đầu, cách uống đúng thời điểm và thói quen chăm sóc sắc đẹp bền vững.</p>
        <Link className="btn btn-primary" href="/tra-duong-nhan">Khám phá trà dưỡng nhan</Link>
        <Link className="btn btn-secondary" href="/review-tra-duong-nhan">Xem review trà</Link>
      </section>

      <section className="section">
        <div className="mini-banner card">
          <div>
            <p className="mini-kicker">Gợi ý tuần này</p>
            <h2>Top 6 công thức trà dưỡng nhan dễ bắt đầu</h2>
            <p>Ưu tiên dễ uống, dễ pha và phù hợp routine làm đẹp mỗi ngày.</p>
          </div>
          <Link className="btn btn-primary" href="/bai-viet/6-cong-thuc-tra-duong-nhan-de-uong-moi-ngay">Xem danh sách</Link>
        </div>
      </section>

      <section className="section">
        <h2>Cam kết minh bạch</h2>
        <div className="grid grid-3">
          <article className="card trust-card">
            <h3>Đánh giá thực tế</h3>
            <p>Nội dung review tập trung vào trải nghiệm sử dụng và độ phù hợp theo nhu cầu.</p>
          </article>
          <article className="card trust-card">
            <h3>Affiliate minh bạch</h3>
            <p>Một số liên kết là affiliate. Giá không đổi và chúng tôi luôn ưu tiên nội dung hữu ích.</p>
          </article>
          <article className="card trust-card">
            <h3>Kiểm duyệt cập nhật</h3>
            <p>Thông tin giá và link được rà soát định kỳ để hạn chế link lỗi hoặc sai ưu đãi.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Bài viết nổi bật về trà dưỡng nhan</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "tra-duong-nhan").slice(0, 2).map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Review trà dưỡng nhan mới nhất</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "review-tra-duong-nhan").map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Trà cho dân văn phòng</h2>
        <div className="grid grid-3">{products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="section">
        <h2>Routine đẹp da dễ duy trì</h2>
        <div className="grid grid-2">{posts.filter((p) => p.category === "routine-dep-da").map((p) => <ArticleCard key={p.slug} post={p} />)}</div>
      </section>
      <section className="section">
        <h2>Top sản phẩm trà được gợi ý</h2>
        <div className="grid grid-2">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>

      <section className="section">
        <h2>Đánh giá từ người dùng</h2>
        <div className="grid grid-3">
          <article className="card quote-card">
            <p>“Mình chọn theo checklist và thấy dễ duy trì hơn hẳn, không còn mua theo cảm tính.”</p>
            <strong>Lan, 29 tuổi</strong>
          </article>
          <article className="card quote-card">
            <p>“Phần review có nêu rõ ai phù hợp ai không, nên đỡ tốn tiền thử sai.”</p>
            <strong>Minh, 33 tuổi</strong>
          </article>
          <article className="card quote-card">
            <p>“Mình thích vì bài viết ngắn gọn, có lộ trình uống theo ngày rất dễ làm theo.”</p>
            <strong>Thảo, 26 tuổi</strong>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Chuyên mục chính</h2>
        <div className="grid grid-3">{categories.map((cat) => <CategoryCard key={cat.slug} slug={cat.slug} name={cat.name} desc={cat.desc} />)}</div>
      </section>

      <section className="section">
        <h2>Cụm nội dung theo mục tiêu</h2>
        <div className="grid grid-3">
          <article className="card">
            <h3><Link href="/bai-viet/tra-duong-nhan-cho-nguoi-moi-nen-bat-dau-tu-dau">Cụm bắt đầu trà dưỡng nhan</Link></h3>
            <p>Bắt đầu từ bài trụ cột, sau đó đi sang lịch uống và review sản phẩm phù hợp.</p>
          </article>
          <article className="card">
            <h3><Link href="/bai-viet/thanh-loc-co-the-bang-tra-thao-moc-7-ngay">Cụm thanh lọc cơ thể 7 ngày</Link></h3>
            <p>Tập trung thay đổi đồ uống hằng ngày, kết nối sang trà dễ uống và bài review ứng dụng thực tế.</p>
          </article>
          <article className="card">
            <h3><Link href="/bai-viet/kien-thuc-tra-duong-nhan-thanh-phan-va-luu-y">Cụm kiến thức dưỡng nhan</Link></h3>
            <p>Nắm nền tảng chọn trà, rồi đi vào các bài review để chọn đúng sản phẩm theo nhu cầu.</p>
          </article>
        </div>
      </section>
    </>
  );
}
