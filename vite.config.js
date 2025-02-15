import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  build: {
    minify: false,
    rollupOptions: {
      input: './svelte_land/main.js', // Entry point for your app
      output: {
        entryFileNames: 'umpsa_exam_enhancer.user.js', // Output file name
        format: 'iife', // Immediately Invoked Function Expression (IIFE) format
        name: 'ExamEnhancer', // Global variable name for the bundle
      },
      outDir: 'dist'
    }
  },
});
