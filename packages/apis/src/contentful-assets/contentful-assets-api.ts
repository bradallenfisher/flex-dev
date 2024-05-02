import { fetchGraphQL } from '@psu-flex/clients';
import { ASSET_COLLECTION } from '@psu-flex/graphql-models';

function extractAssets(fetchResponse) {
  return fetchResponse?.data;
}

export async function getContentfulSpaceAssets() {
  const entry = await fetchGraphQL(
    `query {
        assetCollection {
            ${ASSET_COLLECTION}
          }        
     }`,
    true
  );
  return extractAssets(entry);
}
