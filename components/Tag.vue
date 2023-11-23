<template>
  <span class="simple-tag text-sm font-regular text-black bg-brand-200 py-1 px-3 rounded border border-black" to="/articles">
    {{ content }}
  </span>
</template>

<script setup>
  defineProps({ content: String })
</script>