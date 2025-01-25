import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // ตั้งค่า base path สำหรับ GitHub Pages
  build: {
    outDir: 'dist',  // กำหนด output directory ให้เป็น dist
  },
})
