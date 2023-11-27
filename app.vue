<template>
  <NuxtPwaManifest />
  <CookieControl>
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
  </CookieControl>

  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup>
const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl()

// watch(
//   () => cookiesEnabledIds.value,
//   (current, previous) => {
//     if (
//       !previous?.includes('google-analytics') &&
//       current?.includes('google-analytics')
//     ) {
//       // cookie with id `google-analytics` got added
//       window.location.reload() // placeholder for your custom change handler
//     }
//   },
//   { deep: true },
// )
</script>

<style lang="postcss">
.cookieControl__BarContainer {
  @apply fixed max-w-md p-4 mx-auto bg-white border border-gray-200 left-6 bottom-5 rounded-2xl shadow-2xl z-40 text-gray-600 ;
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
</style>