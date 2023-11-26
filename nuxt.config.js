const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      title: 'The Productland Blog',
      meta: [{
        hid: 'theme-color',
        name: 'theme-color',
        content: '#0583f2'
      }],
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
    '@nuxtjs/device',
    '@vite-pwa/nuxt'
  ],
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'The Productland',
      short_name: 'The Productland',
      description: 'Literally, it is the Land of those who love Product Management. Content, with good humor, about Digital Product Management, Career and Technology!',
      theme_color: '#0583f2',
      background_color: '#0583f2',
      icons: [
        {
          src: 'pwa-logo-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-logo-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-logo-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
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
