/*
 * @file: element-plus按需引入
 * @author: BoBo
 * @copyright: BoBo
 * @Date: 2021-02-30 20:01:51
 */
import type { Plugin } from 'vite';

import styleImport from 'vite-plugin-style-import';

export function configStylePlugin(): Plugin | Plugin[] {
  return styleImport({
    libs: [
      {
        libraryName: 'element-plus',
        resolveStyle: name => {
          name = name.slice(3);
          return `element-plus/packages/theme-chalk/src/${name}.scss`;
        },
        resolveComponent: name => {
          return `element-plus/lib/${name}`;
        },
      },
    ],
  }) as Plugin;
}
