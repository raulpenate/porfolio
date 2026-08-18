import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/porfolio";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPages ? repoBasePath : "",
  },
  ...(githubPages
    ? {
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
      }
    : {}),
};

export default nextConfig;
