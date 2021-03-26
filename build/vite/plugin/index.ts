import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { configHtmlPlugin } from './html';

import { configCompressPlugin } from './compress';
import { configImageminPlugin } from './imagemin';
import { configSvgIconsPlugin } from './svgSprite';

export function createVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // 兼容vue
    vue(),
    // 兼容jsx语法
    vueJsx(),
  ];
  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));
  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  
  // 生产环境开启gzip,图片压缩
  if (isBuild) {
    //vite-plugin-imagemin
    vitePlugins.push(configImageminPlugin());
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin());
  }

  return vitePlugins;
}
