<template>
  <!-- <pre>{{ blok.events }}</pre> -->
  <div
    v-editable="blok"
    class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24"
  >
    <div class="date-tab col-span-12 xl:col-span-10 xl:col-start-2">
      <div class="border-b border-gray-200">
        <ul
          class="flex flex-wrap -mb-px justify-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li 
            class="mr-2" 
            role="presentation"
            v-for="year in years"
            :key="`year-${year}`"
          >
            <button
              class="inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2 dark:text-gray-400 dark:hover:text-gray-300"
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              {{ year }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <StoryblokComponent
      v-for="blok in blok.events"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
import { useDayjs } from '#dayjs'
import { useArrayUnique } from '@vueuse/core'

const dayjs = useDayjs()
const prop = defineProps({ blok: Object });
let years = ['All'];

years = useArrayUnique(years.concat(prop.blok.events.map(event => dayjs(event.date).format('YYYY'))))
</script>
