<script setup lang="ts">
const route = useRoute()

const { data: page } = await useAsyncData('page-' + route.path, () => {
  return queryCollection('content').path(route.path).first()
})
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta(page.value.seo)

definePageMeta({
  colorMode: 'light'
})
</script>

<template>
  <UContainer>
    <UPageBody class="prose dark:prose-invert block text-center align-bottom">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </UPageBody>
  </UContainer>
</template>
