import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import os from "os";

const interfaces = os.networkInterfaces();
const wifi = interfaces["Wi-Fi"];
const ipv4 = wifi[3].address;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "assets", replacement: path.resolve(__dirname, "src/assets") },
      { find: "pages", replacement: path.resolve(__dirname, "src/app/pages") },
      {
        find: "components",
        replacement: path.resolve(__dirname, "src/app/components"),
      },
    ],
  },
  server: {
    host: ipv4,
    port: 3000,
  },
});
