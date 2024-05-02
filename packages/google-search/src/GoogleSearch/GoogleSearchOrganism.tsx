import React from 'react';
import { GoogleSearchProvider } from './GoogleSearchProvider/GoogleSearchProvider';
import NumberPager from './NumberPager/number-pager';
import { appendSearchScript } from './appendSearchScript';
import { searchCategories } from './searchCategories';
import { searchWrapper } from './search.module.scss';

export const GoogleSearchOrganism = ({ heading, category }) => {
  appendSearchScript();

  return (
    <GoogleSearchProvider heading={heading}>
      <div className={searchWrapper}>
        <div
          id="google_search"
          className="gcse-search"
          data-as_sitesearch={searchCategories[category]?.urlToInclude}
        />
        <NumberPager />
      </div>
    </GoogleSearchProvider>
  );
};
