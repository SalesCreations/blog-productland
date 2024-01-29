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
useHead({
  meta: [
    {
      name: 'Algolia crawler',
      content: () => 'noindex,nofollow',
    },
  ]
})
</script>