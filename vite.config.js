import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/IssaKass/",
	plugins: [react(), compression()],
});
