<template>
  <div :class="`filter-spotlight relative z-50 ${ openSpotlight ? 'ease-out duration-300 visible ':'ease-in duration-200 invisible'}`" aria-labelledby="modal-title">
    <div 
      id="spotlight_filter" 
      :class="`transition-opacity ${ openSpotlight ? 'duration-300 opacity-100 ':'duration-200 opacity-0'}`" 
    ></div>
    
    <div id="spotlight_wrapper">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 h-40" @click.prevent.self="closeSpotlight">
        <ais-instant-search 
          id="spotlight_search_area"
          :class="`transition ${ openSpotlight ? 'ease-out duration-300 pacity-100 translate-y-0 sm:scale-100':'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`"
          :index-name="indexName" 
          :search-client="algolia"
        >
          <ais-search-box 
            aria-placeholder="Search articles"
            placeholder="Search articles"
          />
          <kbd class="text-sm font-body font-light bg-slate-500 border border-slate-800 text-slate-200 fixed p-1 rounded right-3 top-3">esc</kbd>
          
          <ais-hits id="spotlight_results" class="h-full overflow-y-scroll overflow-x-hidden justify-center max-h-[78%] -mt-5" :escape-HTML="true" v-kbd-trap.roving>
            <template v-slot:item="{ item }">
              <CardSpotlight :item="item" @click="closeSpotlight" />
            </template>
          </ais-hits>
          <div id="spotlight_results-base" class="w-full h-14 border-t-2 border-black border-opacity-5 fixed bottom-0 px-5">
            <a href="https://www.algolia.com/developers/?utm_medium=referral&utm_content=powered_by&utm_source=theproductland&utm_campaign=docsearch" target="_blank" rel="noopener noreferrer" class="h-full flex justify-end items-center gap-2 text-gray-300 text-sm">
              <span>Search by</span><img src="~/assets/images/Algolia-logo-white.svg" class="w-20 text-gray-300">
            </a>
          </div>
        </ais-instant-search>
      </div>
    </div>

    <!-- <div id="spotlight_wrapper" @click="closeSpotlight"></div> -->
  </div>
</template>

<script setup>
import { AisInstantSearch, AisSearchBox, AisHits } from 'vue-instantsearch/vue3/es'
import { VueKeyboardTrapDirectiveFactory } from '@pdanpdan/vue-keyboard-trap';

const emit = defineEmits()
const props = defineProps({ 
  openSpotlight: {
    type: Boolean,
    default: ref(false)
  } 
})

const indexName = 'netlify_e6d0003e-a354-4b37-8fba-fa6069e734f6_main_all'
const algolia = useAlgoliaRef()

const vKbdTrap = VueKeyboardTrapDirectiveFactory({ 
  
}).directive;

function closeSpotlight() {
  emit('close-spot')
}
</script>

<style lang="postcss">
#spotlight_filter {
  @apply fixed inset-0 bg-opacity-75 transition-opacity;
  background: rgba(0, 0, 0, 0.8);
}
#spotlight_wrapper {
  @apply fixed left-0 right-0 w-screen z-50 inset-0 overflow-y-auto
}
#spotlight_search_area {
  @apply overflow-hidden rounded-xl block h-[500px] bg-black bg-opacity-5 order-2 border-black border-opacity-5 outline-none relative;
  backdrop-filter: saturate(300%) blur(25px);
}
#spotlight_search_area .ais-SearchBox-input {
  @apply rounded-xl rounded-b-none block w-[628px] h-14 m-auto border-2 border-black border-opacity-5 outline-none text-2xl text-white bg-transparent bg-opacity-0 bg-no-repeat bg-[length:3.5%] py-0 px-12;
  background-position: left 17px center;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
  backdrop-filter: saturate(300%) blur(25px);
  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjIuNyAyMi41IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMi43IDIyLjUiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NzY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3g9IjguMSIgY3k9IjguNCIgcj0iNi44Ii8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2NzY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjEzLjIiIHkxPSIxMi45IiB4Mj0iMjEuNSIgeTI9IjIxLjQiLz48L3N2Zz4=);
  @include border-radius(5px);
  @include appearance(none);
  @include box-shadow(0 25px 60px 10px rgba(0,0,0,0.3));
  @include input-placeholder {
    color: #666666;
  }
}
#spotlight_search_area button.ais-SearchBox-reset {
  @apply right-12 z-50
}
#spotlight_search_area button.ais-SearchBox-reset svg path {
  @apply fill-white
}
#spotlight_search_area .ais-SearchBox-submit {
  @apply hidden
}
#spotlight_results ol.ais-Hits-list {
  @apply w-[628px] flex flex-col m-0 p-2 gap-2
}
#spotlight_results ol.ais-Hits-list li.ais-Hits-item {
  @apply w-full shadow-none p-0 m-0 border-0
}
#spotlight_results ol.ais-Hits-list li.ais-Hits-item a {
  @apply p-5 m-0 rounded-md text-white bg-black/25 border-0 hover:bg-black/50 transition-all cursor-pointer
}
#spotlight_results > ol.ais-Hits-list > li.ais-Hits-item a:focus,
#spotlight_results > ol.ais-Hits-list > li.ais-Hits-item a:focus-within,
#spotlight_results > ol.ais-Hits-list > li.ais-Hits-item a:focus-visible,
#spotlight_results > ol.ais-Hits-list > li.ais-Hits-item a:visited {
  @apply bg-black/50 transition-all border-0 outline-none
}

#spotlight_results > ol.ais-Hits-list > li.ais-Hits-item:focus {
  @apply bg-red-700
}
</style>
