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
      theme_color: '#0583f2',
      // icons: [
      //   {
      //     src: 'pwa-192x192.png',
      //     sizes: '192x192',
      //     type: 'image/png',
      //   },
      //   {
      //     src: 'pwa-512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //   },
      //   {
      //     src: 'pwa-512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //     purpose: 'any maskable',
      //   },
      // ],
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      client: {
        installPrompt: true,
        // you don't need to include this: only for testing purposes
        // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
        periodicSyncForUpdates: 20,
      },
      devOptions: {
        enabled: true,
        suppressWarnings: true,
        navigateFallbackAllowlist: [/^\/$/],
        type: 'module',
      },
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
