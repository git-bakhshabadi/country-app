import { defineNuxtPlugin } from "#app";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default defineNuxtPlugin(({ $pinia }: any) => {
  $pinia?.use(piniaPluginPersistedstate);
});
