import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../api/dist',
    emptyOutDir: true
  },
  server: {
    proxy: {
      // '/register': 'http://localhost:5000',
      // '/login': 'http://localhost:5000',
      // '/fees': 'http://localhost:5000',
      // '/warm': 'http://localhost:5000',
      // '/cron': 'http://localhost:5000',
      // '/search': 'http://localhost:5000'
    }
  }
});
