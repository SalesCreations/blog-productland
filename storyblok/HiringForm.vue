<template>
  <div
    v-editable="blok"
    class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24"
  >
    <div class="col-span-12 lg:col-span-6 z-0" ref="textRef">
      <h2 class="font-display text-4xl sm:text-4xl font-black tracking-tight text-black">
        {{ blok.title }}
      </h2>
      <div v-html="blok.description" class="mt-6 text-base leading-8 text-gray-800"></div>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <form 
        class="hiring-form" 
        name="hiring" 
        method="POST" 
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="hiring" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <p class="font-black mb-4">Tell us about the vacancy</p>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="first_name"
            class="mb-3 block text-base font-medium"
          >
            Position you are hiring for <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Position Name"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="activity"
            class="mb-3 block text-base font-medium"
          >
            Type of request <span class="req text-red-500">*</span>
          </label>
          <select 
            name="activity" 
            id="activity"
            placeholder="Enter your phone number"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          >
            <option disabled="disabled" selected="selected">Please select...</option>
            <option value="permanent">Permanent</option>
            <option value="contract">Contract</option>
          </select>
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="location"
            class="mb-3 block text-base font-medium"
          >
            Location <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="ex. United State, Brazil"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <p class="font-black mb-4">Tell us about the vacancy</p>
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
            Work Email <span class="req text-red-500">*</span>
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
            for="company"
            class="mb-3 block text-base font-medium"
          >
            Company <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company name"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="company"
            class="mb-3 block text-base font-medium"
          >
            Job title <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="job-title"
            id="job-title"
            placeholder="Job title name"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <input
            type="checkbox"
            name="gdpr"
            id="gdpr"
            class=""
            required
          />
          <label
            for="gdpr"
            class=""
          >
            Yes, I agree with privacy policy. <span class="req text-red-500">*</span>
          </label>
        </fieldset>
        <div>
          <Button class="flex mx-auto justify-center w-full" text="Subimit your vacancy" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style lang="postcss" scoped>
form:invalid button {
  @apply bg-gray-200 text-gray-400 pointer-events-none;
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
}
</style>