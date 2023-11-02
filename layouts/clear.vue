<template>
  <div id="clear-layout font-body">
    <slot />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>