<template>
  <section
    v-editable="blok"
    class="container mx-auto px-4 grid gap-8 gap-y-0 grid-cols-12 mt-14 mb-24"
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
            v-for="year in blok.years_of_event " 
            :class="`mr-2 ${year.year == yearActive ? 'active':''}`" 
            :key="`year-${year.year}`"
          >
            <button
              :id="`tab-${year}`"
              role="tab"
              @click="changeYearActive(year.year)"
            >
              {{ year.year }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="date-tab col-span-12 xl:col-span-10 xl:col-start-2">
      <div class="border-b border-gray-200">
        <ul
          class="flex flex-wrap -mb-px justify-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li
            v-for="month in months" 
            :class="`mr-2 ${month == monthActive ? 'active':''}`" 
            :key="`month-${month}`"
          >
            <button
              :id="`tab-${month}`"
              role="tab"
              @click="changeMonthActive(month)"
            >
              {{ month }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <!-- <EventItem
      v-for="event in events"
      v-show="yearActive === 'All' || $dayjs(event.date).format('YYYY') === yearActive"
      :key="event._uid"
      :event="event"
    /> -->
  </section>
</template>

<script setup>
import { useDayjs } from '#dayjs';
import { localeData } from 'dayjs/plugin/localeData';
import { useArrayUnique } from '@vueuse/core';


const dayjs = useDayjs();
const props = defineProps({ blok: Object });

// const events = useState();
// const storyblokApi = useStoryblokApi()
// const { data: eventsData } = await storyblokApi.get('cdn/stories/', {
//   version: 'draft',
//   starts_with: 'events',
//   content_type: 'Events',
//   resolve_links: 'url',
// })

// events.value = eventsData.stories

const months = ref(dayjs.monthsShort());
let yearActive = ref(dayjs().format('YYYY'));
let monthActive = ref(dayjs().format('MMM'));

console.log(months.value);

// years = useArrayUnique(years.value.concat(events.value.map(event => dayjs(event.date).format('YYYY'))))

function changeYearActive(year) {
  yearActive.value = year
}
function changeMonthActive(month) {
  monthActive.value = month
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
