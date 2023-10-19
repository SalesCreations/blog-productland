<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup>
const story = await useAsyncStoryblok('vacancies', { version: 'draft' })
</script>