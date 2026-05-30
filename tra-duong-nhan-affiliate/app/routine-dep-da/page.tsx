import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";

export const metadata: Metadata = {
  title: "Routine đẹp da với trà dưỡng nhan",
  description: "Lộ trình uống trà dưỡng nhan và thói quen sinh hoạt giúp da khỏe, sáng và dễ duy trì.",
  alternates: { canonical: "/routine-dep-da/" }
};

export default function Page() {
  return (
    <CategoryPage
      slug="routine-dep-da"
      title="Routine đẹp da"
      desc="Routine uống trà dưỡng nhan đơn giản, phù hợp người bận rộn."
    />
  );
}
