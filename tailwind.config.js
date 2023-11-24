module.exports = {
  content: ['storyblok/**/*.{vue,js}', 'components/**/*.{vue,js}', 'pages/**/*.vue'],
  theme: {
    fontFamily: {
      display: 'Montserrat, sans-serif',
      body: 'Open Sans, sans-serif',
    },
    extend: {
      colors: {
        brand: {
          50:  '#0554F2',
          100: '#056CF2',
          200: '#91BBF2',
          300: '#0583F2',
          400: '#F2F2F2',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
