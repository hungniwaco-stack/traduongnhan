import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Review trà thảo mộc: bài nào hợp nhu cầu của bạn?",
  description: "Đánh giá thực tế trà thảo mộc cho dân văn phòng: hương vị, cách pha, đối tượng phù hợp và lưu ý trước khi mua.",
  alternates: { canonical: "/review-tra/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="review-tra"
      title="Review trà"
      desc="Review trà thảo mộc thực tế: vị trà, độ tiện, nhóm phù hợp và checklist trước khi chọn."
    />
  );
}
