<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <!-- <div class="container mx-auto mb-10">
    <ais-instant-search :index-name="indexName" :search-client="algolia">
      <ais-search-box />
      <ais-hits />
    </ais-instant-search>
  </div> -->
</template>

<script setup>
// =======================
// initialization variables
// =======================

const story = await useAsyncStoryblok('articles', { 
  version: 'published',
})

// const { result, search } = useAlgoliaSearch('netlify_e6d0003e-a354-4b37-8fba-fa6069e734f6_main_all')

// onMounted(async () => {
//   await search({ query: 'articles' })
// })

// const indexName = 'netlify_e6d0003e-a354-4b37-8fba-fa6069e734f6_main_all'
// const algolia = useAlgoliaRef()

// import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es'


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

<style lang="postcss">
.ais-SearchBox form {
  @apply mb-5
}
.ais-SearchBox form > input {
  @apply w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50
}
</style>