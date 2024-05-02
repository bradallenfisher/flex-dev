/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { GoogleSearchProvider } from './GoogleSearchProvider/GoogleSearchProvider';
import NumberPager from './NumberPager/number-pager';
import { appendSearchScript } from './appendSearchScript';
import { searchCategories } from './searchCategories';

export const GoogleSearchWrapper = ({ heading, category }) => {
  appendSearchScript();

  return (
    <GoogleSearchProvider heading={heading}>
      <div
        id="google_search"
        className="gcse-search"
        data-as_sitesearch={searchCategories[category]?.urlToInclude}
      />
      <NumberPager />
    </GoogleSearchProvider>
  );
};
