import Link from "next/link";
import { withBasePath } from "@/lib/withBasePath";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Trà Dưỡng Nhan">
          <img className="brand-image" src={withBasePath("/images/brand/logo.png")} alt="Logo Trà Dưỡng Nhan" width={240} height={74} loading="eager" decoding="async" />
          <span className="brand-label">TRÀ DƯỠNG NHAN</span>
        </Link>
        <nav>
          <Link href="/">Trang chủ</Link>
          <Link href="/tra-duong-nhan">Trà dưỡng nhan</Link>
          <Link href="/review-tra-duong-nhan">Review trà dưỡng nhan</Link>
          <Link href="/routine-dep-da">Routine đẹp da</Link>
          <Link href="/thanh-loc-co-the">Thanh lọc cơ thể</Link>
          <Link href="/kien-thuc-duong-nhan">Kiến thức dưỡng nhan</Link>
          <Link href="/san-pham">Danh mục sản phẩm</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container grid grid-3">
        <div>
          <h3>Về chúng tôi</h3>
          <p>Blog trà dưỡng nhan chia sẻ trải nghiệm thực tế, kiến thức chọn trà và routine chăm sóc sắc đẹp bền vững.</p>
        </div>
        <div>
          <h3>Thông tin</h3>
          <ul>
            <li><Link href="/ve-chung-toi">Về chúng tôi</Link></li>
            <li><Link href="/chinh-sach-affiliate">Chính sách affiliate</Link></li>
            <li><Link href="/lien-he">Liên hệ</Link></li>
            <li><Link href="/dieu-khoan-su-dung">Điều khoản sử dụng</Link></li>
          </ul>
        </div>
        <div>
          <h3>Disclaimer sức khỏe</h3>
          <p>Nội dung trên website chỉ mang tính tham khảo, không thay thế tư vấn y tế chuyên môn.</p>
          <p>Một số liên kết là affiliate và có thể mang lại hoa hồng nhỏ cho đội ngũ biên tập.</p>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, i) => (
        <span key={item.label}>
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
          {i < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}

export function TableOfContents({ items }: { items: string[] }) {
  return (
    <aside className="toc">
      <h2>Mục lục</h2>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
    </aside>
  );
}

export function DisclaimerBox() {
  return (
    <div className="disclaimer-box">
      Nội dung trên website chỉ mang tính tham khảo, không thay thế tư vấn y tế chuyên môn.
    </div>
  );
}

