import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Liên hệ | Trà Dưỡng Nhan",
  description: "Thông tin liên hệ và hợp tác nội dung với Trà Dưỡng Nhan.",
  path: "/lien-he"
});

export default function ContactPage() {
  return (
    <section className="article">
      <h1>Liên hệ</h1>
      <p>Nếu bạn cần góp ý nội dung hoặc hợp tác media, vui lòng liên hệ qua email:</p>
      <p><strong>hatmuadem@gmail.com</strong></p>
      <p>Thời gian phản hồi thường trong 24-48 giờ làm việc.</p>
    </section>
  );
}
