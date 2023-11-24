<template>
<div :class="`filter-spotlight relative z-50 ${showSpotlight ? 'ease-out duration-300 visible ':'ease-in duration-200 invisible'}`" aria-labelledby="modal-title" >
  <div id="spotlight_filter" :class="`transition-opacity ${showSpotlight ? 'duration-300 opacity-100 ':'duration-200 opacity-0'}`"></div>
  <div id="spotlight_wrapper">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 h-40">
      <div 
        id="spotlight_search_area" 
        :class="`transition ${showSpotlight ? 'ease-out duration-300 pacity-100 translate-y-0 sm:scale-100':'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}`"
      >
        <input type="text" id="spotlight" placeholder="Search articles" />
        <div id="spotlight_results" class="flex flex-col justify-center min-h-[85%]">
          <p class="text-white my-auto">No recent searches</p>

          <div id="spotlight_results-base" class="w-full h-14 border-t-2 border-black border-opacity-5 fixed bottom-0 px-5">
            <a href="#" target="_blank" rel="noopener noreferrer" class="h-full flex justify-end items-center gap-2 text-gray-300 text-sm">
              <span>Search by</span><img src="~/assets/images/Algolia-logo-white.svg" class="w-20 text-gray-300">
            </a>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import { useMagicKeys } from '@vueuse/core';

let showSpotlight = ref(false);
const keys = useMagicKeys();
const cmdK = keys['Cmd+K'];

watch(cmdK, (v) => {
  if (v) {
    showSpotlight.value = !showSpotlight.value;
    // console.log('Cmd + K have been pressed');
  }
})
</script>

<style lang="postcss" scoped>
#spotlight_filter {
  @apply fixed inset-0 bg-opacity-75 transition-opacity;
  background: rgba(0, 0, 0, 0.8);
}
#spotlight_wrapper {
  @apply fixed left-0 right-0 w-screen z-50 inset-0 overflow-y-auto
}
#spotlight_search_area {
  @apply overflow-hidden rounded-xl block h-96 bg-black bg-opacity-5 order-2 border-black border-opacity-5 outline-none relative;
  backdrop-filter: saturate(300%) blur(25px);
}
#spotlight {
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
</style>
