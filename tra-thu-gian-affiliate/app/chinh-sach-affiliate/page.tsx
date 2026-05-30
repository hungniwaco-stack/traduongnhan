import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách affiliate | Trà Thư Giãn",
  description: "Chính sách minh bạch affiliate của website Trà Thư Giãn."
};

export default function AffiliatePolicyPage() {
  return (
    <section className="article">
      <h1>Chính sách affiliate</h1>
      <p>Website có sử dụng liên kết affiliate từ sàn thương mại điện tử như Shopee.</p>
      <ul>
        <li>Chúng tôi có thể nhận hoa hồng khi bạn mua qua link.</li>
        <li>Giá sản phẩm không tăng thêm vì việc này.</li>
        <li>Chúng tôi vẫn ưu tiên nội dung trung thực và phù hợp nhu cầu người đọc.</li>
      </ul>
    </section>
  );
}
