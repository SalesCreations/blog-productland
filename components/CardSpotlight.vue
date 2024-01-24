<template>
  <NuxtLink :to="item.pathname">
    <p class="text-left text-xs">{{ item.pathname }}</p>
    <h3 class="text-left text-lg font-black font-display">{{ truncate(item.title,45) }}</h3>
    <p class="text-left text-sm">{{ truncate(item.description,170) }}</p>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({ item: Object })

function truncate(value, length) {
if (value.length > length) {
    return value.substring(0, length) + "...";
} else {
    return value;
  }
}
</script>