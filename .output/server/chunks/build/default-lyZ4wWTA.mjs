import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { defineStore } from 'pinia';

const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: "light"
    /* Light */
  }),
  actions: {
    initTheme() {
      const saved = localStorage.getItem("theme");
      if (saved) {
        this.theme = saved;
      } else {
        this.theme = (void 0).matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      this.applyTheme();
    },
    toggleTheme() {
      this.theme = this.theme == "dark" ? "light" : "dark";
      this.applyTheme();
      localStorage.setItem("theme", this.theme);
    },
    applyTheme() {
      (void 0).documentElement.classList.toggle(
        "dark",
        this.theme == "dark"
        /* DARK */
      );
    }
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900" }, _attrs))}><header class="flex justify-between items-center px-8 py-6 shadow-md bg-white dark:bg-gray-800 dark:text-white"><h1 class="text-xl font-bold">Where in the worlds?</h1><button class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700">${ssrInterpolate(unref(themeStore).theme ? "Light Mode ☀️" : "Dark Mode 🌙")}</button></header><main class="min-h-screen p-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-lyZ4wWTA.mjs.map
