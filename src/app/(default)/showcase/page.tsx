import HeaderShowcase from "@/components/shared/header-showcase";
import Footer from "@/components/shared/footer";
import Showcase from "@/components/pages/showcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase | Damith Mendis",
  icons: {
    icon: "/icons/web-icon.png",
    apple: "/icons/web-icon.png",
  },
};

export default function ShowcasePage() {
  return (
    <>
      <HeaderShowcase />
      <Showcase />
      <Footer />
    </>
  );
}
