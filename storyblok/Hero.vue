<template>
  <div v-editable="blok" id="hero-one" class="bg-gray-50 relative py-32">
    <div class="container mx-auto px-4 grid gap-5 grid-cols-12" ref="parallaxRef">
      <img :src="blok.elements?.filename" class="w-full absolute right-0 -top-4 z-0" alt="" ref="imageRef" :style="layer0">
      
      <div class="hero-content col-start-3 col-span-8 text-center z-10 lg:px-24" ref="textRef" :style="layer1">
        <h1 class="font-display text-5xl font-black tracking-tight text-gray-900 sm:text-5xl">{{ blok.title || "New Title" }}</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">{{ blok.description  || "New description" }}</p>
      </div>

      <div class="hero-content col-span-12 mt-32 z-20" ref="photoRef" :style="layer2">
        <img :src="blok.photography?.filename" class="w-full"  alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useParallax } from '@vueuse/core'

defineProps({ blok: Object })

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
