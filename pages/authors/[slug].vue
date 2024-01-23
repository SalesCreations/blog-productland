<template>
  <div v-editable="story">
    <HeroAuthor :story="story" />
    <ArticleSection :author="story.name" />
  </div>
  <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
</template>

<script setup>
const { $preview } = useNuxtApp();
const route = useRoute();

const version = $preview ? "draft" : "published";

const story = await useAsyncStoryblok(`authors/${route.params.slug}`, {
  version: version,
});

// Load the bridge in preview mode
onMounted(() => {
  if ($preview && story.value && story.value.id) {
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), {
      resolveRelations,
    });
  }
});
</script>
