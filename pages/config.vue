<template>
  <Navbar/>
  <Footer class="mt-24"/>
</template>

<script setup>
const story = await useAsyncStoryblok('config', { 
  version: 'published',
})
definePageMeta({
  layout: 'clear'
})
</script>