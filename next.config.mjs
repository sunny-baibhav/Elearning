/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL; // true on Vercel deployments

// Use GitHub Pages-style config ONLY when building for static hosting (not on Vercel)
const useStaticExport = isProd && !isVercel;

const nextConfig = {
  basePath: useStaticExport ? "/E-learning" : "",
  assetPrefix: useStaticExport ? "/E-learning/" : "",
  ...(useStaticExport ? { output: "export", images: { unoptimized: true } } : {}),
};

export default nextConfig;