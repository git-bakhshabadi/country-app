import { defineComponent, ref, computed, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-DB_mJm9o.mjs';
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
import 'vue-router';
import 'tailwindcss/colors';
import '@iconify/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "search-bar.component",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full md:w-1/3" }, _attrs))}><input type="text" placeholder="Search for a country..."${ssrRenderAttr("value", __props.modelValue)} class="w-full px-4 py-3 pl-10 rounded shadow-md bg-white dark:bg-gray-700 dark:text-white outline-none"><span class="absolute left-3 top-3 text-gray-400">🔍</span></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/search-bar.component.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const SearchBar = Object.assign(_sfc_main$3, { __name: "SearchBarComponent" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "filter-region.component",
  __ssrInlineRender: true,
  props: {
    modelValue: {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({
        value: __props.modelValue,
        class: "px-4 py-3 rounded shadow-md bg-white dark:bg-gray-700 dark:text-white"
      }, _attrs))}><option value="">Filter by Region</option><option value="Africa">Africa</option><option value="Americas">Americas</option><option value="Asia">Asia</option><option value="Europe">Europe</option><option value="Oceania">Oceania</option></select>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/filter-region.component.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const FilterRegion = Object.assign(_sfc_main$2, { __name: "FilterRegionComponent" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "country-card.component",
  __ssrInlineRender: true,
  props: {
    country: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/country/${__props.country.cca3}`,
        class: "rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", __props.country.flags.svg)}${ssrRenderAttr("alt", __props.country.name.common)} class="w-full h-40 object-cover"${_scopeId}><div class="p-4"${_scopeId}><h2 class="font-bold text-lg mb-2"${_scopeId}>${ssrInterpolate(__props.country.name.common)}</h2><p${_scopeId}><b${_scopeId}>Population:</b> ${ssrInterpolate(__props.country.population.toLocaleString())}</p><p${_scopeId}><b${_scopeId}>Region:</b> ${ssrInterpolate(__props.country.region)}</p><p${_scopeId}><b${_scopeId}>Capital:</b> ${ssrInterpolate(__props.country.capital?.[0])}</p></div>`);
          } else {
            return [
              createVNode("img", {
                src: __props.country.flags.svg,
                alt: __props.country.name.common,
                class: "w-full h-40 object-cover"
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "p-4" }, [
                createVNode("h2", { class: "font-bold text-lg mb-2" }, toDisplayString(__props.country.name.common), 1),
                createVNode("p", null, [
                  createVNode("b", null, "Population:"),
                  createTextVNode(" " + toDisplayString(__props.country.population.toLocaleString()), 1)
                ]),
                createVNode("p", null, [
                  createVNode("b", null, "Region:"),
                  createTextVNode(" " + toDisplayString(__props.country.region), 1)
                ]),
                createVNode("p", null, [
                  createVNode("b", null, "Capital:"),
                  createTextVNode(" " + toDisplayString(__props.country.capital?.[0]), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/country-card.component.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CountryCard = Object.assign(_sfc_main$1, { __name: "CountryCardComponent" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const countries = ref([]);
    const searchQuery = ref("");
    const selectedRegion = ref("");
    const filteredCountries = computed(() => {
      if (Array.isArray(countries.value)) {
        return countries.value.filter(
          (c) => c.name.common.toLowerCase().includes(searchQuery.value.toLowerCase()) && (selectedRegion.value ? c.region === selectedRegion.value : true)
        );
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-8" }, _attrs))}><div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">`);
      _push(ssrRenderComponent(SearchBar, {
        modelValue: searchQuery.value,
        "onUpdate:modelValue": ($event) => searchQuery.value = $event
      }, null, _parent));
      _push(ssrRenderComponent(FilterRegion, {
        modelValue: selectedRegion.value,
        "onUpdate:modelValue": ($event) => selectedRegion.value = $event
      }, null, _parent));
      _push(`</div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"><!--[-->`);
      ssrRenderList(filteredCountries.value, (country) => {
        _push(ssrRenderComponent(CountryCard, {
          key: country.cca3,
          country
        }, null, _parent));
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BvBdTpQ_.mjs.map
