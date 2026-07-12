import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/diego-portfolio/',
  plugins: [react()],
});
