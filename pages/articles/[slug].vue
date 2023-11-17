<template>
  <pre class="mt-32">{{ author }}</pre>
  <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
</template>

<script setup>
const route = useRoute();
const story = useState();
const author = useState();

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(`cdn/stories/articles/${route.params.slug}`, {
  version: 'draft',
  resolve_links: 'url',
  resolve_relations: 'author'
})

story.value = data.story;
author.value = data.rels[0];
</script>