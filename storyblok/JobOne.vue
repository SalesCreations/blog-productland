<template>
  <section
    v-editable="blok"
    id="job-one"
    class="relative pt-32 pb-16 lg:pt-36 lg:pb-24 z-0 bg-cover sm:bg-contain bg-right bg-no-repeat"
    :style="{backgroundImage: `url(${blok.background_image?.filename})`}"
  >
    <div class="container mx-auto px-4 xl:px-16 grid gap-5 grid-cols-12 cursor-pointer">      
      <div class="col-span-6 lg:col-span-5 z-0" ref="textRef">
        <h2 class="font-display text-4xl sm:text-4xl font-black tracking-tight text-brand-200">
          {{ blok.title || "New title" }}
        </h2>
        <div v-html="blok.description" class="mt-6 text-base leading-8 text-gray-800"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({ blok: Object })
</script>