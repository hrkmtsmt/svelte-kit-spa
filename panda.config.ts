import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,ts,svelte}'],
  exclude: [],
  theme: {
    extend: {},
  },
  emitPackage: true,
  gitignore: true,
  outdir: 'styled-system',
});
