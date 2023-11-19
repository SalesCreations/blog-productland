<template>
  <NuxtLink :to="`/articles/${article.slug}`">
    <div 
      class="card-full relative flex w-full h-96 rounded-xl bg-white bg-clip-border border border-gray-200 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
    >
      <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-gray-200 bg-clip-border text-gray-700">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;"
          alt="image"
          class="article-image h-full w-full object-cover"
        />
      </div>
      <div class="p-6 flex items-center">
        <div class="article-info">
          <div class="author-info mb-2 flex items-center">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-2 border-2 border-brand-200" :src="author.content.avatar.filename" alt="">
            <NuxtLink :to="`/${author.full_slug}`" class="text-sm font-medium decoration-brand-50 hover:underline hover:underline-offset-2">{{ author.content.full_name }} <span class="italic font-light">wrote</span></NuxtLink>
          </div>
          <h3 class="mb-2 block text-4xl font-black leading-snug tracking-normal text-blue-gray-900 antialiased">
            {{ article.content.title || "New Title" }}
          </h3>
          <p class="mb-4 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {{ article.content.intro || "New Intro" }}
          </p>
          <p class="mb-5 date-time-info text-sm text-brand-300">26/10/2023  •  8 min read</p>
          <Tag :content="article.content.tag" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  defineProps({ article: Object, author: Object })
</script>

<style lang="postcss" scoped>
  .card-full img.article-image {
    @apply ease-in-out delay-200 duration-200
  }
  .card-full:hover img.article-image {
    @apply -translate-y-1 scale-105
  }
</style>