/*
 * @Author: your name
 * @Date: 2020-07-17 00:15:50
 * @LastEditTime: 2020-09-28 15:24:46
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /vue3-tsx-master/vite.config.ts
 */
import { SharedConfig } from 'vite';
import path from 'path';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

// https://github.com/vitejs/vite/blob/master/src/node/config.ts
const config: SharedConfig = {
  alias: {
    '/@/': pathResolve('./src'),
  },
  cssPreprocessOptions: {},
};

module.exports = config;
