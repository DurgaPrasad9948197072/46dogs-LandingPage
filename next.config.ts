import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root — other lockfiles exist higher up the tree.
  turbopack: { root: __dirname },
  poweredByHeader: false,
  compress: true,
  // Backstop for the Vercel domain redirects: if 46dogs.com, www.46dogs.com
  // or www.46dogs.org ever reach the app directly, send them to the bare
  // .org host with a 301, keeping the path.
  async redirects() {
    return ["46dogs.com", "www.46dogs.com", "www.46dogs.org"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://46dogs.org/:path*",
      statusCode: 301 as const,
    }));
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
