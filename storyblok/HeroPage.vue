<template>
  <div v-editable="blok" id="hero-one" class="bg-brand-50 relative pt-24 pb-14 lg:pt-36 lg:pb-24">
    <div class="container mx-auto px-4 grid gap-5 grid-cols-12 cursor-pointer" ref="parallaxRef">      
      <div class="hero-content col-span-6 lg:col-span-5 z-10" ref="textRef">
        <h1 class="font-display text-5xl font-black tracking-tight text-white sm:text-5xl">{{ blok.title || "New Title" }}</h1>
        <p class="mt-6 text-base leading-8 text-white">{{ blok.description  || "New description" }}</p>
      </div>
      <div class="hero-content col-span-6 lg:col-span-7" ref="photoRef" :style="layer2">
        <img :src="blok.image?.filename" class="absolute right-0 -top-28 z-0"  alt="">
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
