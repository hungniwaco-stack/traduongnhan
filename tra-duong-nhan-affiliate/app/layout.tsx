import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer, Header } from "@/components/LayoutBits";

export const metadata: Metadata = {
  metadataBase: new URL("https://traduongnhan.shop"),
  title: "Trà dưỡng nhan | Review và routine làm đẹp từ trà",
  description: "Blog affiliate trà dưỡng nhan: review thực tế, kiến thức thành phần và routine chăm sóc sắc đẹp mỗi ngày.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Trà Dưỡng Nhan",
    title: "Trà dưỡng nhan | Review và routine làm đẹp từ trà",
    description: "Gợi ý trà dưỡng nhan, bài review thực tế và routine làm đẹp nhẹ nhàng mỗi ngày.",
    url: "https://traduongnhan.shop"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="vi">
      <body>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
