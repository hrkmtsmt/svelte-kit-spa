/** @typedef { import("eslint").Linter.FlatConfig } FlatConfig */

import eslintPluginFunctional from 'eslint-plugin-functional';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import svelteEslintParser from 'svelte-eslint-parser';

/** @type FlatConfig['ignores'] */
const ignores = ['dist', '**/*.d.ts', '**/*.mjs'];

/** @type FlatConfig */
const eslintConfig = {
  ignores,
  plugins: {
    functional: eslintPluginFunctional,
  },
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.node.json'],
    },
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-use-before-define': 'error',
    'no-restricted-globals': ['error', { name: 'isFinite' }, { name: 'isNaN' }],
    'functional/no-let': ['error', { allowInForLoopInit: false, allowInFunctions: false }],
    'functional/immutable-data': [
      'error',
      {
        ignoreImmediateMutation: true,
        ignoreClasses: true,
        ignoreAccessorPattern: ['draft*.*', 'module.*'],
      },
    ],
  },
};

/** @type FlatConfig */
const svelteConfig = {
  ignores,
  files: ['**/*.svelte'],
  languageOptions: {
    parser: svelteEslintParser,
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.node.json'],
    },
  },
};

/** @type FlatConfig */
const typescriptConfig = {
  ignores,
  files: ['**/*.ts'],
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      project: ['./tsconfig.json', './tsconfig.node.json'],
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslint,
  },
  rules: {
    ...typescriptEslint.configs.recommended.rules,
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/triple-slash-reference': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-confusing-void-expression': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: { delimiter: 'comma', requireLast: true },
        singleline: { delimiter: 'comma', requireLast: false },
        overrides: {
          interface: { multiline: { delimiter: 'semi', requireLast: true } },
          typeLiteral: { multiline: { delimiter: 'semi', requireLast: true } },
        },
      },
    ],
  },
};

/** @type Array<FlatConfig> */
export default [eslintConfig, typescriptConfig];
