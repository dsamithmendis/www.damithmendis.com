"use client";

import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withBasePath = (path: string) =>
  `${basePath}${path.startsWith("/") ? "" : "/"}${path}`;

export default function NotFoundPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black">
      <h1 className="text-6xl font-bold text-[#D3E97A]">404</h1>
      <p className="text-lg mt-2 text-neutral-400">Page not found</p>
      <Link
        href={withBasePath("/")}
        className="mt-4 flex items-center text-[#D3E97A] uppercase"
      >
        <i className="ri-arrow-left-line text-xl"></i>Back
      </Link>
    </div>
  );
}
