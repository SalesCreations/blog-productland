<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <BannerAnimated />
</template>

<script setup>
const story = await useAsyncStoryblok('contact', { version: 'draft' })
</script>