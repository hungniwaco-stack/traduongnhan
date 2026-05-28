import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
export const metadata: Metadata = {
  title: "Trà ngủ ngon | Blog trà thư giãn",
  description: "Chuyên mục trà ngủ ngon: gợi ý trà thảo mộc hỗ trợ thư giãn và thói quen trước khi ngủ."
};
export default function Page() { return <CategoryPage slug="tra-ngu-ngon" title="Trà ngủ ngon" desc="Các bài viết chọn trà và thói quen tối nhẹ nhàng." />; }
