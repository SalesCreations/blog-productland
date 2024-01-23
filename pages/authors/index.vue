<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
// =======================
// initialization variables
// =======================

// const isDev = process.env.NODE_ENV === 'development';
const story = await useAsyncStoryblok('authors', { 
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
      content: "https://res.cloudinary.com/salesunited93/image/upload/v1676817900/thumbnail-site_emx94f.png"
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: "https://res.cloudinary.com/salesunited93/image/upload/v1676817900/thumbnail-site_emx94f.png"
    }
  ]
})
</script>