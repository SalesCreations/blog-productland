<template>
  <div
    v-editable="blok"
    class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24"
  >
    <div class="col-span-12 lg:col-span-6 z-0" ref="textRef">
      <h2 class="font-display text-4xl sm:text-4xl font-black tracking-tight text-black">
        Register 📝
      </h2>
      <p class="mt-6 text-base leading-8 text-gray-800">
        Searching for your next career move whilst sending out multiple applications is time-consuming and stressful.
        <br><br>
        Save yourself hours of work by filling out our simple form and we’ll do the heavy lifting for you.
        <br><br>
        Once we receive your application, we’ll review your profile and if you are a possible match for some of our current roles, we’ll reach out to arrange a meeting.
        <br><br>
        If you don’t hear from us, don’t worry, we’ll keep you in mind for future roles that may be suitable.
      </p>
      <!-- <CldImage
        src="cld-sample-5"
        width="500"
        height="auto"
        class="mt-10"
        alt="My Awesome Image"
      /> -->
      <!-- <CldUploadButton uploadPreset="<Upload Preset>">Upload</CldUploadButton> -->
      <!-- <CldUploadWidget v-slot="{ open }" uploadPreset="nuxt-cloudinary-unsigned">
        <button type="button" @click="open">Upload an Image</button>
      </CldUploadWidget> -->
    </div>
    <div class="col-span-12 lg:col-span-6">
      <!-- <form class="contact-form" :action="`https://formbold.com/s/${config.public.formboldToken}`" method="POST"> -->
      <form 
        class="application-form" 
        name="application" 
        method="POST" 
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="application" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="first_name"
            class="mb-3 block text-base font-medium"
          >
            First Name <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          />
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <label
            for="last_name"
            class="mb-3 block text-base font-medium"
          >
            Last Name <span class="req text-red-500">*</span>
          </label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
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
            for="activity"
            class="mb-3 block text-base font-medium"
          >
            Area of ​​activity <span class="req text-red-500">*</span>
          </label>
          <select 
            name="activity" 
            id="activity"
            placeholder="Enter your phone number"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
            required
          >
            <option disabled="disabled" selected="selected">Please select...</option>
            <option value="po">Product Owner</option>
            <option value="pm">Product Manager</option>
            <option value="pd">Product Designer</option>
            <option value="vp">VP</option>
          </select>
        </fieldset>
        <fieldset class="mb-5 ease-in duration-300">
          <input
            type="file"
            name="curriculum"
            id="curriculum"
            accept=".doc,.docx,.pdf"
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
            Yes, I agree with the privacy policy and terms and conditions. <span class="req text-red-500">*</span>
          </label>
        </fieldset>
        <div>
          <Button class="flex mx-auto justify-center w-full" text="Register" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// defineProps({ blok: Object });
</script>

<style lang="postcss" scoped>
form:invalid button {
  @apply bg-gray-200 text-gray-400 pointer-events-none;
  box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -webkit-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
  -moz-box-shadow: 2px 2px 0px 0px rgba(0,0,0,1);
}
</style>