// 'use client';
import type { Metadata } from 'next';
import ThemeRegistry from './ThemeRegistry';
import { BrandBar } from './components/TestComponent';
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const brandBar = await getContentfulBrandBarApi();
  return (
    <html lang="en">
      <head>
        {/* Metadata can go here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Condensed:wght@300;400;500;700&family=Roboto+Slab:wght@700&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>
          {/* <Button /> */}
          <BrandBar
            ctaItemsCollection={brandBar?.ctaItemsCollection?.items}
            flyOutMenuNavItemsCollection={
              brandBar?.flyOutMenuNavItemsCollection?.items
            }
            flyOutMenuPopularLinksItemsCollection={
              brandBar?.flyOutMenuPopularLinksItemsCollection?.items
            }
          />
          {/* <TestHeader brandBar={brandBar}> this is the header </TestHeader> */}
          <main>{children}</main>
          <footer>this is the footer</footer>
        </ThemeRegistry>
      </body>
    </html>
  );
}

export async function fetchFederatedGraphQL(query: any, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_FEDERATED_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_FEDERATED_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_FEDERATED_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}

const LINK_GRAPHQL_FIELDS = `
  title
  to
  pageRef
  {
    __typename
  }
`;

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
