<template>
  <header class="bg-brand-300 absolute inset-x-0 top-0 z-40">
    <div class="container mx-auto grid gap-5 grid-cols-12 xl:px-16">
      <div class="col-span-12">
        <nav class="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1"></div>
          <div class="flex md:hidden">
            <button 
              type="button" 
              @click="openSidebar = true"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            >
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
          <ul class="hidden items-center md:flex md:flex-1 md:justify-end md:gap-x-4 lg:gap-x-3 xl:gap-x-4">
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
            <li class="text-white">
              <button class="hover:bg-brand-50 py-2 px-2 rounded-md flex gap-1 justify-center"  @click="openSpotlight = true">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <span class="text-xs mt-[0.5px]">
                  <kbd v-if="$device.isMacOS">⌘K</kbd>
                  <kbd v-else>CTRL+K</kbd>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div 
      :class="`fixed right-0 top-0 h-screen w-full sm:max-w-sm transition z-50 ${openSidebar ? 'duration-300 shadow-2xl':'duration-200 translate-x-full'}`" 
      role="dialog" 
      aria-modal="true"
    >
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <!-- <div class="fixed inset-0 z-50"></div> -->
      <div :class="`h-screen w-full bg-brand-50 px-6 py-6 ${openSidebar ? 'shadow-2xl':''}`">
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img 
                :src="logo?.filename" 
                :alt="logo?.alt"
                class="scale-110"
              >
          </a>
          <button 
            type="button" 
            @click="openSidebar = false"
            class="-m-2.5 rounded-md p-2.5 text-text-white"
          >
            <span class="sr-only">Close menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <ul class="space-y-2 py-6">
              <li 
                v-editable="menuLink" 
                v-for="menuLink in headerMenu" 
                :key="menuLink._uid"
              >
                <a 
                  :href="`/${menuLink.link.story.url}`"
                  @click="openSidebar = false"
                  class="-mx-3 block rounded-lg px-3 py-4 text-3xl leading-7 text-white"
                >
                  {{ menuLink.label }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Spotlight Teleport -->
    <Teleport to="body">
      <Spotlight :open-spotlight="openSpotlight" />
    </Teleport>
  </header>
</template>

<script setup>
import { useMagicKeys } from '@vueuse/core';

// =======================
// initialization variables
// =======================
const headerMenu = ref(null);
const logo = ref(null);
const openSidebar = ref(false);
const openSpotlight = ref(false);
const { Cmd_K, escape, Ctrl_K } = useMagicKeys()

// =======================
// Request Storyblok API and generate 'config'
// =======================
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

headerMenu.value = data.story.content.header_menu
logo.value = data.story.content.logo

// =======================
// Show Spotlight
// =======================

watch(Cmd_K, (v) => {
  if (v) {
    openSpotlight.value = !openSpotlight.value;

    if (openSpotlight.value == true) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
})
watch(Ctrl_K, (v) => {
  if (v) {
    openSpotlight.value = !openSpotlight.value;

    if (openSpotlight.value == true) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }
})
watch(escape, (v) => {
  if (v) {
    openSpotlight.value = false;
    document.body.classList.remove('overflow-hidden')
  }
})

// onMounted(() => {
//   console.log(navigator);
// })
</script>

<style lang="postcss" scoped>
a.router-link-active {
  @apply bg-brand-50;
}

a.router-link-active:has(img) {
  background: none;
}

/* a.router-link-active:active, 
a.router-link-active:focus, 
a.router-link-active:active, 
a.router-link-active:focus {              
  outline-color: #ffffff !important;
}

:focus {
  outline: 3px dotted#ffffff !important;
  outline-offset: 4px;
}

@media (prefers-reduce-motion: no-preference) {
  :focus-visible {
    transition: outline-offset 75ms ease-out;
  }

  :no(:active):focus-visible {
    transition-duration: .25ms;
  }
}

:no(:active):focus-visible {
  outline-offset: .5rem;
} */
</style>