<template>
  <!-- <pre class="mt-32">{{ author[0].author.content.full_name }}</pre> -->
  <div v-editable="story">
    <div class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-40 mb-24">
      <div class="col-start-2 col-span-10">
        <NuxtLink class="author-info mb-4 flex items-center" :to="`../${author.full_slug}`">
          
            <img class="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-2" :src="author.content?.avatar.filename" alt="">
            <p class="text-base font-medium">{{ author.content?.full_name }} <span class="italic font-light">wrote</span></p>
          
        </NuxtLink>
        <h1 class="text-6xl font-black font-display mb-5">{{ story.content.title }}</h1>
        <p class="mb-7 date-time-info text-base text-brand-300">
          <time :datetime="story.published_at ? $dayjs(story.published_at).format('DD/MM/YYYY'):'Not published yet'">
            {{ story.published_at ? $dayjs(story.published_at).format('DD/MM/YYYY'):'Not published yet' }}
          </time>  •  {{ readingTime() }} min read
        </p>

        <div class="hero-article w-full h-[480px] bg-slate-200 mb-10 rounded-3xl overflow-hidden">
          <NuxtImg
            provider="storyblok" 
            preload
            :placeholder="[112,44]"
            :src="`${story.content.image.filename}`"
            alt="image"
            class="article-image w-full h-full object-cover"
          />
        </div>

        <article 
          class="prose prose-slate max-w-4xl mx-auto prose-img:mx-auto prose-headings:font-display prose-headings:font-black prose-p:font-body" 
          v-html="generalContent"
        >
        </article>
      </div>
    </div>

    <!-- <StoryblokComponent v-for="blok in articleComplements.content.article_complement" :key="blok._uid" :blok="blok" /> -->
  </div>
</template>

<script setup>
// =======================
// initialization variables
// =======================

const route = useRoute();
const author = useState();
const generalContent = useState();

const story = await useAsyncStoryblok(`articles/${route.params.slug}`, 
  { version: "draft", resolve_relations: 'author-picker.author'},
  { resolveRelations: ['author-picker.author'], resolveLinks: 'url' }
);
author.value = story.value.content.author[0].author;

generalContent.value = computed(() =>
  renderRichText(story.value.content.content)
);

function readingTime() {
  let minutes = 0;
  const contentAsString = JSON.stringify(generalContent.value);
  const words = contentAsString.split(' ').length;
  const wordsPerMinute = 200;

  minutes = Math.ceil(words / wordsPerMinute)

  return minutes
}

// =======================
// metatags
// =======================

useHead({
  title: () => story.value.content.seo?.title,
  meta: [
    {
      name: 'description',
      content: () => story.value.content.seo?.description,
    },
    {
      property: 'og:site_name',
      content: 'The Productland',
    },
    {
      property: 'og:title',
      content: () => story.value.content.seo?.title,
    },
    {
      property: 'og:description',
      content: () => story.value.content.seo?.description,
    },
    {
      property: 'og:image',
      content: () => story.value.content.seo?.og_image,
    },
    {
      property: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      property: 'twitter:image',
      content: () => story.value.content.seo?.og_image,
    }
  ]
})
</script>