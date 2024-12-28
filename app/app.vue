<script setup lang="ts">
const title = 'Ecstatic Dance Zottegem'
useHead({
  title,
  htmlAttrs: {
    lang: 'nl'
  },
  meta: [
    {
      name: 'description',
      content: title
    },
    {
      property: 'og:title',
      content: title
    }
  ]
})
</script>

<template>
  <UApp locale="nl">
    <UPage>
      <UPageHeader
        :title
        description="Binnenkort"
      />
    </UPage>
  </UApp>
</template>
