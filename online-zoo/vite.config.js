import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    minify: false,
    sourcemap: 'inline',
    rollupOptions: {
      input: {
        main: './index.html',
        map: './map.html',
        contact: './contact.html',
        zoos: './zoos.html',
      },
    },
  },
})
