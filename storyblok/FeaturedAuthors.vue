<template>
  <section v-editable="blok" class="bg-white py-12">
    <div
      class="container mx-auto px-4 xl:px-16 py-12 rounded-xl grid gap-8 grid-cols-12 bg-gray-100"
    >
      <div class="col-span-12">
        <h1 class="text-4xl font-display font-black capitalize text-gray-800">
          {{ blok.title || "New Title" }}
        </h1>

        <p class="font-body text-base my-6 max-w-2xl text-gray-500">
          {{ blok.description || "New Description" }}
        </p>
      </div>

      <div class="snap-x w-full flex overflow-x-auto gap-8 col-span-12">
        <!-- first:pl-6 last:mr-[calc(100%-21.5rem)] -->
        <div
          v-for="author in blok.authors"
          :key="author._uid"
          class="snap-start shrink-0 relative col-span-6 lg:col-span-3 group flex transform cursor-pointer flex-col items-center rounded-xl p-2 lg:p-8 transition-colors duration-300 hover:bg-blue-600 min-w-[25%]"
        >
          <NuxtLink class="author-link flex flex-col items-center" :to="author.full_slug">
            <img
              class="h-24 lg:h-32 w-24 lg:w-32 rounded-full object-cover ring-4 ring-gray-300"
              :src="author.content.avatar.filename"
              alt=""
            />

            <h1
              class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white"
            >
              {{ author.content.full_name }}
            </h1>

            <p class="mt-2 text-xs text-gray-500 group-hover:text-gray-300">
              {{ author.content.role }}
            </p>
          </NuxtLink>

          <div class="-mx-2 mt-3 flex">
            <a
              v-if="author.content.twitter"
              :href="`https://twitter.com/${author.content.twitter}`"
              rel="noreferrer"
              target="_blank"
              class="mx-2 text-gray-600 hover:text-brand-50 hover:scale-110 group-hover:text-white "
              aria-label="Twitter"
            >
              <svg
                class="h-4 lg:h-6 w-4 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                />
              </svg>
            </a>

            <a
              v-if="author.content.instagram"
              :href="`https://www.instagram.com/${author.content.instagram}`"
              rel="noreferrer"
              target="_blank"
              class="mx-2 text-gray-600 hover:text-brand-50 hover:scale-110 group-hover:text-white"
              aria-label="Instagram"
            >
              <svg
                class="h-4 lg:h-6 w-4 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <a
              v-if="author.content.linkedin"
              :href="`https://www.linkedin.com/in/${author.content.linkedin}`"
              rel="noreferrer"
              target="_blank"
              class="mx-2 text-gray-600 hover:text-brand-50 hover:scale-110 group-hover:text-white"
              aria-label="LinkdIn"
            >
              <svg
                class="h-4 lg:h-6 w-4 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path
                  d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            <a
              v-if="author.content.website"
              :href="`${author.content.website}`"
              rel="noreferrer"
              target="_blank"
              class="mx-2 text-gray-600 hover:text-brand-50 hover:scale-110 group-hover:text-white"
              aria-label="Site"
            >
              <svg
                class="h-4 lg:h-6 w-4 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                <path d="M2 12h20" />
              </svg>
            </a>

            <a
              v-if="author.content.github"
              :href="`https://github.com/${author.content.github}`"
              rel="noreferrer"
              target="_blank"
              class="mx-2 text-gray-600 hover:text-brand-50 hover:scale-110 group-hover:text-white"
              aria-label="Github"
            >
              <svg
                class="h-4 lg:h-6 w-4 lg:w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <path
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>
