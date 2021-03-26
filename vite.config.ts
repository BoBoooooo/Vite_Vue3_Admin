/*
 * @file: https://vitejs.dev/config/
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2021年3月28日19:29:47
 */
// import jsx from '@vitejs/plugin-vue-jsx';
import { loadEnv, UserConfig, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { injectHtml } from 'vite-plugin-html';
import { configSvgIconsPlugin } from './src/icons/svgSprite';

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_HOST_URL, VITE_API_URL, VITE_NAME, VITE_USER_NODE_ENV } = env;

  return {
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
          title: VITE_NAME,
          HOST_URL: VITE_HOST_URL,
          PREFIX_URL: VITE_API_URL,
        },
      }),
      // svgIcon支持
      configSvgIconsPlugin(VITE_USER_NODE_ENV === 'production'),
    ],
  };
};
