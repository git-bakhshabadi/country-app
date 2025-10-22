import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import DefaultLayout from "./default.vue";
import { AppTheme, useThemeStore } from "../stores/theme.store";

describe("DefaultLayout.vue", () => {
  let store: ReturnType<typeof useThemeStore>;

  beforeEach(() => {
    setActivePinia(createPinia());
    store = useThemeStore();

    store.applyTheme = vi.fn();
    store.toggleTheme = vi.fn();
  });

  it("calls applyTheme on mounted", () => {
    mount(DefaultLayout);
    expect(store.applyTheme).toHaveBeenCalled();
  });

  it("renders header and button", () => {
    store.theme = AppTheme.Light;

    const wrapper = mount(DefaultLayout);

    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toContain("Light Mode ☀️");

    store.theme = AppTheme.DARK;
    const wrapper2 = mount(DefaultLayout);
    expect(wrapper2.find("button").text()).toContain("Light Mode ☀️");
  });

  it("calls toggleTheme when button clicked", async () => {
    const wrapper = mount(DefaultLayout);
    const button = wrapper.find("button");

    await button.trigger("click");
    expect(store.toggleTheme).toHaveBeenCalled();
  });
});
