import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    minify: 'terser',
    chunkSizeWarningLimit: 800,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    terserOptions: {
      format: {
        comments: false,
      },
      mangle: {
        properties: {
          regex: /^_/,
        },
      },
      compress: {
        unsafe: true,
        unsafe_arrows: true,
        unsafe_Function: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_symbols: true,
        unsafe_methods: true,
        toplevel: true,
        passes: 3,
        ecma: 5,
      },
    },
    rollupOptions: {
      plugins: [
        // Toggle the booleans here to enable / disable Phaser 3 features:
        replace({
          'typeof CANVAS_RENDERER': "'true'",
          'typeof WEBGL_RENDERER': "'true'",
          'typeof EXPERIMENTAL': "'true'",
          'typeof PLUGIN_CAMERA3D': "'false'",
          'typeof PLUGIN_FBINSTANT': "'false'",
          'typeof FEATURE_SOUND': "'true'",
          preventAssignment: true,
        }),
        nodeResolve(),
        commonjs(),
        terser(),
      ],
      output: {
        manualChunks: {
          vendor: ['phaser'],
          game: ['src/index.ts'],
        },
        compact: true,
      },
      treeshake: {
        moduleSideEffects: 'no-external',
        annotations: true,
        propertyReadSideEffects: false,
      },
    },
  },
})
