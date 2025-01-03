import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: true,
    silent: true,
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('test/', import.meta.url)),
        overrides: {
          ogImage: {
            enabled: false,
          },
        },
      },
    },
    setupFiles: './setup.ts',
  },
})
