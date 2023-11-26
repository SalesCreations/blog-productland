<template>
  <section v-editable="blok" class="container mx-auto px-4 xl:px-16 grid gap-8 grid-cols-12 mt-14 mb-24">
    <div v-if="blok.has_highlight" class="col-span-12">
      <CardArticleFull :article="articles[0]" :author="authors.find(author => author.uuid === articles[0].content.author)" />
    </div>

    <div  class="col-span-12 md:col-span-6 lg:col-span-4" v-for="article in blok.has_highlight? articles.slice(1):articles" :key="article._uid">
      <CardArticleDefault :article="article" :author="authors.find(author => author.uuid === article.content.author)" />
    </div>

    <div v-if="blok.has_highlight" class="col-span-12 text-center">
      <ButtonLink text="See more articles" link="/articles" />
    </div>
  </section> 
</template>

<script setup>
  defineProps({ blok: Object })

  const articles = useState();
  const authors = useState();

  const storyblokApi = useStoryblokApi()
  const { data: articlesData } = await storyblokApi.get('cdn/stories/', {
    version: 'draft',
    starts_with: 'articles',
    resolve_links: 'url',
    resolve_relations: 'author'
  })

  articles.value = articlesData.stories?.slice(1)
  authors.value = articlesData.rels
</script>