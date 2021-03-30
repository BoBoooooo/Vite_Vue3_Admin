import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { configHtmlPlugin } from './html';
import { configCompressPlugin } from './compress';
import { configImageminPlugin } from './imagemin';
import { configSvgIconsPlugin } from './svgSprite';
import { configAnalysisPlugin } from './analysis';
import { configStylePlugin } from './element-plus';

export function createVitePlugins(viteEnv: Record<string, string>, isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // 兼容vue
    vue(),
    // 兼容jsx语法
    vueJsx(),
  ];
  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv));
  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild));
  vitePlugins.push(configStylePlugin());
  // 生产环境开启gzip,图片压缩
  if (isBuild) {
    //vite-plugin-imagemin
    vitePlugins.push(configImageminPlugin());
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin());
  }
  if (viteEnv.VITE_IS_REPORT) {
    vitePlugins.push(configAnalysisPlugin());
  }

  return vitePlugins;
}
