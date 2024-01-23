<template>
  <Navbar/>
  <Footer class="mt-24"/>
</template>

<script setup>
const isDev = process.env.NODE_ENV === 'development';
const story = await useAsyncStoryblok('config', { 
  version: isDev ? 'draft' : 'published',
})
definePageMeta({
  layout: 'clear'
})
</script>