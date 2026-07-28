import type { Metadata } from "next";
import { products } from "@/data/site";
import { Breadcrumb } from "@/components/LayoutBits";
import { ProductCard } from "@/components/CardSet";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Danh mục sản phẩm trà dưỡng nhan | Trà Dưỡng Nhan",
  description: "Toàn bộ sản phẩm trà dưỡng nhan đang được gợi ý: thành phần, giá tham khảo và link mua trên Shopee.",
  path: "/san-pham"
});

export default function ProductCatalogPage() {
  const url = "https://traduongnhan.shop/san-pham/";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: "https://traduongnhan.shop/" },
      { "@type": "ListItem", position: 2, name: "Danh mục sản phẩm", item: url }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://traduongnhan.shop/san-pham/${product.id}/`,
      name: product.name
    }))
  };

  return (
    <section className="article">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />

      <Breadcrumb items={[{ label: "Trang chủ", href: "/" }, { label: "Danh mục sản phẩm" }]} />

      <h1>Danh mục sản phẩm trà dưỡng nhan</h1>
      <p>Toàn bộ {products.length} sản phẩm trà dưỡng nhan đang được gợi ý trên trang, kèm giá tham khảo và link mua trên Shopee. Một số link là link affiliate — giá không đổi cho bạn.</p>

      <div className="grid grid-3">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}
