/*
 * @file: vite config
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2020年09月28日16:29:47
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
