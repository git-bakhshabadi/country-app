import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import FilterRegion from "./filter-region.component.vue";

describe("FilterRegion.vue", () => {
  it("renders select with options correctly", () => {
    const wrapper = mount(FilterRegion, {
      props: { modelValue: "" },
    });

    const select = wrapper.find("select");
    expect(select.exists()).toBe(true);

    const options = wrapper.findAll("option").map((o) => o.text());
    expect(options).toEqual([
      "Filter by Region",
      "Africa",
      "Americas",
      "Asia",
      "Europe",
      "Oceania",
    ]);

    expect((select.element as HTMLSelectElement).value).toBe("");
  });

  it("emits update:modelValue when selection changes", async () => {
    const wrapper = mount(FilterRegion, {
      props: { modelValue: "" },
    });

    const select = wrapper.find("select");

    await select.setValue("Asia");

    const update = wrapper.emitted("update:modelValue");
    expect(update).toBeTruthy();
    expect(update![0]).toEqual(["Asia"]);
  });

  it("keeps initial value from props", () => {
    const wrapper = mount(FilterRegion, {
      props: { modelValue: "Europe" },
    });
    const select = wrapper.find("select");
    expect((select.element as HTMLSelectElement).value).toBe("Europe");
  });
});
