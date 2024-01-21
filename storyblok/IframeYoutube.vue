<template>
  <iframe 
    width="560" 
    height="315" 
    :src="blok.url.url" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowfullscreen
    loading="lazy"
  ></iframe>
</template>

<script setup>
  const props = defineProps({ blok: Object })
</script>
