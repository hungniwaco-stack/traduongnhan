import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ | Trà Thư Giãn",
  description: "Thông tin liên hệ và hợp tác nội dung với Trà Thư Giãn."
};

export default function ContactPage() {
  return (
    <section className="article">
      <h1>Liên hệ</h1>
      <p>Nếu bạn cần góp ý nội dung hoặc hợp tác media, vui lòng liên hệ qua email:</p>
      <p><strong>hatmuadem@gmail.com</strong></p>
      <p>Chúng tôi thường phản hồi trong 24-48 giờ làm việc.</p>
    </section>
  );
}

