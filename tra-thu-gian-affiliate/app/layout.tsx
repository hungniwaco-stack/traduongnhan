import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/LayoutBits";

export const metadata: Metadata = {
  title: "Trà thư giãn & healthy lifestyle cho dân văn phòng",
  description: "Blog affiliate trà thảo mộc: chia sẻ review thực tế, routine nhẹ nhàng và gợi ý sản phẩm phù hợp."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
