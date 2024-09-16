<template>
  <section
    v-editable="blok"
    id="job-cta" 
    class="bg-brand-50 relative pt-32 pb-16 lg:pt-36 lg:pb-24 z-0 bg-cover sm:bg-contain bg-right bg-no-repeat"
  >
    <div class="container mx-auto px-4 xl:px-16 grid gap-5 grid-cols-12 cursor-pointer">      
      <div class="col-span-12 sm:col-start-2 sm:col-span-5 z-0" ref="textRef">
        <h2 class="font-display text-4xl sm:text-4xl font-black tracking-tight text-white">
          {{ blok.title || "New title" }}
        </h2>
        <div v-html="blok.description" class="mt-6 mb-6 text-base leading-8 text-white"></div>
        <ButtonLink :link="linkButton" :text="blok.text_button || 'New title'" target="_self" color="bg-pink-500"/>
      </div>
      <div class="col-span-12 sm:col-span-5" ref="photoRef">
        <img :src="blok.image?.filename" class="rounded-xl border-2 border-black w-full"  alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({ blok: Object })
  const linkButton = props.blok.link_button.linktype == "url" ? props.blok.link_button.url:props.blok.link_button.cached_url
</script>
