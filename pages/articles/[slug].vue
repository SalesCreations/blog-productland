<template>
  <!-- <pre class="mt-32">{{ story.content }}</pre> -->
  <div v-editable="story">
    <div class="container mx-auto px-4 grid gap-8 grid-cols-12 mt-40 mb-24">
      <div class="col-start-2 col-span-10">
        <NuxtLink
          class="author-info mb-4 flex items-center hover:underline hover:decoration-solid"
          :to="`../${author.full_slug}`"
        >
          <img
            class="inline-block h-6 w-6 rounded-full ring-2 ring-white mr-2"
            :src="author.content?.avatar.filename"
            alt=""
          />
          <p class="text-base font-medium">
            {{ author.content?.full_name }}
            <span class="italic font-light">wrote</span>
          </p>
        </NuxtLink>
        <h1 class="text-6xl font-black font-display mb-5">
          {{ story.content.title }}
        </h1>
        <p class="mb-7 date-time-info text-base text-brand-300">
          <time
            :datetime="
              story.published_at
                ? $dayjs(story.published_at).format('DD/MM/YYYY')
                : 'Not published yet'
            "
          >
            {{
              story.published_at
                ? $dayjs(story.published_at).format("DD/MM/YYYY")
                : "Not published yet"
            }}
          </time>
          • {{ readingTime() }} min read
          • #{{ story.content?.tag }}
        </p>

        <div
          class="hero-article w-full h-[480px] bg-slate-200 mb-10 rounded-3xl overflow-hidden"
        >
          <NuxtImg
            provider="storyblok"
            preload
            :placeholder="[112, 44]"
            :src="`${story.content.image.filename}`"
            alt="image"
            class="article-image w-full h-full object-cover"
          />
        </div>

        <article
          class="prose prose-slate max-w-4xl mx-auto prose-a:text-brand-100 hover:prose-a:text-brand-50 prose-img:mx-auto prose-img:w-full prose-headings:font-display prose-headings:font-black prose-h3:text-brand-300 prose-p:font-body"
        >
          <Vue3RuntimeTemplate :template="generalContent"></Vue3RuntimeTemplate>
        </article>
      </div>
    </div>

    <!-- <StoryblokComponent v-for="blok in articleComplements.content.article_complement" :key="blok._uid" :blok="blok" /> -->
  </div>
</template>

<script setup>
import cloneDeep from "clone-deep";
import Vue3RuntimeTemplate from "vue3-runtime-template";

// =======================
// initialization variables
// =======================

const { $preview } = useNuxtApp();
const route = useRoute();
const author = useState();
const generalContent = useState();

const version = $preview ? "draft" : "published";

const story = await useAsyncStoryblok(
  `articles/${route.params.slug}`,
  {
    version: version,
    resolve_relations: "author-picker.author",
  },
  {
    resolveRelations: ["author-picker.author"],
    resolveLinks: "url",
  }
);

// Load the bridge in preview mode
onMounted(() => {
  if ($preview && story.value && story.value.id) {
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory), {
      resolveRelations,
    });
  }
});

author.value = story.value.content.author[0].author;

const mySchema = cloneDeep(RichTextSchema); // you can make a copy of the default RichTextSchema
generalContent.value = computed(() =>
  renderRichText(story.value.content.content, {
    schema: mySchema,
    resolver: (component, blok) => {
      switch (component) {
        case "IframeYoutube":
          return `<component :blok='${JSON.stringify(
            blok
          )}' is="${component}" />`;
          break;
        case "IframeSpotify":
          return `<component :blok='${JSON.stringify(
            blok
          )}' is="${component}" />`;
          break;
        default:
          return "Resolver not defined";
      }
    },
  })
);

function readingTime() {
  let minutes = 0;
  const contentAsString = JSON.stringify(generalContent.value);
  const words = contentAsString.split(" ").length;
  const wordsPerMinute = 200;

  minutes = Math.ceil(words / wordsPerMinute);

  return minutes;
}

// =======================
// metatags
// =======================

useHead({
  title: () => story.value.content.seo?.title,
  meta: [
    {
      name: "description",
      content: () => story.value.content.seo?.description,
    },
    {
      property: "og:site_name",
      content: "The Productland",
    },
    {
      property: "og:title",
      content: () => story.value.content.seo?.title,
    },
    {
      property: "og:description",
      content: () => story.value.content.seo?.description,
    },
    {
      property: "og:image",
      content: () => story.value.content.seo?.og_image,
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:image",
      content: () => story.value.content.seo?.og_image,
    },
  ],
});
</script>
