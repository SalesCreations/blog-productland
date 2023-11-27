<template>
  <div v-editable="story">
    <div
      class="bg-brand-50 pt-16 pb-20 mt-[70px] mb-32 text-group-white text-white font-body"
    >
      <div
        class="container mx-auto px-4 xl:px-16 flex flex-row flex-wrap items-center gap-5"
      >
        <div class="flex-none">
          <img
            class="w-40 h-40 rounded-full object-cover"
            :src="story.content.avatar?.filename"
            alt="User"
          />
        </div>

        <div class="flex flex-1 flex-col px-6">
          <div>
            <p>Author</p>
            <h1 class="text-5xl font-display font-black">
              {{ story.content.full_name }}
            </h1>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row mb-3">
              <div class="font-body font text-lg">
                <i>{{ story.content.role }}</i>
              </div>
            </div>

            <div class="-mx-2 flex mb-3">
              <a
                v-if="story.content.twitter"
                :href="`https://twitter.com/${story.content.twitter}`"
                rel="noreferrer"
                target="_blank"
                class="mx-2 text-white hover:text-brand-50 hover:scale-110 "
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
                v-if="story.content.instagram"
                :href="`https://www.instagram.com/${story.content.instagram}`"
                rel="noreferrer"
                target="_blank"
                class="mx-2 text-white hover:text-brand-50 hover:scale-110"
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
                v-if="story.content.linkedin"
                :href="`https://www.linkedin.com/in/${story.content.linkedin}`"
                rel="noreferrer"
                target="_blank"
                class="mx-2 text-white hover:text-brand-50 hover:scale-110"
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
                v-if="story.content.website"
                :href="`${story.content.website}`"
                rel="noreferrer"
                target="_blank"
                class="mx-2 text-white hover:text-brand-50 hover:scale-110"
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
                v-if="story.content.github"
                :href="`https://github.com/${story.content.github}`"
                rel="noreferrer"
                target="_blank"
                class="mx-2 text-white hover:text-brand-50 hover:scale-110"
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

            <div class="text-sm">
              <h4 class="text-base font-display font-black">
                About {{ story.content.full_name }}:
              </h4>
              <p class="text-base font-display">{{ story.content.bio }}</p>
            </div>
          </div>
        </div>

        <div class="mt-2 flex flex-row items-center h-full">
          <a
            href="#"
            class="flex w-40 h-40 flex-col items-center justify-center rounded-md border border-dashed border-white transition-colors duration-100 ease-in-out"
          >
            <div class="flex flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="mr-3"
              >
                <path
                  d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
                />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>

              <!-- <svg
                class="mr-3 fill-white"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z"
                />
              </svg> -->

              <span class="font-bold"> 4.6K </span>
            </div>

            <div class="mt-2 text-sm">Articles</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
</template>

<script setup>
const route = useRoute();
const story = await useAsyncStoryblok(`authors/${route.params.slug}`, {
  version: "draft",
});
</script>
