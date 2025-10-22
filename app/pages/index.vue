<template>
  <div class="p-8">
    <div
      class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
    >
      <SearchBar v-model="searchQuery" />
      <FilterRegion v-model="selectedRegion" />
      <select
        v-model="sortBy"
        class="px-4 py-3 rounded shadow-md bg-white dark:bg-gray-700 dark:text-white"
      >
        <option value="">Sort By</option>
        <option value="name">Country Name</option>
        <option value="population">Population</option>
      </select>
    </div>

    <div v-if="error" class="text-red-500 font-bold">
      ⚠️ Failed to load countries. Please try again later.
    </div>

    <div v-else-if="filteredCountries.length === 0" class="text-gray-500">
      No countries match your search or filter.
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      <CountryCard
        v-for="country in filteredCountries"
        :key="country.cca3"
        :country="country"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import SearchBar from "../components/search-bar.component.vue";
import FilterRegion from "../components/filter-region.component.vue";
import CountryCard from "../components/country-card.component.vue";
import Fuse from "fuse.js";
import type { CountryCardProps } from "~/components/country-card.type";

const route = useRoute();
const router = useRouter();

const searchQuery = ref<string>((route.query.search as string) || "");
const selectedRegion = ref<string>((route.query.region as string) || "");
const sortBy = ref<string>((route.query.sort as string) || "");

watch(
  [searchQuery, selectedRegion, sortBy],
  ([newSearch, newRegion, newSort]) => {
    router.replace({
      query: {
        ...route.query,
        search: newSearch || undefined, // remove from query if empty
        region: newRegion || undefined,
        sort: newSort || undefined,
      },
    });
  }
);

const { data: countries, error } = await useAsyncData<CountryCardProps[]>(
  "countries",
  async (): Promise<CountryCardProps[]> => {
    const apiUrl = useRuntimeConfig().public.API_URL;
    const res = await $fetch<CountryCardProps[]>(
      `${apiUrl}/all?fields=name,flags,population,region,capital,cca3`
    );
    return res;
  },
  { server: true }
);

const filteredCountries = computed(() => {
  if (error.value) return [];
  if (!countries.value) return [];

  let result: CountryCardProps[] = [];

  // fuzzy search
  if (!searchQuery.value) {
    result = Array.isArray(countries.value) ? countries.value : [];
  } else {
    const fuse = new Fuse(
      Array.isArray(countries.value) ? countries.value : [],
      { keys: ["name.common"], threshold: 0.4 }
    );
    result = fuse.search(searchQuery.value).map((r) => r.item);
  }

  if (selectedRegion.value) {
    result = result.filter((c) => c.region === selectedRegion.value);
  }

  if (sortBy.value === "name") {
    result.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } else if (sortBy.value === "population") {
    result.sort((a, b) => a.population - b.population);
  }

  return result;
});
</script>
