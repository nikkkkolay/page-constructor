const repoName = "page-constructor"; // замени на своё

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // важно для Next.js 13+ App Router
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: {
        unoptimized: true, // обязательно для next export
    },
};

module.exports = nextConfig;
