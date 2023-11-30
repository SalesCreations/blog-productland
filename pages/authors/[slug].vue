<template>
  <div v-editable="story">
    <HeroAuthor :story="story" />
    <ArticleSection :author="story.name" />
  </div>
  <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
</template>

<script setup>
const route = useRoute();
const story = await useAsyncStoryblok(`authors/${route.params.slug}`, {
  version: "draft",
});
</script>
