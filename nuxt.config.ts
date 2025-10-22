import { config as dotenvConfig } from "dotenv";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";
dotenvConfig({ path: resolve(process.cwd(), "envs/" + envFile) });

export default defineNuxtConfig({
  content: {
    database: undefined,
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  pinia: {},
  css: ["~/assets/styles/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      API_URL:
        process.env.NUXT_PUBLIC_API_URL || "https://restcountries.com/v3.1",
    },
  },
  ignore: ["**/*.spec.ts", "**/*.test.ts"],
  modules: [
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@nuxt/eslint",
    "@nuxt/content",
  ],
});
