<template>
  <NuxtLink :to="item.pathname">
    <p class="text-left text-xs">{{ item.pathname }}</p>
    <h3 class="text-left text-lg font-black font-display">{{ item.title }}</h3>
    <p class="text-left text-sm">{{ item.description }}</p>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({ item: Object })
</script>