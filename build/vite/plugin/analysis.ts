/**
 *  Vite Plugin for fast creating SVG sprites.
 *  https://github.com/anncwb/vite-plugin-svg-icons/blob/HEAD/README.zh_CN.md
 */

import visualizer from 'rollup-plugin-visualizer';
import type { Plugin } from 'vite';

export function configAnalysisPlugin(): Plugin | Plugin[] {
  const plugin = visualizer({
    open: true,
    gzipSize: true,
  });
  return plugin as Plugin;
}
