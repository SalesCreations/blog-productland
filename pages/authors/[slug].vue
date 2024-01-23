<template>
  <div v-editable="story">
    <HeroAuthor :story="story" />
    <ArticleSection :author="story.name" />
  </div>
  <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
</template>

<script setup>
const route = useRoute();
// const isDev = process.env.NODE_ENV === 'development';
const story = await useAsyncStoryblok(`authors/${route.params.slug}`, {
  version: 'published',
});
</script>
