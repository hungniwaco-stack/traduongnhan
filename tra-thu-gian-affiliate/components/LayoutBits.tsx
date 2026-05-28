import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <Link href="/" className="brand" aria-label="Trà Thư Giãn">
          <span className="brand-logo" aria-hidden="true">🍃</span>
          <span className="brand-text">TRÀ THƯ GIÃN</span>
        </Link>
        <nav>
          <Link href="/">Trang chủ</Link>
          <Link href="/tra-ngu-ngon">Trà ngủ ngon</Link>
          <Link href="/giam-stress">Giảm stress</Link>
          <Link href="/review-tra">Review trà</Link>
          <Link href="/healthy-lifestyle">Healthy Lifestyle</Link>
          <Link href="/kien-thuc-tra">Kiến thức trà</Link>
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
          <p>Blog trà thư giãn dành cho dân văn phòng, ưu tiên nội dung hữu ích và trải nghiệm thực tế.</p>
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
