<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <!-- <FeaturedAuthors /> -->
</template>

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>