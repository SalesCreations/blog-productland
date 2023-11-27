<template>
  <div v-editable="story">
    <div class=" bg-brand-50 p-6 mt-[70px] mb-32 text-group-white text-white font-body">
      <div class="container mx-auto px-4 xl:px-16 flex flex-row flex-wrap items-center gap-5">
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
            <h1 class="text-5xl font-display font-black">{{ story.content.full_name }}</h1>
          </div>

          <div class="flex flex-col">
            <div class="flex flex-row mb-3">
              <div class="font-body font text-lg">
                <i>{{ story.content.role }}</i>
              </div>
            </div>

            <div class="text-sm">
              <h4 class="text-base font-display font-black">About {{ story.content.full_name }}:</h4> 
              <p class="text-base font-display ">{{ story.content.bio }}</p>
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
              </svg>

              <span class="font-bold"> 4.6K </span>
            </div>

            <div class="mt-2 text-sm ">Articles</div>
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
