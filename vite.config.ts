import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/akash-sfdc/',  // ✅ This is the only correct value for your repo
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
