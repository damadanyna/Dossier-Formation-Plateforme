import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    { ...eslint(), apply: 'build' },
    {
      ...eslint({
        failOnError: false,
        failOnWarning: false,
      }),
      apply: 'serve',
    },
  ],
});
