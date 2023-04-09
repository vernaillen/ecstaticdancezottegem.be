// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '@/assets/css/main.css',
    'animate.css/animate.min.css',
  ],
  googleFonts: {
    download: true,
    preconnect: true,
    display: 'swap',
    families: {
      Ubuntu: [400, 500, 700],
    },
  },
})
