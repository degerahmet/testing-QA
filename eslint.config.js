import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactNative from 'eslint-plugin-react-native';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

export default [
  {
    ignores: ['*.d.ts', 'node_modules/', 'dist/', 'expo-env.d.ts'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react,
      'react-native': reactNative,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'react-native/no-color-literals': 'off',
      'react-native/no-inline-styles': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
