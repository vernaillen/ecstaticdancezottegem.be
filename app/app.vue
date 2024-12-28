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
      content: 'Ecstatic Dance Zottegem'
    },
    {
      property: 'og:title',
      content: title
    }
  ]
})
</script>

<template>
  <NuxtLoadingIndicator id="pageTop" color="repeating-linear-gradient(to right,rgb(197 213 45/100%) 0%,rgb(170 168 87/100%) 33%,rgb(157 177 159/100%) 66%,rgb(0 71 69/100%) 100%)" />
  <UApp>
    <NuxtPage />
  </UApp>
</template>

<style>
@import "tailwindcss";
@import "@nuxt/ui-pro";

@theme {
  --font-sans: 'Montserrat', sans-serif;

  --color-avocado-50: #f8f9f7;
  --color-avocado-100: #f2f3ee;
  --color-avocado-200: #dee1d5;
  --color-avocado-300: #cacfbb;
  --color-avocado-400: #a3ac89;
  --color-avocado-500: #7b8856;
  --color-avocado-600: #6f7a4d;
  --color-avocado-700: #5c6641;
  --color-avocado-800: #4a5234;
  --color-avocado-900: #3c432a;
  --color-avocado-950: #242819;
}

h1 {
  @apply text-4xl xl:text-5xl font-bold text-avocado-500 my-20;
}
h2 {
  @apply my-20;
}
</style>
