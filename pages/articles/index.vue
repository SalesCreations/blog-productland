<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <div class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-20 mb-24" ref="parallaxRef">
    <!-- ROW 1 -->
    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <!-- ROW 2 -->
    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <!-- ROW 3 -->
    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <!-- ROW 4 -->
    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>

    <div class="col-span-4">
      <CardArticleDefault />
    </div>
  </div>
</template>

<script setup>
const story = await useAsyncStoryblok('articles', { version: 'draft' })
</script>