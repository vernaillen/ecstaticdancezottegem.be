// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxthq/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/plausible'
  ],
  css: [
    '@/assets/css/main.css'
  ],
  colorMode: {
    preference: 'light'
  },
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
