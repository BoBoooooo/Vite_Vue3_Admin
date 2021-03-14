/*
 * @file: vite config
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2020年09月28日16:29:47
 */
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { injectHtml } from 'vite-plugin-html';
export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    jsx(),
    injectHtml({
      injectData: {
        title: 'vite_vue3_demo',
      },
    }),
  ],
});
