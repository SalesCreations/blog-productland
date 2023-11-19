<template>
  <!-- <pre>{{ blok.content }}</pre> -->
  <div v-editable="blok" class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24">
    <div class="col-start-2 col-span-10">
      <h2 class="text-4xl font-display font-black text-brand-300 mb-5">{{ blok.title }}</h2>

      <div class="general-content" v-html="generalContent"></div>
    </div>
  </div> 
</template>

<script setup>
  const props = defineProps({ blok: Object })
  const generalContent = computed(() =>
    renderRichText(props.blok.content)
  );
</script>

<style lang="postcss">
  .general-content p {
    @apply font-body text-base mb-5
  }
  .general-content h3 {
    @apply font-display font-black text-lg mb-5
  }
  .general-content img {
    @apply my-12 mx-auto
  }
</style>
