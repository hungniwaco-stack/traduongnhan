import type { Metadata } from "next";
import AffiliateButton from "@/components/AffiliateButton";
import { FAQSection } from "@/components/CardSet";
import { Breadcrumb, DisclaimerBox } from "@/components/LayoutBits";
import JsonLd from "@/components/JsonLd";
import { products } from "@/data/site";

const product = products.find((p) => p.id === "tam-sen-say-kho");

export const metadata: Metadata = {
  title: "Review Trà Tâm Sen Sấy Khô Giúp Ngủ Ngon Thanh Nhiệt",
  description: "Review thực tế trà tâm sen sấy khô: công dụng, thành phần, cách pha và lưu ý trước khi dùng."
};

export default function ReviewPage() {
  if (!product) return null;
  const url = "https://trathugian.shop/review/tra-tam-sen-say-kho-giup-ngu-ngon-thanh-nhiet/";
  const faqItems = [
    { question: "Trà tâm sen có đắng không?", answer: "Thường có vị đắng nhẹ, có thể pha loãng nếu mới bắt đầu." },
    { question: "Nên dùng bao lâu để theo dõi hiệu quả?", answer: "Bạn có thể theo dõi thói quen trong 2-3 tuần để đánh giá mức phù hợp." },
    { question: "Có thể dùng chung với routine tối không?", answer: "Có, trà tâm sen thường hợp khi kết hợp giãn cơ nhẹ và giảm màn hình." }
  ];
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://trathugian.shop/" },
      { "@type": "ListItem", position: 2, name: "Review trà", item: "https://trathugian.shop/review-tra/" },
      { "@type": "ListItem", position: 3, name: product.name, item: url }
    ]
  };
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortDesc,
    brand: { "@type": "Brand", name: "Trà Thư Giãn" },
    offers: {
      "@type": "Offer",
      url: product.affiliateUrl,
      priceCurrency: "VND",
      availability: "https://schema.org/InStock"
    }
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  return (
    <article className="article">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Review trà", href: "/review-tra" }, { label: product.name }]} />
      <h1>{product.name}</h1>
      <p>Trà tâm sen sấy khô là dòng trà thảo mộc thường được dùng vào buổi tối để hỗ trợ thư giãn và tạo nhịp nghỉ ngơi nhẹ nhàng sau ngày làm việc dài.</p>

      <h2>Sản phẩm là gì?</h2>
      <p>{product.shortDesc}</p>

      <h2>Công dụng nổi bật</h2>
      <ul>{product.benefits.map((b) => <li key={b}>{b}</li>)}</ul>

      <h2>Thành phần chính</h2>
      <p>{product.ingredients}</p>

      <h2>Phù hợp với ai?</h2>
      <p>{product.whoFor}</p>

      <h2>Cách pha</h2>
      <p>{product.howToBrew}</p>

      <h2>Review cảm nhận</h2>
      <p>{product.experience}</p>

      <h2>Ai nên cân nhắc trước khi dùng?</h2>
      <p>{product.caution}</p>

      <h2>Mua ở đâu?</h2>
      <p>Ưu tiên gian hàng uy tín, nhiều đánh giá thật và có thông tin nguồn gốc rõ ràng.</p>
      <AffiliateButton href={product.affiliateUrl} />

      <FAQSection
        faqs={faqItems}
      />
      <DisclaimerBox />
    </article>
  );
}
