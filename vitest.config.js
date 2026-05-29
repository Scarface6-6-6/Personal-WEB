import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.test.js', 'src/**/*.test.jsx'],
    setupFiles: ['./src/utils/setup.js'],
    fileParallelism: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{js,jsx}'],
      exclude: [
        'src/**/*.test.{js,jsx}',
        'src/main.jsx'
      ],
      lines: 80,
      functions: 80,
      branches: 80,
      statements: 80
    }
  }
})
