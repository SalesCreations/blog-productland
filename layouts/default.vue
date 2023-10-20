<template>
  <div id="default-layout">
    <Navbar />
    <slot />

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>