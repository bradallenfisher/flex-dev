import { fetchFederatedGraphQL } from '@psu-flex/clients';
import { LINK_GRAPHQL_FIELDS } from '@psu-flex/graphql-models';

function extractContentfulBrandFooter(fetchResponse) {
  return fetchResponse.data.componentBrandFooterCollection.items[0];
}

async function getContentfulBrandFooterApi() {
  const entry = await fetchFederatedGraphQL(
    `query {
        componentBrandFooterCollection(limit: 1)
        {
          items
          {
            linkItemsCollection(limit: 6)
            {
              items
              {
                ${LINK_GRAPHQL_FIELDS}
              }
            }
          }
        }
      }`
  );
  return extractContentfulBrandFooter(entry);
}

export { getContentfulBrandFooterApi };
