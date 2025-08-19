import "@/styles/global.css";
import { Metadata } from "next";
import Favicon from "@/../public//icons/favicon.ico";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Damith Mendis",
    template: "%s | Damith Mendis",
  },
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
