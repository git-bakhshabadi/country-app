import { setActivePinia, createPinia } from "pinia";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useThemeStore, AppTheme } from "./theme.store";

describe("Theme Store", () => {
  let store: ReturnType<typeof useThemeStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useThemeStore();

    store.applyTheme = vi.fn(() => {
      document.documentElement.classList.toggle(
        "dark",
        store.theme === AppTheme.DARK
      );
    });
  });

  it("initial theme should be Light", () => {
    expect(store.theme).toBe(AppTheme.Light);
  });

  it("toggleTheme switches theme from Light to Dark", () => {
    expect(store.theme).toBe(AppTheme.Light);
    store.toggleTheme();
    expect(store.theme).toBe(AppTheme.DARK);
    expect(store.applyTheme).toHaveBeenCalled();
  });

  it("toggleTheme switches theme from Dark to Light", () => {
    store.theme = AppTheme.DARK;
    store.toggleTheme();
    expect(store.theme).toBe(AppTheme.Light);
    expect(store.applyTheme).toHaveBeenCalled();
  });

  it("applyTheme updates document.documentElement class", () => {
    document.documentElement.classList.remove("dark");

    store.theme = AppTheme.DARK;
    store.applyTheme();
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    store.theme = AppTheme.Light;
    store.applyTheme();
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
