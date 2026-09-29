import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep old static-site URLs (e.g. /about.html) working.
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      ...["about", "academics", "admission", "gallery", "contact"].map((page) => ({
        source: `/${page}.html`,
        destination: `/${page}`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
