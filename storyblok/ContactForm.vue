<template>
  <div
    v-editable="blok"
    class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-14 mb-24"
  >
    <div class="col-span-6 col-start-4">
      <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="mb-5">
          <label
            for="name"
            class="mb-3 block text-base font-medium"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="mb-3 block text-base font-medium"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@domain.com"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
          />
        </div>
        <div class="mb-5">
          <label
            for="subject"
            class="mb-3 block text-base font-medium"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Enter your subject"
            class="w-full rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
          />
        </div>
        <div class="mb-5">
          <label
            for="message"
            class="mb-3 block text-base font-medium"
          >
            Message
          </label>
          <textarea
            rows="4"
            name="message"
            id="message"
            placeholder="Type your message"
            class="w-full resize-none rounded-md border-2 border-black bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-brand-50"
          ></textarea>
        </div>
        <div>
          <Button text="Submit" link="/articles" />
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
