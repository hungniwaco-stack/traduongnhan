import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Kiến thức dưỡng nhan: thành phần, cách dùng, lưu ý",
  description: "Kiến thức nền về trà dưỡng nhan: thành phần phổ biến, cách uống đúng và lưu ý an toàn.",
  alternates: { canonical: "/kien-thuc-duong-nhan/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="kien-thuc-duong-nhan"
      title="Kiến thức dưỡng nhan"
      desc="Kiến thức nền để chọn trà dưỡng nhan phù hợp với nhu cầu và cơ địa."
    />
  );
}
