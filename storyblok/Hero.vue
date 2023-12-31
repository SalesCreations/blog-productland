<template>
  <div v-editable="blok" id="hero-one" class="bg-white overflow-hidden relative pt-32 lg:pt-32 pb-5 sm:pb-10 lg:pb-20">
    <div class="container mx-auto px-4 xl:px-16 grid gap-5 grid-cols-12 cursor-pointer" ref="parallaxRef">
      <NuxtImg 
        provider="storyblok"
        preload
        :src="blok.elements?.filename" 
        class="w-full absolute right-0 -top-4 z-0" 
        alt="" 
        ref="imageRef" 
        :style="layer0" 
      />
      
      <div class="hero-content col-start-3 col-span-8 text-center z-0 lg:px-24" ref="textRef" :style="layer1">
        <h1 class="font-display text-4xl lg:text-5xl font-black tracking-tight text-gray-900 sm:text-5xl">{{ blok.title || "New Title" }}</h1>
        <p class="mt-6 mb-7 text-base leading-8 text-gray-600">{{ blok.description  || "New description" }}</p>

        <ButtonLink 
          class="button-hero"
          :text="blok.text_button || 'Text Button Two'" 
          :link="link" 
          :linktype="blok.link.linktype"
        />
      </div>

      <div class="hero-content col-span-12 mt-10 lg:mt-16 z-0" ref="photoRef" :style="layer2">
        <NuxtImg 
          provider="storyblok" 
          preload
          :placeholder="[112,44]"
          :src="blok.photography?.filename" 
          class="w-full" 
          alt="" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useParallax } from '@vueuse/core'

const props = defineProps({ blok: Object })
const link = props.blok.link.linktype == "url" ? props.blok.link.url:props.blok.link.cached_url

const parallaxRef = ref(null)
const parallax = reactive(useParallax(parallaxRef))

const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * 10}px) translateY(${
    parallax.roll * 10
  }px) scale(1.01)`,
}))

const layer1 = computed(() => ({
  transform: `translateX(${parallax.tilt * 20}px) translateY(${
    parallax.roll * 20
  }px)`,
}))

const layer2 = computed(() => ({
  transform: `translateX(${parallax.tilt * 30}px) translateY(${
    parallax.roll * 30
  }px)`,
}))
</script>

<style lang="postcss">
.hero-content a.button-hero {
  @apply w-full sm:w-auto
}
.hero-content a.button-hero > button {
  @apply w-full sm:w-auto py-3 px-6 bg-pink-500
}
</style>

