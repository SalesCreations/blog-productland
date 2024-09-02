<template>
  <section v-editable="blok" class="container mx-auto py-20 px-4 xl:px-16 grid gap-5 grid-cols-12 cursor-pointer">
    <div
      v-for="job in jobs"
      :key="job._uid"
      class="col-span-12 sm:col-span-4"
    >
      <CardJob :job="job" />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ 
  blok: {
    type: Object,
    default: {
      has_highlight: false,
    }
  }
})

const jobs = useState();

const storyblokApi = useStoryblokApi()
const { data: jobsData, error } = await storyblokApi.get('cdn/stories/', {
  version: 'published',
  starts_with: 'job-hunting',
  content_type: 'jobs',
  resolve_links: 'url',
  sort_by: 'published_at:desc',
  per_page: 100,
})

if(error) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Internal Server Error',
    fatal: true
  });
}

jobs.value = jobsData.stories
</script>