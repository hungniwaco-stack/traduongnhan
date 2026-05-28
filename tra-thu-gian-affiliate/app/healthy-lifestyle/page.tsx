import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
export const metadata: Metadata = {
  title: "Healthy Lifestyle | Blog trà thư giãn",
  description: "Healthy routine buổi tối và lối sống nhẹ nhàng cho dân văn phòng."
};
export default function Page() { return <CategoryPage slug="healthy-lifestyle" title="Healthy Lifestyle" desc="Routine dễ áp dụng để ngủ tốt và cân bằng hơn." />; }
