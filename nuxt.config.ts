// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/plausible',
    '@nuxtjs/tailwindcss'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  googleFonts: {
    download: true,
    inject: true,
    preconnect: true,
    display: 'swap',
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  plausible: {
    apiHost: 'https://ecstaticdancezottegem.be/plio'
  }
})
