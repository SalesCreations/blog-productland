<template>
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
            v-for="year in years" 
            :class="`mr-2 ${year == yearActive ? 'active':''}`" 
            :key="`year-${year}`"
          >
            <button
              :id="`tab-${year}`"
              role="tab"
              @click="changeYearActive(year)"
            >
              {{ year }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <StoryblokComponent
      v-for="blok in blok.events"
      v-show="yearActive === 'All' || $dayjs(blok.date).format('YYYY') === yearActive"
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

let yearActive = ref('All');
let years = ref(['All']);
years = useArrayUnique(years.value.concat(prop.blok.events.map(event => dayjs(event.date).format('YYYY'))))

function changeYearActive(year) {
  yearActive.value = year
}
</script>


<style lang="postcss" scoped>
  .date-tab ul li > button {
    @apply inline-block text-gray-500 hover:text-gray-600 hover:border-gray-300 rounded-t-lg py-4 px-4 text-sm font-medium text-center border-transparent border-b-2
  }
  .date-tab ul li.active > button {
    @apply text-brand-50 border-brand-300
  }
</style>
