import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer, Header } from "@/components/LayoutBits";

export const metadata: Metadata = {
  metadataBase: new URL("https://trathugian.shop"),
  title: "Trà thư giãn & healthy lifestyle cho dân văn phòng",
  description: "Blog affiliate trà thảo mộc: chia sẻ review thực tế, routine nhẹ nhàng và gợi ý sản phẩm phù hợp.",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Trà Thư Giãn",
    title: "Trà thư giãn & healthy lifestyle cho dân văn phòng",
    description: "Gợi ý trà thảo mộc, bài review và routine sống nhẹ nhàng cho dân văn phòng.",
    url: "https://trathugian.shop"
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
