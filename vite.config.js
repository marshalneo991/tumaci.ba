import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    watch: {
      // Use polling on Windows to avoid EBUSY "resource busy" watch errors
      usePolling: true,
      // Polling interval in milliseconds (adjust if needed)
      interval: 100,
    },
  },
})
