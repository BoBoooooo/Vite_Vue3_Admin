/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { Plugin } from 'vite';

import html from 'vite-plugin-html';

const cdnList = [
  {
    name: 'vue',
    url: 'https://cdn.jsdelivr.net/npm/vue@3.0.7/dist/vue.global.min.js',
  },
];

export function configHtmlPlugin(env: Record<string, string>) {
  const { VITE_NAME, VITE_HOST_URL, VITE_API_URL, VITE_CDN } = env;

  const htmlPlugin: Plugin[] = html({
    // minify: isBuild,
    inject: {
      injectData: {
        title: VITE_NAME,
        HOST_URL: VITE_HOST_URL,
        PREFIX_URL: VITE_API_URL,
      },
      // Embed the generated app.config.js file
      tags: VITE_CDN
        ? cdnList.map((item) => ({
            tag: 'script',
            attrs: {
              src: item.url,
            },
          }))
        : [],
    },
  });
  return htmlPlugin;
}
