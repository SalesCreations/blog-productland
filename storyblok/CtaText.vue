<template>
  <div v-editable="blok" class="cta-text container mx-auto px-4 xl:px-36 grid gap-8 grid-cols-12 mt-14 mb-24 overflow-hidden">
    <div class="col-span-12">
      <div class="mx-auto rounded-3xl px-10 sm:px-32 py-20 text-center" :style="`background-color: ${blok.background_color.color}`">
        <h2 class="text-3xl sm:text-5xl font-display font-black leading-tight text-white mb-7">
          {{ blok.title || "New Title" }}
        </h2>
        <p class="mt-5 text-xl font-body leading-8 text-white mb-8">
          {{ blok.description || "New Description" }}
        </p>
        <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink class="button-cta-text" text="Book a demo" link="#"/>
          <Button class="button-cta-text" text="See Pricing" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style lang="postcss">
.cta-text a.button-cta-text {
  @apply w-full sm:w-auto
}
.cta-text button.button-cta-text,
.cta-text a.button-cta-text > button {
  @apply w-full sm:w-auto
}
.cta-text button.button-cta-text {
  @apply bg-purple-500
}
.cta-text a.button-cta-text > button {
  @apply bg-yellow-500
}
</style>
