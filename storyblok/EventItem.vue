<template>
  <div v-editable="blok" class="col-span-12 xl:col-span-10 xl:col-start-2">
    <!-- <pre>{{ blok }}</pre> -->
    <a :href="blok.link.url" target="_blank">
      <div 
        class="card-full relative flex w-full h-32 rounded-xl bg-white bg-clip-border border border-gray-200 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
      >
        <div class="p-6 flex items-center grow">
          <div class="article-info">
            <h4 class="mb-2 block text-2xl font-black leading-snug tracking-normal text-blue-gray-900 antialiased">
              {{ blok.name || "New Event" }}
            </h4>
            <p class="date-time-info text-base">{{ blok.description || "New Event Description" }}</p>
          </div>
        </div>
        <div class="relative m-0 w-1/4 shrink-0 overflow-hidden rounded-xl rounded-l-none bg-brand-300 bg-clip-border text-white">
          <div class="date-info flex flex-col justify-center items-center p-5">
            <time class="text-3xl font-black">{{ $dayjs(blok.date).format('MMM').toUpperCase()}}</time>
            <time class="text-5xl font-black">{{ $dayjs(blok.date).format('DD').toUpperCase()}}</time>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
