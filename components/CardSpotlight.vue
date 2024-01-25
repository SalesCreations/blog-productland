<template>
  <NuxtLink :ref="`item_${item.__position}`" :to="item.pathname" :class="`flex item_${item.__position}`">
    <div class="bg-black/20 p-5 rounded-lg mr-3">
      <svg v-if="validatePathname(item.pathname.split('/')[1]) == 'Article'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
      <svg v-else-if="validatePathname(item.pathname.split('/')[1]) == 'Author'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
    </div>
    <div class="content">
      <p class="text-left text-xs">
        {{ validatePathname(item.pathname.split('/')[1]) }}
      </p>
      <h3 class="text-left text-lg font-black font-display">{{ truncate(item.title,40) }}</h3>
      <p class="text-left text-sm opacity-60">{{ truncate(item.description,70) }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({ item: Object })

function truncate(value, length) {
  if (value.length > length) {
    return value.substring(0, length) + "...";
  } else {
    return value;
  }
}

function validatePathname(value) {
  if (value == 'authors') {
    return 'Author';
  } else if (value == 'articles') {
    return 'Article'
  } else {
    return 'Page';
  }
}
</script>