import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export a static HTML export in `out/` for static hosting
  output: "export",
  // For static exports, disable Next.js image optimization so
  // `next/image` renders as regular `<img>` tags with static paths.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
