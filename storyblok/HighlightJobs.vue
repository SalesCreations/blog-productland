<template>
  <section
    v-editable="blok"
    id="highlight-jobs" 
    class="bg-white relative pt-16 pb-20 lg:pt-20 lg:pb-24 z-0 bg-cover sm:bg-contain bg-right bg-no-repeat"
  >
    <h2 class="font-display text-4xl sm:text-4xl font-black tracking-tight text-brand-200 text-center mb-24">
      {{ blok.title || "New Title" }} <a :href="link" class="text-brand-50 underline">{{ blok.text_link || "New Text Link" }}</a>
    </h2>
    <div class="container mx-auto px-4 xl:px-16 grid gap-5 grid-cols-12 cursor-pointer">
      <div
        v-for="job in blok.jobs"
        :key="job._uid"
        class="col-span-12 sm:col-span-4"
      >
        <CardJob :job="job" />
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
const link = props.blok.link.linktype == "url" ? props.blok.link.url:props.blok.link.cached_url
</script>
