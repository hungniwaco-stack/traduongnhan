import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách affiliate | Trà Thư Giãn",
  description: "Chính sách minh bạch affiliate của Trà Thư Giãn và cam kết biên tập trung thực."
};

export default function AffiliatePolicyPage() {
  return (
    <section className="article">
      <h1>Chính sách affiliate</h1>
      <p>Website có sử dụng liên kết affiliate từ sàn thương mại điện tử như Shopee.</p>
      <ul>
        <li>Chúng tôi có thể nhận hoa hồng khi bạn mua qua link affiliate.</li>
        <li>Giá sản phẩm không tăng thêm vì việc này.</li>
        <li>Đánh giá sản phẩm vẫn dựa trên tiêu chí nội dung trung thực và hữu ích cho người đọc.</li>
      </ul>
      <p>Nếu có cập nhật lớn về chính sách, nội dung trang này sẽ được chỉnh sửa công khai.</p>
      <p><strong>Cập nhật lần cuối:</strong> 30/05/2026</p>
    </section>
  );
}
