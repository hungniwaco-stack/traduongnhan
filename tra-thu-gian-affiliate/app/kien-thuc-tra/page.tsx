import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
export const metadata: Metadata = {
  title: "Kiến thức trà | Blog trà thư giãn",
  description: "Kiến thức trà thảo mộc cơ bản: thành phần, cách pha, cách chọn phù hợp."
};
export default function Page() { return <CategoryPage slug="kien-thuc-tra" title="Kiến thức trà" desc="Nền tảng để chọn trà đúng nhu cầu và cách dùng." />; }
