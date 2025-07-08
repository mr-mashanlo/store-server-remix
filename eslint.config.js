import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig( [
  globalIgnores( [ 'node_modules/*', 'dist/*' ] ),
  {
    files: [ '**/*.{js,mjs,cjs,ts,mts,cts}' ],
    plugins: { js },
    extends: [ 'js/recommended' ]
  },
  {
    files: [ '**/*.{js,mjs,cjs,ts,mts,cts}' ],
    languageOptions: { globals: globals.node }
  },
  tseslint.configs.recommended,
  {
    files: [ '**/*.{js,mjs,cjs,ts,mts,cts}' ],
    plugins: { 'simple-import-sort': simpleImportSort },
    rules: {
      'no-trailing-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'comma-spacing': 'error',
      'comma-dangle': 'error',
      'indent': [ 'error', 2 ],
      'semi': [ 'error', 'always' ],
      'quotes': [ 'error', 'single' ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-bracket-spacing': [ 'error', 'always' ],
      'space-in-parens': [ 'error', 'always' ],
      'linebreak-style': [ 'error', 'unix' ],
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error'
    }
  }
] );
