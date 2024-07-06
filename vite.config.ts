import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: "default",
        svgo: false,
        ref: true,
        titleProp: false,
      },
      include: "**/*.svg",
    }),
  ],

  resolve: {
    alias: {
      styles: path.resolve(__dirname, "./src/styles"),
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      contexts: path.resolve(__dirname, "./src/contexts"),
      services: path.resolve(__dirname, "./src/services"),
      src: path.resolve(__dirname, "./src"),
    },
  },
});
