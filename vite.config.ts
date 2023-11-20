import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(async () => {
  return {
    plugins: [await sveltekit()],
    server: {
      fs: {
        allow: ['styled-system'],
      },
    },
    test: {
      include: ['src/**/*.{test,spec}.{js,ts}'],
    },
  };
});
