import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4000,
    proxy: {
      '/api': {
        target: 'http://112.74.95.7:5000/',
        changeOrigin: true,
      },
    }
  }
})
