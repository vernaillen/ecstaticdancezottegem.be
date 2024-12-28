// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxtjs/plausible'
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'light'
  },

  plausible: {
    apiHost: 'https://ecstaticdancezottegem.be/plio'
  },

  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-12-28'
})