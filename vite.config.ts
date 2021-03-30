/*
 * @file: https://vitejs.dev/config/
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2021年3月28日19:29:47
 */
import { loadEnv, UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/vite/plugin';
import cdnList from './build/vite/plugin/cdn';

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const viteEnv = loadEnv(mode, root);
  const isBuild = command === 'build';

  const isCdn = viteEnv.VITE_CDN === 'true';

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: createVitePlugins(viteEnv, isBuild),
    build: {
      rollupOptions: {
        external: isCdn ? cdnList.map(item => item.name) : undefined,
      },
    },
  };
};
