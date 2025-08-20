import "@/styles/global.css";
import { Metadata } from "next";
import Favicon from "@/../public/icons/favicon.ico";
import { Macondo } from "next/font/google";

const macondo = Macondo({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Damith Mendis",
    template: "%s | Damith Mendis",
  },
  icons: {
    icon: Favicon.src,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={macondo.className}>{children}</body>
    </html>
  );
}
