import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Trà dưỡng nhan: cách chọn và lịch uống cho người mới",
  description: "Chuyên mục trà dưỡng nhan cho người mới: gợi ý công thức dễ uống, lịch dùng và lưu ý quan trọng.",
  alternates: { canonical: "/tra-duong-nhan/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="tra-duong-nhan"
      title="Trà dưỡng nhan"
      desc="Gợi ý trà dưỡng nhan dễ uống, dễ duy trì cho người mới bắt đầu."
    />
  );
}
