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

/* article.guide keeps overflow:hidden so the banner follows the card radius.
   That clips a markdown table wider than the column, so wrap each table. */
function rehypeWrapTables() {
  const visit = (node) => {
    const children = node?.children;
    if (!children) return;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.type === 'element' && child.tagName === 'table') {
        children[i] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-scroll'], tabIndex: 0 },
          children: [child],
        };
      } else {
        visit(child);
      }
    }
  };
  return (tree) => visit(tree);
}

// `@site` follows sites/active, a symlink to the game this repo publishes.
export default defineConfig({
  site: 'https://wemarchasone.wiki',
  trailingSlash: 'never',
  integrations: [mdx({ rehypePlugins: [rehypeWrapTables] }), sitemap(), sitemapXmlAlias()],
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
