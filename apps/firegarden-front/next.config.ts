import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	output: "export",
	basePath: process.env.NODE_ENV === "production" ? "/firegarden-front" : "",
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
