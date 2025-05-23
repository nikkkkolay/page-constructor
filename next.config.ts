const repoName = "page-constructor";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}`,
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;
