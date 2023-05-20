// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/plausible',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    '@/assets/css/main.css',
  ],
  googleFonts: {
    download: true,
    preconnect: true,
    display: 'swap',
    families: {
      Ubuntu: [400, 500, 700],
    },
  },
  plausible: {
    apiHost: 'https://ecstaticdancezottegem.be/plio',
  },
})
