<template>
  <section v-editable="blok" class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24">
    <div class="col-start-2 col-span-10">
      <h2 class="text-4xl font-display font-black text-brand-300 mb-5">{{ blok.title }}</h2>

      <div 
        class="prose prose-slate max-w-none prose-img:mx-auto prose-headings:font-display prose-headings:font-black prose-p:font-body" 
        v-html="generalContent"
      ></div>
    </div>
  </section> 
</template>

<script setup>
  const props = defineProps({ blok: Object })
  const generalContent = computed(() =>
    renderRichText(props.blok.content)
  );
</script>
