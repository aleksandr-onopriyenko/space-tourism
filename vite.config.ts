import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/space-tourism/",
  resolve: {
    alias: {
      "@hooks": path.resolve(__dirname, "./src/hooks"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@types": path.resolve(__dirname, "./src/types"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@constants": path.resolve(__dirname, "./src/constants"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
