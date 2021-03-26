/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { Plugin } from 'vite';

import html from 'vite-plugin-html';

export function configHtmlPlugin(env: Record<string, string>, isBuild: boolean) {
  const { VITE_NAME, VITE_HOST_URL, VITE_API_URL } = env;

  const htmlPlugin: Plugin[] = html({
    minify: isBuild,
    inject: {
      injectData: {
        title: VITE_NAME,
        HOST_URL: VITE_HOST_URL,
        PREFIX_URL: VITE_API_URL,
      },
    },
  });
  return htmlPlugin;
}
