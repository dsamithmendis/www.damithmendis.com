import NotFoundPage from "@/components/pages/not-found";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found | Damith Mendis",
  icons: {
    icon: "/icons/web-icon.png",
    apple: "/icons/web-icon.png",
  },
};

export default function NotFound() {
  return (
    <>
      <NotFoundPage />
    </>
  );
}
