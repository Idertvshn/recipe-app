// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/recipe-app/', // <-- энд өөрийн repo нэрийг бич
})
