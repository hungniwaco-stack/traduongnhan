import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
export const metadata: Metadata = {
  title: "Review trà | Blog trà thư giãn",
  description: "Review trà mới nhất với góc nhìn thực tế, ưu tiên trải nghiệm trước affiliate."
};
export default function Page() { return <CategoryPage slug="review-tra" title="Review trà" desc="Đánh giá hương vị, độ tiện lợi và đối tượng phù hợp." />; }
