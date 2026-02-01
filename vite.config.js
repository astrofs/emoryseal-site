import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/emoryseal-site/',
  logLevel: 'error', // Suppress warnings, only show errors
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    react(),
  ]
});
