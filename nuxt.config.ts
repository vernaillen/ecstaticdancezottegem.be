// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui-pro',
    '@nuxt/content',
    '@nuxtjs/plausible'
  ],
  
  css: ['~/assets/css/main.css'],

  content: {
    studio: {
      enabled: true,
      gitInfo: {
        name: 'ecstaticdancezottegem.be',
        owner: 'vernaillen',
        url: 'https://github.com/vernaillen/ecstaticdancezottegem.be'
      }
    }
  },

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