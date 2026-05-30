import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Giảm stress văn phòng: bắt đầu từ đồ uống mỗi ngày",
  description: "3 thay đổi nhỏ giúp giảm stress khi làm việc: thay đồ uống ngọt, chọn trà phù hợp và giữ năng lượng ổn định cả ngày."
};

export default function Page() {
  return (
    <CategoryPage
      slug="giam-stress"
      title="Giảm stress"
      desc="Giảm stress văn phòng với đồ uống lành mạnh và thói quen đơn giản, dễ duy trì mỗi ngày."
    />
  );
}
