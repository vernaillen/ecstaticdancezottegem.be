import { vi } from 'vitest'
import { mockNuxtImport } from '@nuxt/test-utils/runtime'

vi.resetModules()

let id = 0

mockNuxtImport('useId', () => {
  return () => {
    return id++
  }
})
