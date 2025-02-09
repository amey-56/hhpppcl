import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Add the base URL for GitHub Pages
  base: '/hhpppcl/',  // Replace 'hhpppcl' with your repository name
});
