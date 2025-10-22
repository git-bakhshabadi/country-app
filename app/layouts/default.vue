<script setup lang="ts">
import { onMounted } from "vue";
import { useThemeStore } from "../stores/theme.store";

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.applyTheme();
});

const toggleTheme = (): void => {
  themeStore.toggleTheme();
};
</script>

<template>
  <div class="dark:bg-gray-900 dark:text-white bg-gray-100 text-gray-900">
    <header
      class="flex justify-between items-center px-8 py-6 shadow-md bg-white dark:bg-gray-800 dark:text-white"
    >
      <h1 class="text-xl font-bold">Where in the worlds?</h1>
      <button
        class="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
        @click="toggleTheme"
      >
        {{ themeStore.theme ? "Light Mode ☀️" : "Dark Mode 🌙" }}
      </button>
    </header>

    <main class="min-h-screen p-4">
      <slot />
    </main>
  </div>
</template>
