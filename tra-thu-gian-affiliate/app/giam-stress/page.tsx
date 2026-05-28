import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
export const metadata: Metadata = {
  title: "Giảm stress | Blog trà thư giãn",
  description: "Chuyên mục giảm stress cho dân văn phòng bằng đồ uống lành mạnh và routine đơn giản."
};
export default function Page() { return <CategoryPage slug="giam-stress" title="Giảm stress" desc="Mẹo giảm căng thẳng để làm việc bền vững hơn." />; }
