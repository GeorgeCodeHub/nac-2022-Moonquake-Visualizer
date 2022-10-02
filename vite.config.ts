import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/nac-2022-Moonquake-Visualizer/",
	plugins: [react()]
});
