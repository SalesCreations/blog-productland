<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
  
  <NewsLetter />
</template>

<script setup>
const story = await useAsyncStoryblok('events', { version: 'draft' })
</script>