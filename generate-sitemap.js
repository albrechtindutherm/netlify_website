import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import * as globby from 'globby';

const pages = await globby.globby([
  'src/pages/**/*.tsx',
  'src/pages/**/*.js',
  '!src/pages/_*.js',
  '!src/pages/**/[*.js',
]);

const sitemap = new SitemapStream({ hostname: 'https://albrecht-indutherm.com' });

pages.forEach(page => {
  let route = page
    .replace(/^src\/pages/, '')
    .replace(/(\/index)?\.(tsx|js)$/, '') || '/';
  if (route === '') route = '/';
  sitemap.write({ url: route, changefreq: 'weekly', priority: 0.7 });
});

sitemap.end();
const data = await streamToPromise(sitemap);
createWriteStream('public/sitemap.xml').end(data);
