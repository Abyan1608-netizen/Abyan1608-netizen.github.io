import type { NextConfig } from "next";

// Situs statis: hasil build ada di folder "out" dan bisa dipasang di Cloudflare Pages.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  transpilePackages: ["three"],
};

export default nextConfig;
