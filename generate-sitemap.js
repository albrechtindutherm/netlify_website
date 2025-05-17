import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import * as globby from 'globby';

const pages = await globby.globby([
  'src/pages/**/*.tsx',
  'src/pages/**/*.js',
  '!src/pages/_*.js',
  '!src/pages/**/[*.js',
]);

const components = await globby.globby([
  'src/components/**/*.tsx',
  'src/components/**/*.js',
  '!src/components/_*.js',
  '!src/components/**/[*.js',
]);

const sitemap = new SitemapStream({ hostname: 'https://albrecht-indutherm.com' });

// Add pages as before
pages.forEach(page => {
  let route = page
    .replace(/^src\/pages/, '')
    .replace(/(\/index)?\.(tsx|js)$/, '') || '/';
  if (route === '') route = '/';
  sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
});

// Add components as lowercase anchor links on the homepage
components.forEach(component => {
  const match = component.match(/src\/components\/(.+?)\.(tsx|js)$/);
  if (match) {
    const anchor = match[1].toLowerCase();
    sitemap.write({ url: `/#${anchor}`, changefreq: 'weekly', priority: 0.7 });
  }
});

sitemap.end();
const data = await streamToPromise(sitemap);
createWriteStream('public/sitemap.xml').end(data);