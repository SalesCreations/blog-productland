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
    [
      '@nuxtjs/algolia',
      {
        apiKey: process.env.ALGOLIA_SEARCH_API_KEY,
        applicationId: process.env.ALGOLIA_APP_ID,
        instantSearch: {
          theme: 'algolia'
        }
      },
    ],
    [
      '@nuxtjs/robots', 
      {
        rules: {
          UserAgent: '*',
          Disallow: ['/success', '/config']
        }
      }
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    'dayjs-nuxt',
    '@nuxtjs/device',
    '@vite-pwa/nuxt',
    '@dargmuesli/nuxt-cookie-control',
    '@zadigetvoltaire/nuxt-gtm'
  ],
  dayjs: {
    plugins: [
      'localeData',
    ] 
  },
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
  gtm: {
    id: process.env.GTM_ID,
    enabled: true,
    debug: true,
  },
  cookieControl: {
    barPosition: 'bottom-left',
    isCssEnabled: true,
    cookies: {
      necessary: [{
        name: {
          en: 'Default cookies',
        },
        description: {
          en: "Some cookies are required to provide core functionality. The website won't function properly without these cookies and they are enabled by default and cannot be disabled.",
        },
        targetCookieIds: ["cookie_control_consent", "cookie_control_enabled_cookies"]
      }],
      optional: [
        {
          name: 'Analytical cookies',
          identifier: 'gtm',
          description: 'Analytical cookies help us improve our website by collecting and reporting information on its usage.',
          src: `https://www.googletagmanager.com/gtag/js?id=${process.env.GTM_ID}`,
          async: true,
          cookies: ['_ga', '_ga_4BYCYQVE2P'],
          // accepted: () => {
          //   console.log('Google GTM ENABLED. ID=' + process.env.GTM_ID)
          // },
          // declined: () => {
          //   console.log('Google GTM not allowed')
          // }   
        },
      ],
    },
    isCookieIdVisible: false,
    isIframeBlocked: true,
    locales: ['en'],
  },
  runtimeConfig: {
    public:  {
      accessTokenSb: process.env.ACCESS_TOKEN_SB,
      algoliaSearchApiKey: process.env.ALGOLIA_SEARCH_API_KEY,
      algoliaApiId: process.env.ALGOLIA_APP_ID,
      gtmId: process.env.GTM_ID
    }
  },
  devtools: {
    timeline: {
      enabled: true,
    },
  },
  experimental: {
    viewTransition: true
  },
  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient)
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/articles',
        '/events',
        '/about',
        '/contact',
        '/authors',
        '/success',
        '/config',
      ]
    }
  }
})
