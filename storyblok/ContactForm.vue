<template>
  <div
    v-editable="blok"
    class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24"
  >
    <div class="col-span-12 lg:col-span-6 lg:col-start-4">
      <!-- <form class="contact-form" :action="`https://formbold.com/s/${config.public.formboldToken}`" method="POST"> -->
      <form 
        class="contact-form" 
        name="contact" 
        method="POST" 
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="name"
            class="mb-3 block text-base font-medium"
          >
            Full Name <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="email"
            class="mb-3 block text-base font-medium"
          >
            Email <span class="req text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="subject"
            class="mb-3 block text-base font-medium"
          >
            Subject <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <fieldset class="message-fieldset mb-5 ease-in duration-300">
          <label
            for="message"
            class="mb-3 block text-base font-medium"
          >
            Message <span class="req text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Type your message"
            class="w-full resize-none rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          ></textarea>
        </fieldset>
        <div>
          <Button class="flex mx-auto justify-center w-full sm:w-auto" text="Send Message" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="postcss" scoped>
form:invalid button {
  @apply bg-gray-200 text-gray-400 pointer-events-none;
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
}
</style>