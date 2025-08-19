import HeaderShowcase from "@/components/shared/header-showcase";
import Footer from "@/components/shared/footer";
import Showcase from "@/components/pages/showcase";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "I'm Damith, A Senior 3D Generalist, short filmmaker, and lecturer with over 9 years of experience in 3D animation, architectural visualization, and advertising. I’m passionate about telling powerful stories through 3D visual media, especially those that inspire change and create social impact.",
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
