import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Thanh lọc cơ thể bằng trà thảo mộc",
  description: "Gợi ý lộ trình thanh lọc nhẹ nhàng bằng trà thảo mộc, phù hợp người mới và dân văn phòng.",
  alternates: { canonical: "/thanh-loc-co-the/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="thanh-loc-co-the"
      title="Thanh lọc cơ thể"
      desc="Bài viết về thanh lọc cơ thể nhẹ nhàng bằng trà thảo mộc và thói quen tốt."
    />
  );
}
