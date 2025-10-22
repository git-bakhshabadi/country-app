<template>
  <div class="relative w-full md:w-1/3">
    <input
      type="text"
      placeholder="Search for a country..."
      :value="modelValue"
      class="w-full px-4 py-3 pl-10 rounded shadow-md bg-white dark:bg-gray-700 dark:text-white outline-none"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
    <span class="absolute left-3 top-3 text-gray-400">🔍</span>
  </div>
</template>

<script setup lang="ts">
import type { SearchBarEmits, SearchBarProps } from "./search-bar.type";

defineProps<SearchBarProps>();
defineEmits<SearchBarEmits>();
</script>
