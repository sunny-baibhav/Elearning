const getImagePrefix = () => {
    // Only use /E-learning/ prefix for GitHub Pages static export
    // All other deployments (Vercel, local dev) should use normal paths
    const isGitHubPages = process.env.NODE_ENV === "production" && 
                         process.env.GITHUB_ACTIONS && 
                         !process.env.VERCEL && 
                         !process.env.VERCEL_URL;
    
    return isGitHubPages ? "/E-learning" : "";
};

export { getImagePrefix };