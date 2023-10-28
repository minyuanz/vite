import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite/',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/vite/'
  //   : '/',
  plugins: [vue()],
})
