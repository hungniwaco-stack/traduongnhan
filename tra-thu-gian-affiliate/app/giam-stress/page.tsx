import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
export const metadata: Metadata = {
  title: "Giảm stress | Blog trà thư giãn",
  description: "Chuyên mục giảm stress văn phòng bằng đồ uống lành mạnh, trà thảo mộc và routine đơn giản."
};
export default function Page() { return <CategoryPage slug="giam-stress" title="Giảm stress" desc="Giảm stress văn phòng với đồ uống lành mạnh và thói quen giúp làm việc bền vững hơn." />; }
