import React from 'react';
import { useSearchParams } from 'next/navigation';
import { GoogleSearchWrapper } from '../components/GoogleSearch/GoogleSearchWrapper';
import {
  getContentfulFooterApi,
  getContentfulHeaderApi,
} from '../lib/layout-api';
import {
  getContentfulBrandBarApi,
  getContentfulBrandFooterApi,
} from '@psu-flex/apis';
import { Layout } from '../components/Layout';

const SearchPage = ({ header, footer, brandFooter, brandBar }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  return (
    <Layout
      header={header}
      footer={footer}
      brandFooter={brandFooter}
      brandBar={brandBar}
    >
      <GoogleSearchWrapper category={category} heading={'Search results'} />;
    </Layout>
  );
};

export async function getStaticProps() {
  const brandBar = await getContentfulBrandBarApi();
  const brandFooter = await getContentfulBrandFooterApi();
  const header = await getContentfulHeaderApi();
  const footer = await getContentfulFooterApi();

  return {
    props: {
      brandBar: brandBar ?? null,
      brandFooter: brandFooter ?? null,
      header: header ?? null,
      footer: footer ?? null,
    },
  };
}

export default SearchPage;
