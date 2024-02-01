<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
// =======================
// initialization variables
// =======================

const story = await useAsyncStoryblok('authors', { 
  version: 'published',
})

// =======================
// metatags
// =======================

useHead({
  title: () => story.value.content.seo?.title,
  meta: [
    {
      name: 'description',
      content: () => story.value.content.seo?.description,
    },
    {
      property: 'og:site_name',
      content: 'The Productland',
    },
    {
      property: 'og:title',
      content: () => story.value.content.seo?.title,
    },
    {
      property: 'og:description',
      content: () => story.value.content.seo?.description,
    },
    {
      property: 'og:image',
      content: () => story.value.content.seo?.og_image,
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: () => story.value.content.seo?.og_image,
    }
  ]
})
</script>