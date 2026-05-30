import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Review trà | Blog trà thư giãn",
  description: "Review trà thảo mộc cho dân văn phòng: đánh giá thực tế hương vị, độ tiện lợi và đối tượng phù hợp."
};

export default function Page() {
  return (
    <CategoryPage
      slug="review-tra"
      title="Review trà"
      desc="Review trà thảo mộc cho dân văn phòng: đánh giá hương vị, độ tiện lợi và đối tượng phù hợp."
    />
  );
}
