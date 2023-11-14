import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  // build: {
  //   rollupOptions: {
  //     plugins: [
  //       replace({
  //         'process.env.API_URL': JSON.stringify(import.meta.env.API_URL),
  //       }),
  //     ],
  //   },
  // },
});
