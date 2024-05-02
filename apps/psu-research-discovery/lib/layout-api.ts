import { fetchGraphQL } from '@psu-flex/clients';
import {
  LINK_GRAPHQL_FIELDS,
  ICON_BUTTON_GRAPHQL_FIELDS,
  LABEL_VALUE_PAIR_GRAPHQL_FIELDS,
} from '@psu-flex/graphql-models';

function extractContentfulHeader(fetchResponse) {
  return fetchResponse.data.headerCollection.items[0];
}
function extractContentfulFooter(fetchResponse) {
  return fetchResponse.data.footerCollection.items[0];
}

async function getContentfulHeaderApi() {
  const entry = await fetchGraphQL(
    `query {
      headerCollection(limit: 1) {
        total
        items {
          __typename
          tierTwoEntity
          {
            ${LINK_GRAPHQL_FIELDS}
          }
          tierThreeDepartment
          {
            ${LINK_GRAPHQL_FIELDS}
          }
          navItemsCollection(limit: 7) {
            items {
              ... on Link {
                ${LINK_GRAPHQL_FIELDS}
              }
              ... on LinkGroup {
                __typename
                linkItemsCollection(limit: 10) {
                  items {
                  ${LINK_GRAPHQL_FIELDS}
                  }
                }
                categoryLink {
                  ${LINK_GRAPHQL_FIELDS}
                }
              }
            }
            __typename
          }
          ctaItemsCollection(limit: 3) {
            __typename
            items {
              ${LINK_GRAPHQL_FIELDS}
            }
          }
        }
      }
    }`
  );
  return extractContentfulHeader(entry);
}

async function getContentfulFooterApi() {
  const entry = await fetchGraphQL(
    `query {
      footerCollection(limit: 1) {
        items {
          streetAddress
          departmentName
          socialIconsCollection(limit: 5)
          {
            items
            {
            ${ICON_BUTTON_GRAPHQL_FIELDS}
            }
          }
          contactItemsCollection(limit: 3)
          {
            items
            {
              ${LABEL_VALUE_PAIR_GRAPHQL_FIELDS}
            }
          }
          navItemsCollection(limit: 4) {
            items {
              title
              label
              linkItemsCollection(limit: 10) {
                __typename
                items {
                 ${LINK_GRAPHQL_FIELDS}
                }
              }
            }
          }
        }
      }
    }`
  );
  return extractContentfulFooter(entry);
}

export { getContentfulHeaderApi, getContentfulFooterApi };
