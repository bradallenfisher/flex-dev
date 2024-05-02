import { BASIC_PAGE_GRAPHQL_FIELDS } from './fields/page-fields';

import { fetchGraphQL } from '@psu-flex/clients';

function extractPage(fetchResponse) {
  return fetchResponse?.data?.basicPageCollection?.items?.[0];
}

function extractBasicPageRoutes(fetchResponse) {
  return fetchResponse?.data?.basicPageCollection?.items;
}

export async function getAllBasicPageRoutes(preview) {
  const pageRoutes = await fetchGraphQL(
    `query {
      basicPageCollection(order: title_DESC, preview: ${
        preview ? 'true' : 'false'
      }) {
        items {
          slug
          title
        }
      }
    }`,
    preview
  );
  return extractBasicPageRoutes(pageRoutes);
}

export async function getPage(slug) {
  const entry = await fetchGraphQL(
    `query {
      basicPageCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          __typename
          sys
          {
            id
          }
          ${BASIC_PAGE_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  );
  return {
    basicPage: extractPage(entry),
  };
}
