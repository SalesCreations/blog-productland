const isDev = process.env.NODE_ENV === 'development';

export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
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
  ],
  runtimeConfig: {
    public:  {
      accessTokenSb: process.env.ACCESS_TOKEN_SB,
    }
  },
})
