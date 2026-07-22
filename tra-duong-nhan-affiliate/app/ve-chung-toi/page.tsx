import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Về chúng tôi | Trà Dưỡng Nhan",
  description: "Giới thiệu dự án Trà Dưỡng Nhan, tiêu chí biên tập và nguyên tắc minh bạch nội dung.",
  path: "/ve-chung-toi"
});

export default function AboutPage() {
  return (
    <section className="article">
      <h1>Về chúng tôi</h1>
      <p>Trà Dưỡng Nhan là blog chia sẻ trải nghiệm trà thảo mộc và routine làm đẹp bền vững cho người bận rộn.</p>

      <h2>Tiêu chí biên tập</h2>
      <ul>
        <li>Ưu tiên trải nghiệm thực tế, dễ áp dụng cho người bận rộn.</li>
        <li>Không đưa claim y tế quá mức như chữa bệnh hoặc cam kết hiệu quả tuyệt đối.</li>
        <li>Dùng ngôn ngữ cẩn trọng: hỗ trợ, có thể, thường được dùng.</li>
      </ul>

      <h2>Minh bạch affiliate</h2>
      <p>Một số liên kết trên website là link affiliate Shopee. Chúng tôi có thể nhận hoa hồng nhỏ nếu bạn mua qua link, không làm tăng giá sản phẩm.</p>

      <h2>Phạm vi nội dung</h2>
      <p>Nội dung trên website chỉ mang tính tham khảo thông tin, không thay thế tư vấn y tế chuyên môn.</p>

      <p><strong>Cập nhật lần cuối:</strong> 30/05/2026</p>
    </section>
  );
}
