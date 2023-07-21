<script setup lang="ts">
const title = 'Ecstatic Dance Zottegem'
useHead({
  title,
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: 'description',
      content: 'Healing power of Sound, Music & Dance'
    },
    {
      property: 'og:title',
      content: title
    }
  ],
  link: [
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
      href: '/fonts/58405e358c3b387807fb206f187b0aa4-webfont.woff2'
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
      href: '/fonts/montserrat-light-webfont.woff2'
    },
    {
      rel: 'preload',
      as: 'font',
      type: 'font/woff2',
      crossorigin: '',
      href: '/fonts/montserrat-regular-webfont.woff2'
    }
  ]
})
</script>

<template>
  <NuxtLoadingIndicator id="pageTop" color="repeating-linear-gradient(to right,rgb(197 213 45/100%) 0%,rgb(170 168 87/100%) 33%,rgb(157 177 159/100%) 66%,rgb(0 71 69/100%) 100%)" />
  <div class="prose block text-center align-bottom">
    <h4 class="text-xl sm:text-2xl mt-16 text-gray-600">
      binnenkort
    </h4>
    <h1 class="text-4xl xl:text-5xl font-bold text-primary my-20">
      Ecstatic Dance Zottegem
    </h1>
  </div>
</template>
