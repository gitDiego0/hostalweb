import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'brotli',
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {
        level: 11,
      },
    }),
  ],
})
