/**
 * Plugin to minimize and use ejs template syntax in index.html.
 * https://github.com/anncwb/vite-plugin-html
 */
import type { Plugin } from 'vite';

import html from 'vite-plugin-html';
import cdnList from './cdn';

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
      tags:
        VITE_CDN === 'true'
          ? cdnList.map(item => ({
              tag: item.type,
              attrs:
                item.type === 'script'
                  ? {
                      src: item.url,
                    }
                  : {
                      link: item.url,
                      rel: 'stylesheet',
                    },
            }))
          : [],
    },
  });
  return htmlPlugin;
}
