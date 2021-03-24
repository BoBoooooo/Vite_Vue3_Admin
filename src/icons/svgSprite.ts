/**
 *  Vite Plugin for fast creating SVG sprites.
 *  https://github.com/anncwb/vite-plugin-svg-icons/blob/HEAD/README.zh_CN.md
 */

import SvgIconsPlugin from 'vite-plugin-svg-icons';
import path from 'path';

export function configSvgIconsPlugin(isBuild: boolean) {
  const svgIconsPlugin = SvgIconsPlugin({
    iconDirs: [path.resolve(process.cwd(), 'src/icons')],
    svgoOptions: isBuild,
    // default
    symbolId: 'icon-[dir]-[name]',
  });
  return svgIconsPlugin;
}
