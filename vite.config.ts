/// <reference types="vitest" />
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
    return {
      base: './',
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (!id.includes('node_modules')) {
                return;
              }

              if (id.includes('react') || id.includes('scheduler')) {
                return 'react-vendor';
              }

              if (id.includes('framer-motion')) {
                return 'motion-vendor';
              }

              if (id.includes('lucide-react')) {
                return 'icons-vendor';
              }

              return 'vendor';
            },
          },
        },
      },
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: ['./test/setup.ts'],
        include: ['./test/**/*.test.{ts,tsx}'],
        css: false,
      },
    };
});
