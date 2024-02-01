<template>
  <section v-editable="blok" class="container mx-auto px-4 xl:px-16 grid gap-8 grid-cols-12 mt-14 mb-24">
    <div  
      class="card-author-default snap-start shrink-0 relative  col-span-6 lg:col-span-3 border-2 border-black group flex transform cursor-pointer flex-col items-center rounded-xl p-2 lg:p-8 transition-colors duration-300 hover:bg-blue-600 min-w-[25%"
      v-for="author in authors"
      :key="author._uid"
    >
      <CardAuthor :author="author" />
    </div>
  </section> 
</template>

<script setup>
const props = defineProps({ 
  blok: {
    type: Object,
    default: {
      has_highlight: false,
    }
  }
})

const authors = useState();

const storyblokApi = useStoryblokApi()
const { data: authorsData, error } = await storyblokApi.get('cdn/stories/', {
  version: 'published',
  starts_with: 'authors',
  content_type: 'Authors',
  resolve_links: 'url',
  sort_by: 'published_at:desc',
  per_page: 100,
})

if(error) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Internal Server Error',
    fatal: true
  });
}

authors.value = authorsData.stories
</script>