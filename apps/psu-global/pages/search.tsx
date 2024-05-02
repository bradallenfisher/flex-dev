import Head from 'next/head';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import { Layout } from 'components/layout';
import {
  BrandBarLinkCollection,
  BrandFooterLinkCollection,
} from '@psu-flex/core-ui';
import { GoogleSearchOrganism } from '@psu-flex/google-search';
import { getMenuByName } from 'lib/utils';
import {
  getContentfulBrandBarApi,
  getContentfulBrandFooterApi,
} from '@psu-flex/apis';
import { DrupalMenuLinkContent } from 'next-drupal';

interface SearchPageProps {
  menus: Record<string, DrupalMenuLinkContent[]>;
  brandBar: Record<string, BrandBarLinkCollection>;
  brandFooter: BrandFooterLinkCollection;
}
const SearchPage = ({ menus, brandBar, brandFooter }: SearchPageProps) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  return (
    <Layout menus={menus} brandBar={brandBar} brandFooter={brandFooter}>
      <Head>
        <title>PSU Global | Search</title>
        <meta name="title" content="PSU Global | Search" />
      </Head>
      <GoogleSearchOrganism heading="Search PSU" category={category} />
    </Layout>
  );
};

export async function getStaticProps() {
  const menus: Record<string, DrupalMenuLinkContent[]> = {
    header: await getMenuByName('main'),
    footer: await getMenuByName('footer'),
  };
  const brandBar = await getContentfulBrandBarApi();
  const brandFooter = await getContentfulBrandFooterApi();
  return {
    props: {
      menus,
      brandBar,
      brandFooter,
    },
    revalidate: false,
  };
}

export default SearchPage;
