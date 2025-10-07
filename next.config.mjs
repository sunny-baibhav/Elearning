/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL || !!process.env.VERCEL_URL;
const isGitHubPages = isProd && process.env.GITHUB_ACTIONS && !isVercel;

// Use GitHub Pages-style config ONLY when building for GitHub Pages
const useStaticExport = isGitHubPages;

const nextConfig = {
  basePath: useStaticExport ? "/E-learning" : "",
  assetPrefix: useStaticExport ? "/E-learning/" : "",
  ...(useStaticExport ? { output: "export", images: { unoptimized: true } } : {}),
};

export default nextConfig;