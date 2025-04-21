import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		host: "localhost",
		port: 5173,
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
	build: {
		outDir: "dist",
		sourcemap: true,
		// Reduce chunk size
		chunkSizeWarningLimit: 1000,
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom", "firecms", "firebase"],
				},
			},
		},
	},
	// Optimize dependencies that are used across components
	optimizeDeps: {
		include: ["react", "react-dom", "firecms", "firebase"],
	},
});
