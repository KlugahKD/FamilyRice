<!-- layouts/default.vue -->
<template>
    <div class="min-h-screen flex flex-col">
      <AppHeader />
      <main class="flex-grow">
        <slot />
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script setup>
  // You don't need to import AppHeader and AppFooter
  // as Nuxt auto-imports components by default
  </script>