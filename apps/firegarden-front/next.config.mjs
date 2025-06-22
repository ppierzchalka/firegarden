/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true, // Disables Next.js Image Optimization API
	},
	output: "standalone", // Optimizes for Docker deployments
};

export default nextConfig;
