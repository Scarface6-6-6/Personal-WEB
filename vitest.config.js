import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/**/*.test.js'],
    setupFiles: ['tests/setup.js'],
    poolOptions: {
      threads: {
        singleThread: true
      }
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['JavaScript/**/*.js'],
      exclude: ['JavaScript/**/*.test.js'],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    }
  }
})
