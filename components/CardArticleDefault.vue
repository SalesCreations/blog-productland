<template>
  <!-- <pre>{{ article }}</pre> -->
    <NuxtLink :to="`/articles/${article.slug}`">
    <div 
      class="card-full relative flex flex-col w-full rounded-xl bg-white bg-clip-border border border-gray-200 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer" style="height: 604px;"
    >
      <div class="relative m-0 w-full h-2/5 shrink-0 overflow-hidden rounded-xl rounded-b-none bg-gray-200 bg-clip-border text-gray-700">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;"
          alt="image"
          class="article-image h-full w-full object-cover"
        />
      </div>
      <div class="p-6 h-full flex">
        <div class="article-info">
          <div class="author-info mb-2 flex items-center">
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-2" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
            <small class="text-small">Paul Scanlon <span>escreveu</span></small>
          </div>
          <h3 class="mb-2 block text-2xl font-black leading-snug tracking-normal text-blue-gray-900 antialiased">
            {{ article.content.title || "New Title" }}
          </h3>
          <p class="mb-4 block text-base font-normal leading-relaxed text-gray-700 antialiased">
            {{ article.content.intro || "New Intro" }}
          </p>
          <small class="date-time-info text-small">26/10/2023  •  8 min read</small>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
  defineProps({ article: Object })
</script>

<style lang="postcss" scoped>
  .card-full img.article-image {
    @apply ease-in-out delay-200 duration-200
  }
  .card-full:hover img.article-image {
    @apply -translate-y-1 scale-105
  }
</style>