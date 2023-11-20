import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // https://kit.svelte.dev/docs/adapters
    // https://kit.svelte.jp/docs/single-page-apps
    adapter: adapter({
      fallback: 'app.html',
    }),
    alias: {
      '@styled-system': './styled-system/*',
      '@src': './src/*',
    },
    typescript: {
      config: (config) => {
        config.include.push('../styled-system');
        return config;
      },
    },
  },
};

export default config;
