<template>
  <div id="default-layout font-body">
    <Navbar />
    <Spotlight />
    <slot />

    <Footer />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>