import type { Metadata } from "next";
import CategoryView from "../../../components/work/CategoryView";

export const metadata: Metadata = {
  title: "Website Design - Omnidot",
  description:
    "Website design and development work from the Omnidot studio: storefronts, booking flows, product interfaces and portfolios.",
};

export default function WebDesignWorkPage() {
  return <CategoryView kind="website" />;
}
