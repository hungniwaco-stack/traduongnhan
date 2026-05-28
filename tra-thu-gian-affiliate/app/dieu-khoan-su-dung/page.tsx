import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng | Trà Thư Giãn",
  description: "Điều khoản sử dụng nội dung trên website Trà Thư Giãn."
};

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

