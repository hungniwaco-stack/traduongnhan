import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Điều khoản sử dụng | Trà Dưỡng Nhan",
  description: "Điều khoản sử dụng nội dung trên website Trà Dưỡng Nhan.",
  path: "/dieu-khoan-su-dung"
});

export default function TermsPage() {
  return (
    <section className="article">
      <h1>Điều khoản sử dụng</h1>
      <ul>
        <li>Nội dung trên website chỉ nhằm mục đích tham khảo thông tin.</li>
        <li>Không sao chép nguyên văn nội dung để đăng lại khi chưa có sự đồng ý.</li>
        <li>Website không thay thế tư vấn y tế chuyên môn.</li>
      </ul>
    </section>
  );
}
