<template>
  <NuxtPwaManifest />
  <CookieControl v-if="!$preview">
    <template #bar>
      <h2 class="font-semibold text-gray-800 ">
        🍪 We use cookies!
      </h2>

      <p class="mt-4 text-sm text-gray-600 ">
        Hi, this website uses essential cookies to ensure its proper operation and
        tracking cookies to understand how you interact with it. The latter will
        be set only after consent.
        <a
          href="#"
          class="font-medium text-gray-700 underline transition-colors duration-300 hover:text-blue-500"
          >Let me choose</a
        >.
        <span class="mt-3 block"></span>
        Closing this modal default settings will be saved.
      </p>
    </template>
    <template #modal>
      <h2>Your Privacy Choices</h2>
      <p>In this panel you can express some preferences related to the processing of your personal information.You may review and change expressed choices at any time by resurfacing this panel via the provided link.To deny your consent to the specific processing activities described below, switch the toggles to off or use the “Decline all” button and confirm you want to save your choices.</p>
    </template>
  </CookieControl>

  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const { $preview } = useNuxtApp();
</script>

<style lang="postcss">
.cookieControl {
  @apply z-30;
}
/* Custom Cookie #Bar */
.cookieControl__BarContainer {
  @apply fixed max-w-md p-4 mx-auto bg-white border border-gray-200 left-6 bottom-5 rounded-2xl shadow-2xl z-30 text-gray-600 ;
}
.cookieControl__BarContainer h2 {
  @apply font-semibold text-gray-800 text-base;
}
.cookieControl__BarContainer p {
  @apply mt-4 text-sm text-gray-600;
}
.cookieControl__BarButtons {
  @apply grid grid-cols-2 gap-4 mt-4 shrink-0 w-full;
}
.cookieControl__BarButtons button:nth-child(1) {
  @apply text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white hover:text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none;
}
.cookieControl__BarButtons button {
  @apply text-xs border border-gray-200 border-solid text-gray-800 font-medium hover:bg-gray-100 hover:text-gray-800 rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none;
}
.cookieControl__BarButtons button:nth-child(3) {
  @apply col-span-2
}
.cookieControl__Bar button + button {
  @apply ml-0 m-0
}
/* Custom Cookie #Modal */
.cookieControl__ModalContent {
  @apply rounded-xl relative max-w-3xl;
}
button.cookieControl__ModalClose {
  @apply invisible absolute top-3 right-0 h-0 w-0 
}
button.cookieControl__ModalClose:after {
  @apply absolute top-1 right-5 text-xs text-gray-800 font-medium bg-white hover:bg-gray-100 hover:text-gray-800 rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none visible;
  content:'X'; 
}
.cookieControl__ModalButtons {
  @apply grid grid-cols-3 gap-4 mt-4 shrink-0 w-full;
}
.cookieControl__ModalButtons button:nth-child(1) {
  @apply text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white hover:text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none;
}
.cookieControl__ModalButtons button {
  @apply text-xs border border-gray-200 border-solid text-gray-800 font-medium bg-white hover:bg-gray-100 hover:text-gray-800 rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none;
}
</style>