import { mount, RouterLinkStub } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import CountryCardComponent from "./country-card.component.vue";

const mockCountry = {
  name: { common: "Iran" },
  population: 85000000,
  region: "Asia",
  capital: ["Tehran"],
  flags: { svg: "iran-flag.svg" },
  cca3: "IRN",
};

describe("CountryCard.vue", () => {
  it("renders country data correctly", () => {
    const wrapper = mount(CountryCardComponent, {
      props: { country: mockCountry },
    });

    expect(wrapper.text()).toContain("Iran");
    expect(wrapper.text()).toContain("85,000,000");
    expect(wrapper.text()).toContain("Asia");
    expect(wrapper.text()).toContain("Tehran");
    expect(wrapper.find("img").attributes("src")).toBe("iran-flag.svg");
    expect(wrapper.find("img").attributes("alt")).toBe("Iran");
  });

  it("NuxtLink points to correct URL", () => {
    const wrapper = mount(CountryCardComponent, {
      props: { country: mockCountry },
      global: {
        stubs: {
          NuxtLink: RouterLinkStub,
        },
      },
    });
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.exists()).toBe(true);

    expect(link.props("to")).toBe("/country/IRN");
  });
});
