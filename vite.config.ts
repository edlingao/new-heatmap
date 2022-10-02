import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import path from 'path'

export default defineConfig({
  plugins: [solidPlugin(), viteStaticCopy({
    targets: [
      {
        src: path.resolve(__dirname, './src/assets/json') + '/[!.]*', // 1️⃣
        dest: './src/assets/json', // 2️⃣
      },
    ],
  }),],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  optimizeDeps: {include: ['mapbox-gl', 'maplibre-gl']},
});
