import { fetchFederatedGraphQL } from '@psu-flex/clients';
import { LINK_GRAPHQL_FIELDS } from '@psu-flex/graphql-models';

function extractContentfulBrandBar(fetchResponse) {
  return fetchResponse.data.componentBrandBarCollection.items[0];
}

async function getContentfulBrandBarApi() {
  const entry = await fetchFederatedGraphQL(
    `query {
        componentBrandBarCollection(limit: 1)
        {
          items
          {
            ctaItemsCollection(limit: 3)
            {
              items
              {
                ${LINK_GRAPHQL_FIELDS}
              }
            }
            flyOutMenuNavItemsCollection(limit: 7)
            {
              items
              {
                ${LINK_GRAPHQL_FIELDS}
              }
            }
            flyOutMenuPopularLinksItemsCollection(limit: 5)
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
  return extractContentfulBrandBar(entry);
}

export { getContentfulBrandBarApi };
