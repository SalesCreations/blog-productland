<template>
  <div v-editable="blok" class="min-w-screen flex items-center justify-center py-16 bg-white">
    <div
      class="w-full container mx-auto px-4 xl:px-16 grid gap-5 grid-cols-12 text-gray-800"
    >
      <div class="w-full mx-auto col-span-12">
        <div class="-mx-3 md:flex items-center">
          <div class="px-3 md:w-2/3 mb-10 md:mb-0">
            <h1 class="text-6xl md:text-8xl font-black font-display mb-5 leading-tight md:w-1/2">
              {{ blok.title || "New Title" }}
            </h1>
            <h3 class="text-gray-600 mb-7 leading-tight text-base font-body">
              {{ blok.subtitle || "New Subtitle" }}
            </h3>
            <div>
              <span
                :class="`inline-block w-40 h-1 rounded-full`"
                :style="`background-color: ${blok.color.color}`"
              ></span>
              <span
                :class="`inline-block w-3 h-1 rounded-full ml-1`"
                :style="`background-color: ${blok.color.color}`"
              ></span>
              <span
                :class="`inline-block w-1 h-1 rounded-full ml-1`"
                :style="`background-color: ${blok.color.color}`"
              ></span>
            </div>
          </div>
          <div class="px-3 md:w-1/3">
            <form
              class="newsletter-form" 
              name="newsletter" 
              method="POST" 
              action="/success"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="newsletter" />
              <p hidden>
                <label>Don’t fill this out: <input name="bot-field" /></label>
              </p>
              <div class="flex mb-3">
                <fieldset class="w-full">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@domain.com"
                    class="w-full rounded-md border-2 border-black bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
                    required
                  />
                </fieldset>
              </div>
              <div>
                <Button text="Subscribe now" class="w-full" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>

<style lang="postcss" scoped>
form:invalid button {
  @apply bg-gray-200 text-gray-400 pointer-events-none;
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
}
</style>