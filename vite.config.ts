import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: "@", replacement: path.resolve(__dirname, "src/app") },
			{
				find: "assets",
				replacement: path.resolve(__dirname, "src/assets"),
			},
			{
				find: "pages",
				replacement: path.resolve(__dirname, "src/app/pages"),
			},
			{
				find: "styles",
				replacement: path.resolve(__dirname, "src/app/styles"),
			},
			{
				find: "components",
				replacement: path.resolve(__dirname, "src/app/components"),
			},
		],
	},
	server: {
		host: "127.0.0.1",
		port: 3000,
	},
});
