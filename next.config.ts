import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // <--- Agregas esta línea
  images: {
    unoptimized: true, // <--- Requerido si usas 'export' estático sin servidor
    remotePatterns: [
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "www.loom.com" },
    ],
  },
};

export default nextConfig;
