import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import tsconfigPaths from "vite-tsconfig-paths";

import * as path from "path";

const root = path.resolve(__dirname, "./src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(root, "./components"),
      "@pages": path.resolve(root, "./pages"),
      "@router": path.resolve(root, "./router"),
      "@services": path.resolve(root, "./services"),
      "@theme": path.resolve(root, "./theme"),
      "@assets": path.resolve(root, "./assets"),
      "@context": path.resolve(root, "./context"),
      "@hooks": path.resolve(root, "./hooks"),
      "@environment": path.resolve(root, "./environment"),
      "@api": path.resolve(root, "./api"),
      "@constants": path.resolve(root, "./constants"),
      "@utils": path.resolve(root, "./utils"),
      "@templates": path.resolve(root, "./templates"),
      "@dates": path.resolve(root, "./libs/date"),
    },
  },
});
