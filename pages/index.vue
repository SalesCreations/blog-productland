<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <div class="container mx-auto px-4 grid gap-5 grid-cols-12 mt-20" ref="parallaxRef">
    <div class="col-span-12 mb-6">
      <CardArticleFull />
    </div>

    <div class="col-span-4 mb-6">
      <CardArticleDefault />
    </div>

    <div class="col-span-4 mb-6">
      <CardArticleDefault />
    </div>

    <div class="col-span-4 mb-6">
      <CardArticleDefault />
    </div>

    <div class="col-span-4 mb-6">
      <CardArticleDefault />
    </div>

    <div class="col-span-4 mb-6">
      <CardArticleDefault />
    </div>

    <div class="col-span-4 mb-6">
      <CardArticleDefault />
    </div>
  </div>
</template>

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>