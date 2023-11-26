<template>
  <div v-editable="blok" id="hero-one" class="bg-brand-50 relative pt-24 pb-14 lg:pt-36 lg:pb-24" :style="`background-color: ${blok.background.color}`">
    <div class="container mx-auto px-4 xl:px-16 grid gap-5 grid-cols-12 cursor-pointer">      
      <div class="hero-content col-span-6 lg:col-span-5 z-10" ref="textRef">
        <h1 class="font-display text-5xl sm:text-6xl font-black tracking-tight text-white">{{ blok.title || "New Title" }}</h1>
        <p class="mt-6 text-base leading-8 text-white">{{ blok.description  || "New description" }}</p>
      </div>
      <div class="hero-content col-span-6 lg:col-span-7 relative" ref="photoRef">
        <img :src="blok.image?.filename" class="absolute right-0 sm:-bottom-14 md:-bottom-28  z-0"  alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
