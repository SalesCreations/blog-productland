<template>
  <div class="col-span-12 xl:col-span-10 xl:col-start-2">
    <a :href="event.content.Link.url" target="_blank">
      <div 
        :class="`card-full relative flex w-full h-auto lg:h-32 rounded-xl bg-white bg-clip-border border border-gray-200 text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer ${new Date($dayjs(event.content.Date).format('MM-DD-YYYY')) < new Date($dayjs().format('MM-DD-YYYY')) ? 'opacity-50':'opacity-100'}`"
      >
        <div class="p-6 flex items-center grow">
          <div class="article-info">
            <h4 class="mb-2 block text-2xl font-black leading-snug tracking-normal text-blue-gray-900 antialiased">
              {{ event.content.Name || "New Event" }}
            </h4>
            <p class="date-time-info text-base">{{ event.content.Description || "New Event Description" }}</p>
          </div>
        </div>
        <div class="relative m-0 w-1/4 shrink-0 overflow-hidden rounded-xl rounded-l-none bg-brand-300 bg-clip-border text-white">
          <div class="date-info flex flex-col justify-center items-center h-full p-5">
            <time class="text-3xl font-black">{{ $dayjs(event.content.Date).format('MMM').toUpperCase()}}</time>
            <time class="text-5xl font-black">{{ $dayjs(event.content.Date).format('DD').toUpperCase()}}</time>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({ event: Object })
</script>
