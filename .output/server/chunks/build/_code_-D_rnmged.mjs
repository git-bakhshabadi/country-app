import { _ as __nuxt_component_0 } from './nuxt-link-DB_mJm9o.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'better-sqlite3';
import 'ipx';
import './server.mjs';
import 'pinia';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[code]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    route.params.code;
    const country = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "inline-block px-6 py-2 mb-8 rounded shadow-md bg-white dark:bg-gray-700"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← Back `);
          } else {
            return [
              createTextVNode(" ← Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (country.value) {
        _push(`<div class="flex flex-col md:flex-row gap-12"><img${ssrRenderAttr("src", country.value.flags.svg)}${ssrRenderAttr("alt", country.value.name.common)} class="w-full md:w-1/2 rounded shadow-md"><div><h1 class="text-3xl font-bold mb-6">${ssrInterpolate(country.value.name.common)}</h1><p><b>Population:</b> ${ssrInterpolate(country.value.population.toLocaleString())}</p><p><b>Region:</b> ${ssrInterpolate(country.value.region)}</p><p><b>Capital:</b> ${ssrInterpolate(country.value.capital?.[0])}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/country/[code].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_code_-D_rnmged.mjs.map
