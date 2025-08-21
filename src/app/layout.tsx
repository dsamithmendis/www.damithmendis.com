import "@/styles/global.css";
import { Metadata } from "next";
import Favicon from "@/../public/icons/favicon.ico";
import { Macondo } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

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
      <body className={macondo.className}>
        <NextTopLoader
          color="#D3E97A"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #D3E97A/80,0 0 5px #D3E97A/60"
        />
        {children}
      </body>
    </html>
  );
}
