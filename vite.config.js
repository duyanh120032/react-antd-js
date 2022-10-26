import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#9b4de0',
          '@border-radius-base': '4px',
        },
        javascriptEnabled: true,
      },
    },
  },
})
