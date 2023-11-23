const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'The Productland Blog',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
    },
  },
  css: ['@/assets/css/montserrat.css', '@/assets/css/open-sans.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.ACCESS_TOKEN_SB,
        bridge: true,
        apiOptions: {
          region: 'EU' // Set 'US" if your space is created in US region (EU default)
        },
        useApiClient: true
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    'dayjs-nuxt',
  ],
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  runtimeConfig: {
    public:  {
      accessTokenSb: process.env.ACCESS_TOKEN_SB,
      formboldToken: process.env.FORMBOLD_TOKEN
    }
  },
  devtools: {
    timeline: {
      enabled: true,
    },
  },
  experimental: {
    viewTransition: true
  }
})
