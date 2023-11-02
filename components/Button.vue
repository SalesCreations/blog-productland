<template>
  <button class="button-default font-bold text-white bg-brand-100 p-5 rounded-2xl border-4 border-black ">
    Ver mais artigos
  </button>
</template>

<style lang="postcss" scoped>
.button-default {
  @apply transition ease-in-out delay-150 duration-300;
  box-shadow: 7px 7px 0px 0px rgba(0,0,0,1);
  -webkit-box-shadow: 7px 7px 0px 0px rgba(0,0,0,1);
  -moz-box-shadow: 7px 7px 0px 0px rgba(0,0,0,1);
}
.button-default:hover {
  @apply translate-x-1 translate-y-1;
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
}
</style>