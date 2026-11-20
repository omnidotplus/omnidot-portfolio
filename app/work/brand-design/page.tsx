import type { Metadata } from "next";
import CategoryView from "../../../components/work/CategoryView";

export const metadata: Metadata = {
  title: "Brand Identity - Omnidot",
  description:
    "Brand identity work from the Omnidot studio: marks, palettes, fleet livery, stationery and campaign systems.",
};

export default function BrandDesignWorkPage() {
  return <CategoryView kind="brand" />;
}
