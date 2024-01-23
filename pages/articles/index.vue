<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
// =======================
// initialization variables
// =======================

const story = await useAsyncStoryblok('articles', { 
  version: 'published',
})

// =======================
// metatags
// =======================

// useServerSeoMeta({
//   title: () => story.value.content.seo.title,
//   ogTitle: () => story.value.content.seo.title,
//   description: () => story.value.content.seo.description,
//   ogDescription: () => story.value.content.seo.description,
//   ogSiteName: 'The ProductLand',
//   ogImage: 'https://example.com/image.png',
//   twitterImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })

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