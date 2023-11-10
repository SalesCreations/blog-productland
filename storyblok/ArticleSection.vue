<template>
  <div v-editable="blok" class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24">
    <div  v-if="blok.has_highlight" class="col-span-12">
      <CardArticleFull :article="articles[0]" />
    </div>

    <div  class="col-span-4" v-for="article in blok.has_highlight? articles.slice(1):articles" :key="article._uid">
      <CardArticleDefault :article="article" />
    </div>

    <div v-if="blok.has_highlight" class="col-span-12 text-center">
      <Button/>
    </div>
  </div> 
</template>

<script setup>
  defineProps({ blok: Object })

  let articles = ref({});

  const storyblokApi = useStoryblokApi()
  const { data: articlesData } = await storyblokApi.get('cdn/stories/', {
    version: 'draft',
		resolve_links: 1,
    starts_with: 'articles',
  })

  articles = articlesData.stories?.slice(1)
</script>

<style lang="postcss" scoped>

</style>