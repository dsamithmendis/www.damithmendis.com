import HomePage from "@/components/pages/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Portfolio | Damith Mendis',
  icons: {
    icon: '/icons/web-icon.png',
    apple: '/icons/web-icon.png',
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
