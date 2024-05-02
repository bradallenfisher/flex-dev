import { fetchGraphQL } from '@psu-flex/clients';
import {
  TEXT_GRAPHQL_FIELDS,
  META_DATA_FIELDS,
} from '@psu-flex/graphql-models';
import { FORM_GRAPHQL_FIELDS } from './fields/component-fields';
function extractPage(fetchResponse) {
  return fetchResponse?.data?.homepageCollection?.items?.[0];
}

export async function getHomeLandingPage() {
  const entry = await fetchGraphQL(
    `query {
      homepageCollection (limit: 1) {
       items {
          ${META_DATA_FIELDS}
          title
          contentCollection(limit: 10) {
              items {
                __typename
                ... on ComponentText
                {
                  ${TEXT_GRAPHQL_FIELDS}
                }
                ... on Form
                {
                  ${FORM_GRAPHQL_FIELDS}
                }
              }
          }
        }
      }
   }`,
    true
  );
  return extractPage(entry);
}
