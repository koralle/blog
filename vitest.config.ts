/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.ts'],
    alias: {
      '~/': new URL('./app/', import.meta.url).pathname,
      '~tests/': new URL('./tests/', import.meta.url).pathname,
    },
  },
})
