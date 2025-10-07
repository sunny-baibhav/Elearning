const getImagePrefix = () => {
    // Only use /E-learning/ prefix for GitHub Pages static export
    // Vercel deployments and local dev should use normal paths
    const isVercel = !!process.env.VERCEL;
    const isStaticExport = process.env.NODE_ENV === "production" && !isVercel;
    
    return isStaticExport ? "/E-learning" : "";
};

export { getImagePrefix };