<template>
  <NuxtLink :to="`/articles/${article.slug}`">
    <div 
      class="card-full relative flex flex-col w-full h-[604px] rounded-xl bg-white bg-clip-border border border-gray-200 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
    >
      <div class="relative m-0 w-full h-2/5 shrink-0 overflow-hidden rounded-xl rounded-b-none bg-gray-200 bg-clip-border text-gray-700">
        <NuxtImg 
          provider="storyblok"
          :placeholder="[112]"
          :src="article.content.image?.filename" 
          class="article-image h-full w-full object-cover" 
          alt="" 
        />
        <Tag class="absolute bottom-4 left-5" :content="article.content.tag"/>
      </div>
      <div class="p-6 h-full flex">
        <div class="article-info">
          <div class="author-info mb-2 flex items-center">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-2 border-2 border-brand-200" :src="article.content.author[0].author.content.avatar.filename" alt="">
            <p class="text-sm font-medium decoration-brand-50">{{ article.content.author[0].author.content.full_name }} <span class="italic font-light">wrote</span></p>
          </div>
          <h3 class="mb-2 block text-2xl font-black leading-snug tracking-normal text-blue-gray-900 antialiased">
            {{ article.content.title || "New Title" }}
          </h3>
          <p class="mb-4 block text-base font-normal leading-relaxed text-gray-700 antialiased">
            {{ article.content.intro || "New Intro" }}
          </p>
          <p class="date-time-info text-sm text-brand-300">
            <time :datetime="article.published_at ? $dayjs(article.published_at).format('DD/MM/YYYY'):'Not published yet'">
              {{ article.published_at ? $dayjs(article.published_at).format('DD/MM/YYYY'):'Not published yet' }}
            </time>  •  {{ readingTime() }} min read
          </p>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({ article: Object })

function readingTime() {
  let minutes = 0;
  const contentAsString = JSON.stringify(props.article.content.content);
  const words = contentAsString.split(' ').length;
  const wordsPerMinute = 200;

  minutes = Math.ceil(words / wordsPerMinute)

  return minutes
}
</script>

<style lang="postcss" scoped>
  .card-full img.article-image {
    @apply ease-in-out delay-200 duration-200
  }
  .card-full:hover img.article-image {
    @apply -translate-y-1 scale-105
  }
</style>