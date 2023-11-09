<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <div class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24" ref="parallaxRef">
    <div class="col-span-12">
      <CardArticleFull />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-12 text-center">
      <Button/>
    </div>
  </div>
</template>

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>