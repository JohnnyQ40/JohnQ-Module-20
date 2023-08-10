import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/JohnQ-Module-20/',
  build: {
    rollupOptions: {
      assetsDir: '/JohnQ-Module-20/'
    }
  }
})
