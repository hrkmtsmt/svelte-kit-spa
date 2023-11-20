/** @type { import('prettier').Config } */
export default {
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  plugins: ['prettier-plugin-svelte'],
  overrides: [{ files: ['*.svelte'], options: { parser: 'svelte' } }],
};
