import { getAllBasicPageRoutes } from '../lib/basic-page-api';
import { globby } from 'globby';

async function generateSiteMap(routes, siteUrl) {
  const pages = await globby([
    'pages/*.js',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.js',
    '!pages/api',
    '!pages/404.js',
  ]);

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('pages', '')
              .replace('data', '')
              .replace('.js', '')
              .replace('.mdx', '');
            const route = ['/index', '/basic-page'].includes(path) ? '' : path;

            return `
              <url>
                  <loc>${`${siteUrl}${route}`}</loc>
              </url>
            `;
          })
          .concat(
            routes
              .map((page) => {
                const route = `/basic-page/${page.slug}`;

                return `
              <url>
                  <loc>${`${siteUrl}${route}`}</loc>
              </url>
            `;
              })
              .join('')
          )
          .join('')}
    </urlset>
    `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res, req }) {
  const siteUrl = req.headers.host;
  const routes = await getAllBasicPageRoutes();

  // We generate the XML sitemap with the posts data
  const sitemap = await generateSiteMap(routes, siteUrl);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
