/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
    include: ["**/*.spec.ts"],
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname),
      "@": path.resolve(__dirname),
    },
  },
});
