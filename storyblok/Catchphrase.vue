<template>
  <section
    v-editable="blok"
    id="job-cta" 
    class="bg-white relative pt-32 pb-16 lg:pt-36 lg:pb-24 z-0 bg-cover sm:bg-contain bg-right bg-no-repeat"
  >
    <div class="container mx-auto px-4 xl:px-16 grid gap-5 grid-cols-12 cursor-pointer">      
      <div class="col-span-12" ref="textRef">
        <div class="bg-brand-50 h-1 w-28 mb-5 mx-auto"></div>
        <blockquote class="text-brand-50 text-center font-black text-6xl">
          {{ blok.text || "New Catchphrase" }}
        </blockquote>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({ blok: Object })
</script>
