import { defineStore } from "pinia";

export enum AppTheme {
  DARK = "dark",
  Light = "light",
}

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: AppTheme.Light,
  }),

  actions: {
    toggleTheme(): void {
      this.theme =
        this.theme === AppTheme.DARK ? AppTheme.Light : AppTheme.DARK;
      this.applyTheme();
    },

    applyTheme(): void {
      document.documentElement.classList.toggle(
        "dark",
        this.theme === AppTheme.DARK
      );
    },
  },

  persist: true,
});
