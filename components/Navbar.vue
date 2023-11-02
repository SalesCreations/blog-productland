<template>
  <header class="bg-brand-300 absolute inset-x-0 top-0 z-50">
    <div class="container mx-auto grid gap-5 grid-cols-12">
      <div class="col-span-12">
        <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1"></div>
          <div class="flex md:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white">
              <span class="sr-only">Open main menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          <div class="hidden md:flex md:gap-x-12">
            <NuxtLink to="/" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img 
                :src="logo?.filename" 
                :alt="logo?.alt"
                class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
              >
            </NuxtLink>        
          </div>
          <ul class="hidden md:flex md:flex-1 md:justify-end md:gap-x-4 lg:gap-x-3 xl:gap-x-4">
            <li 
              v-editable="menuLink" 
              v-for="menuLink in headerMenu" 
              :key="menuLink._uid"
            >
              <NuxtLink 
                :to="`/${menuLink.link.story.url}`" 
                class="text-sm leading-6 text-white p-2 rounded-md hover:bg-brand-50 transition ease-in-out delay-150 duration-300 cursor-pointer"
              >
                {{ menuLink.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-brand-300 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="">
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-text-white">
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <ul class="space-y-2 py-6">
              <li v-editable="blok" v-for="blok in headerMenu" :key="blok._uid">
                <NuxtLink :to="`/${blok.link.url}`" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-brand-50">
                  {{ blok.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const headerMenu = ref(null)
const logo = ref(null)

headerMenu.value = data.story.content.header_menu
logo.value = data.story.content.logo
</script>

<style lang="postcss" scoped>
a.router-link-active {
  @apply bg-brand-50;
}

a.router-link-active:has(img) {
  background: none;
}
</style>