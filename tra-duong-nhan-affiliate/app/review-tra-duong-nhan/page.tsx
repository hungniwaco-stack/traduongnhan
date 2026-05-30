import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Review trà dưỡng nhan: bài nào hợp nhu cầu của bạn?",
  description: "Đánh giá thực tế các dòng trà dưỡng nhan: hương vị, thành phần, cách pha và nhóm phù hợp.",
  alternates: { canonical: "/review-tra-duong-nhan/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="review-tra-duong-nhan"
      title="Review trà dưỡng nhan"
      desc="Review thực tế trà dưỡng nhan: vị trà, độ tiện và đối tượng phù hợp."
    />
  );
}
