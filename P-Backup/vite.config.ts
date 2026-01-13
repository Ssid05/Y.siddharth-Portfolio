import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev - The speed of light, bottled into a build tool
export default defineConfig({
  plugins: [react()],
  build: {
    // Code-split like we're splitting atoms for maximum performance
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
})
