/*
 * @file: vite config
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2020年09月28日16:29:47
 */
import vue from '@vitejs/plugin-vue';
// import jsx from '@vitejs/plugin-vue-jsx';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { injectHtml } from 'vite-plugin-html';
import {configSvgIconsPlugin} from './src/icons/svgSprite'
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    // jsx(),
    // 动态插入title
    injectHtml({
      injectData: {
        title: 'vite_vue3_demo',
        HOST_URL: 'http://localhost:7788',
        PREFIX_URL: '/'
      },
    }),
    // svgIcon支持
    configSvgIconsPlugin(process.env.NODE_ENV === 'production')
  ],
});
