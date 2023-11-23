<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <CtaText />
</template>

<script setup>
const story = await useAsyncStoryblok('about', { version: 'draft' })
</script>