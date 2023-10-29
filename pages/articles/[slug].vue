<template>
  <pre class="mt-32">{{ story }}</pre>
  <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
</template>

<script setup>
const route = useRoute();
const story = await useAsyncStoryblok(`articles/${route.params.slug}`, {
  version: "draft"
})
</script>