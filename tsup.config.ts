import { defineConfig } from 'tsup';

export default defineConfig( {
  entry: [ 'src/index.ts' ],
  format: [ 'esm' ],
  outDir: 'dist',
  dts: false,
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
  minify: true
} );