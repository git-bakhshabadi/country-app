<template>
  <div class="p-8">
    <NuxtLink
      to="/"
      class="inline-block px-6 py-2 mb-8 rounded shadow-md bg-white dark:bg-gray-700"
    >
      ← Back
    </NuxtLink>

    <div v-if="error" class="text-red-500 font-bold">
      ⚠️ Failed to load country data. Please try again later.
    </div>

    <div v-else-if="!country" class="text-gray-500">Loading...</div>

    <div v-else class="flex flex-col md:flex-row gap-12">
      <img
        :src="country.flags.svg"
        :alt="country.name.common"
        class="w-full md:w-1/2 rounded shadow-md aspect-4/3"
        loading="lazy"
      />

      <div>
        <h1 class="text-3xl font-bold mb-6">{{ country.name.common }}</h1>
        <p><b>Population:</b> {{ country.population.toLocaleString() }}</p>
        <p><b>Region:</b> {{ country.region }}</p>
        <p><b>Capital:</b> {{ country.capital?.[0] }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { CountryCardProps } from "~/components/country-card.type";

const route = useRoute();
const code = route.params.code as string;

const { data: country, error } = await useAsyncData<CountryCardProps>(
  `country-${code}`,
  async (): Promise<CountryCardProps> => {
    const apiUrl = useRuntimeConfig().public.API_URL;
    const res = await $fetch<CountryCardProps | CountryCardProps[]>(
      `${apiUrl}/alpha/${code}`
    );

    const fetched = Array.isArray(res)
      ? (res[0] as CountryCardProps)
      : (res as CountryCardProps);

    if (!fetched) {
      throw new Error("Country not found");
    }

    return fetched;
  },
  { server: true }
);
</script>
