import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  base: isProduction ? "/kdm-wd/" : "/",
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
    ],
  },
});
