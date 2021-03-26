/**
 *  Vite Plugin for fast creating SVG sprites.
 *  https://github.com/anncwb/vite-plugin-svg-icons/blob/HEAD/README.zh_CN.md
 */

 import visualizer from "rollup-plugin-visualizer";
 
 export function configAnalysisPlugin() {
  const plugin = visualizer({
    open: true,
  })
   return plugin;
 }
 