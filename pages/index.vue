<template>
  <StoryblokComponent v-if="story" :blok="story.content" />

  <CardsSection />

  <NewsLetter />

  <!-- <CardCookie /> -->
</template>

<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>