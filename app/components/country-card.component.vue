<template>
  <NuxtLink
    :to="`/country/${country.cca3}`"
    class="rounded-lg overflow-hidden shadow-md bg-white dark:bg-gray-800 hover:scale-[1.02] transition-transform"
  >
    <img
      :src="country.flags.svg"
      :alt="country.name.common"
      class="w-full aspect-video"
      loading="lazy"
    />
    <div class="p-4">
      <h2 class="font-bold text-lg mb-2">{{ country.name.common }}</h2>
      <p><b>Population:</b> {{ country.population.toLocaleString() }}</p>
      <p><b>Region:</b> {{ country.region }}</p>
      <p><b>Capital:</b> {{ country.capital?.[0] }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { CountryCardProps } from "./country-card.type";

defineProps<{ country: CountryCardProps }>();
</script>
