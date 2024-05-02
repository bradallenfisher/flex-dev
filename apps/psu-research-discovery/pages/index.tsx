/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Section } from '@psu-flex/core-ui';
import { getHomeLandingPage } from '../lib/home-page-api';
import { getComponents } from '../lib/utils/component-factory';
import {
  getContentfulFooterApi,
  getContentfulHeaderApi,
} from '../lib/layout-api';
import {
  getContentfulBrandBarApi,
  getContentfulBrandFooterApi,
  getContentfulSpaceAssets,
} from '@psu-flex/apis';
import { Layout } from '../components/Layout';
import Head from 'next/head';

const Index = ({
  preview,
  homepage,
  header,
  footer,
  brandFooter,
  brandBar,
  assets,
}) => {
  let assetMap = null; // Declare assetMap outside of the block
  const assetArray = assets?.assetCollection?.items;
  // Check if assetArray is defined before processing
  if (assetArray) {
    // create an asset map to hold assets
    assetMap = new Map();
    // loop through the assets and add them to the map with their id's
    for (const asset of assetArray) {
      assetMap.set(asset.sys.id, asset.url);
    }
  }

  const components = getComponents(homepage?.contentCollection, assetMap);

  const {
    description,
    seoTitle,
    keywords,
    excludeLinksFromSearchRankingsNofollow,
    hidePageFromSearchEnginesNoindex,
  } = homepage || {};

  return (
    <Layout
      header={header}
      footer={footer}
      brandFooter={brandFooter}
      brandBar={brandBar}
    >
      <Head>
        <title>{seoTitle + ' | Penn State'}</title>
        <meta name="keywords" content={keywords} key="keywords" />
        <meta name="description" content={description} key="description" />
        {(excludeLinksFromSearchRankingsNofollow ||
          hidePageFromSearchEnginesNoindex) && (
          <meta
            name="robots"
            content={[
              excludeLinksFromSearchRankingsNofollow ? 'nofollow' : '',
              hidePageFromSearchEnginesNoindex ? 'noindex' : '',
            ]
              .filter(Boolean)
              .join(',')}
            key="robots"
          />
        )}
      </Head>
      <Section>
        <Flex
          direction="column"
          extraSx={{
            mt: [12, 15, 18, 20],
            mb: [16, 24, 24, 24],
            gap: [8, 8, 9, 9],
          }}
        >
          {components}
        </Flex>
      </Section>
    </Layout>
  );
};
export async function getStaticProps() {
  const homepage = await getHomeLandingPage();
  const brandBar = await getContentfulBrandBarApi();
  const brandFooter = await getContentfulBrandFooterApi();
  const header = await getContentfulHeaderApi();
  const footer = await getContentfulFooterApi();
  const assets = await getContentfulSpaceAssets();
  return {
    props: {
      assets: assets ?? null,
      brandBar: brandBar ?? null,
      brandFooter: brandFooter ?? null,
      homepage: homepage ?? null,
      header: header ?? null,
      footer: footer ?? null,
    },
  };
}

export default Index;
