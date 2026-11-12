import { copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

function sitemapXmlAlias() {
  return {
    name: 'sitemap-xml-alias',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const folder = fileURLToPath(dir);
        await copyFile(path.join(folder, 'sitemap-0.xml'), path.join(folder, 'sitemap.xml'));
      },
    },
  };
}

// `@site` follows sites/active, a symlink to the game this repo publishes.
export default defineConfig({
  site: 'https://wemarchasone.wiki',
  trailingSlash: 'never',
  integrations: [mdx(), sitemap(), sitemapXmlAlias()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@framework': new URL('./framework', import.meta.url).pathname,
        '@site': new URL('./sites/active', import.meta.url).pathname,
        '@content': new URL('./content/wemarchasone', import.meta.url).pathname,
      },
    },
  },
});
