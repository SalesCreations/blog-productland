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

// =======================
// metatags
// =======================

useHead({
  title: () => story.value.content.seo?.title,
  meta: [
    {
      name: "description",
      content: () => story.value.content.seo?.description,
    },
    {
      property: "og:site_name",
      content: "The Productland",
    },
    {
      property: "og:title",
      content: () => story.value.content.seo?.title,
    },
    {
      property: "og:description",
      content: () => story.value.content.seo?.description,
    },
    {
      property: "og:image",
      content: () => story.value.content.seo?.og_image,
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:image",
      content: () => story.value.content.seo?.og_image,
    },
  ],
});
</script>
