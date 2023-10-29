<template>
  <Navbar/>
</template>

<script setup>
const story = await useAsyncStoryblok('config', { version: 'draft' })
</script>