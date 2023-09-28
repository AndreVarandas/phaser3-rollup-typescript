import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  // Configure path aliases
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Configure minification settings
    minify: 'terser',
    chunkSizeWarningLimit: 800,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    terserOptions: {
      // Remove comments from output
      format: {
        comments: false,
      },
      // Mangle
      mangle: true,
      // Configure compression options
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
        // Replace feature flags in Phaser 3 with boolean values
        replace({
          'typeof CANVAS_RENDERER': "'true'",
          'typeof WEBGL_RENDERER': "'true'",
          'typeof EXPERIMENTAL': "'true'",
          'typeof PLUGIN_CAMERA3D': "'false'",
          'typeof PLUGIN_FBINSTANT': "'false'",
          'typeof FEATURE_SOUND': "'true'",
          preventAssignment: true,
        }),
        // Resolve external dependencies
        nodeResolve(),
        // Convert CommonJS modules to ES modules
        commonjs(),
        // Minify output using Terser
        terser(),
      ],
      output: {
        // Define manual chunks for better control over output files
        manualChunks: {
          vendor: ['phaser'],
          game: ['src/index.ts'],
        },
        compact: true,
      },
      // Configure tree-shaking options
      treeshake: {
        moduleSideEffects: 'no-external',
        annotations: true,
        propertyReadSideEffects: false,
      },
    },
  },
  server: {
    open: true,
    port: 3000,
    host: true,
  },
  preview: {
    port: 8080,
  },
})
