import { it, expect } from 'vitest'
import { renderSuspended } from '@nuxt/test-utils/runtime'
import App from '../../app/app.vue' // Import the Index component

it('can render index page', async () => {
  const html = await renderSuspended(App, { route: '/' })
  expect(html)
})
