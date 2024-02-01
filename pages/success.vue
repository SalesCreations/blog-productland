<template>
  <div class="sucess-message flex min-h-screen items-center justify-center bg-brand-200">
    <div class="rounded-lg bg-gray-50 px-16 py-14">
      <div class="flex justify-center">
        <div class="rounded-full bg-green-200 p-6">
          <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
        </div>
      </div>
      <h3 class="font-display text-center text-4xl lg:text-5xl font-black tracking-tight text-gray-900 sm:text-5xl mt-5 mb-2">{{ story.content.title || 'New Title' }}</h3>
      <p class="text-base text-center leading-8 text-gray-600 mb-5">{{ story.content.subtitle || 'New Subtitle' }}</p>
      <ButtonLink 
        class="button-hero"
        :text="`👈 ${story.content.button_text || 'New Button Text'}`" 
        link="/" 
        linktype=""
      />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'clear'
})

const story = await useAsyncStoryblok('success', 
  { version: 'published'},
);

useHead({
  title: () => 'Success send form',
  meta: [
    {
      name: 'description',
      content: () => 'Your form has been submitted successfully',
    },
    {
      property: 'og:site_name',
      content: 'The Productland',
    },
    {
      property: 'og:title',
      content: () => 'Success send form',
    },
    {
      property: 'og:description',
      content: () => 'Your form has been submitted successfully',
    },
    {
      property: 'og:image',
      content: () => 'https://a.storyblok.com/f/254555/1200x627/e00811f8a7/thumbnail-site.png',
    },
    {
      name: 'Algolia crawler',
      content: () => 'noindex,nofollow',
    }
  ]
})
</script>

<style lang="postcss">
.sucess-message a.button-hero {
  @apply w-full
}
.sucess-message a.button-hero > button {
  @apply w-full py-3 px-6 bg-pink-500
}
</style>