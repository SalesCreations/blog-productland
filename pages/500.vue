<template>
  <NuxtLayout name="404">
    <div class="error-message">
      <h1 title="500">500</h1>
      <p>Things are a little unstable here</p>
      <p class="message-link">
        I suggest come back later.
      </p>
    </div>
  </NuxtLayout>
</template>

<script setup scope>

// =======================
// initialization variables
// =======================

const error = useError();

// config layout
definePageMeta({
  layout: '404'
})

// =======================
// redirect and clear error
// =======================

const handleError = () => {
  clearError({
    redirect: "/",
  });
};

// =======================
// metatags
// =======================

useHead({
  title: () => 'Error 500 - Internal Server Error',
  meta: [
    {
      name: 'description',
      content: () => "Things are a little unstable here",
    },
    {
      property: 'og:site_name',
      content: 'The Productland',
    },
    {
      property: 'og:title',
      content: () => 'Error 500 - Internal Server Error',
    },
    {
      property: 'og:description',
      content: () => "Things are a little unstable here",
    },
    {
      property: 'og:image',
      content: () => 'https://a.storyblok.com/f/254555/1200x627/e00811f8a7/thumbnail-site.png',
    },
    {
      name: 'Algolia crawler',
      content: () => 'noindex,nofollow',
    }
  ]
})
</script>

<style lang="postcss" scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Mono:400');

.error-message {
  @apply flex flex-col w-screen h-screen items-center justify-center m-0 bg-[#131313] text-center;
  font-family: 'Fira Mono', monospace;
}
.error-message > h1 {
  @apply text-white text-9xl tracking-wider m-0 text-center mb-2;
  animation: glitch 1s linear infinite;
}

.error-message > p {
  @apply text-white text-xl tracking-wider;
}

.error-message > p.message-link {
  @apply mt-6 text-lg
}

.error-message > p.message-link > a {
  @apply text-brand-200 hover:text-brand-50 cursor-pointer underline decoration-1;
}

@keyframes glitch {
  2%,64% {
    transform: translate(2px,0) skew(0deg);
  }
  4%,60% {
    transform: translate(-2px,0) skew(0deg);
  }
  62% {
    transform: translate(0,0) skew(5deg); 
  }
}

.error-message > h1:before,
.error-message > h1:after {
  content: attr(title);
  position: absolute;
  left: 50%;
  margin-left: -50%;
}

.error-message > h1:before {
  animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}

@keyframes glitchTop {
  2%,64% {
    transform: translate(2px,-2px);
  }
  4%,60% {
    transform: translate(-2px,2px);
  }
  62% {
    transform: translate(13px,-1px) skew(-13deg); 
  }
}
.error-message > h1:after {
  animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

@keyframes glitchBotom {
  2%,64% {
    transform: translate(-2px,0);
  }
  4%,60% {
    transform: translate(-2px,0);
  }
  62% {
    transform: translate(-22px,5px) skew(21deg); 
  }
}
</style>