import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import SearchBar from "./search-bar.component.vue";

describe("SearchBar.vue", () => {
  it("renders input with correct placeholder", () => {
    const wrapper = mount(SearchBar, { props: { modelValue: "" } });
    const input = wrapper.find("input");

    expect(input.exists()).toBe(true);
    expect(input.attributes("placeholder")).toBe("Search for a country...");
  });

  it("renders input with initial value from props", () => {
    const wrapper = mount(SearchBar, { props: { modelValue: "Iran" } });
    const input = wrapper.find("input");
    expect((input.element as HTMLInputElement).value).toBe("Iran");
  });

  it("emits update:modelValue on input", async () => {
    const wrapper = mount(SearchBar, { props: { modelValue: "" } });
    const input = wrapper.find("input");

    await input.setValue("Germany");

    expect(wrapper.emitted()).toHaveProperty("update:modelValue");
    expect(wrapper.emitted()!["update:modelValue"]![0]).toEqual(["Germany"]);
  });
});
