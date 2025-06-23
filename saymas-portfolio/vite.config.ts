import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/saymahub.github.io/', // 👈 Important for GitHub Pages!
})