<template>
  <select
    :value="modelValue"
    class="px-4 py-3 rounded shadow-md bg-white dark:bg-gray-700 dark:text-white"
    @change="
      $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
    "
  >
    <option value="">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</template>

<script setup lang="ts">
import type {
  FilterRegionEmits,
  FilterRegionProps,
} from "./filter-region.type";

defineProps<FilterRegionProps>();
defineEmits<FilterRegionEmits>();
</script>
