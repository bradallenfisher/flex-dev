import React, { useContext, useReducer, useMemo } from 'react';
import PropTypes from 'prop-types';
import { usePagination } from 'react-use-pagination';
import useChange from '@react-hook/change';
import {
  search,
  container,
  content,
  gridArea,
} from './search-provider.module.scss';
import reducer from './reducer';
import { DisplayHeading, Container, Wrapper } from '@psu-flex/core-ui';

const SearchContext = React.createContext();
export const useSearchContext = () => useContext(SearchContext);

export const GoogleSearchProvider = ({ children, heading }) => {
  const [searchState, setSearchState] = useReducer(reducer, {
    results: [],
    resultsMessage: '',
    totalItems: 0,
    tab: 'web',
    keywords: '',
    // setting keywords, tab, sort makes this true
    // having 200 okay fetch results or a fetch error makes this false
    pending: false,
    sortBy: 'Relevance',
    filters: new Map(),
    initFilters: new Map(),
    rules: new Map(),
  });

  const paginationState = usePagination({
    totalItems: searchState.totalItems,
    initialPageSize: 10,
  });

  const handlers = useMemo(
    () => ({
      initFilter: (id, value) => {
        setSearchState({
          type: 'initFilter',
          id,
          value,
        });
      },
      removeFilter: (id) => {
        setSearchState({
          type: 'removeFilter',
          id,
        });
      },
      setFilterValue: (id, value) => {
        setSearchState({
          type: 'setFilterValue',
          id,
          value,
        });
      },
      resetFilter: (id) => {
        setSearchState({
          type: 'resetFilter',
          id,
        });
      },
      resetFilters: () => {
        setSearchState({
          type: 'resetFilters',
        });
      },
      addRule: (id, ruleFunction) => {
        setSearchState({
          type: 'addRule',
          id,
          ruleFunction,
        });
      },
      removeRule: (id) => {
        setSearchState({
          type: 'removeRule',
          id,
        });
      },
      setSortBy: (sortBy) => {
        let newSortBy = sortBy;
        if (!sortBy || sortBy === '') {
          newSortBy = 'Relevance';
        }
        setSearchState({
          type: 'setSortBy',
          sortBy: newSortBy,
        });
      },
      setSearchKeywords: (keywords) => {
        paginationState.setPage(0);
        setSearchState({
          type: 'setSearchKeywords',
          keywords,
        });
      },
      setResults: (results) => {
        setSearchState({
          type: 'setResults',
          results,
        });
      },
      setPageSize: (size) => {
        paginationState.setPageSize(size);
      },
      setPage: (page) => {
        setSearchState({
          type: 'setPending',
          pending: true,
        });
        paginationState.setPage(page);
      },
      getPaginationState: () => {
        return paginationState;
      },
      setTab: (tab) => {
        setSearchState({
          type: 'setTab',
          tab,
        });
      },
      setPending: (pending) => {
        setSearchState({
          type: 'setPending',
          pending,
        });
      },
    }),
    [paginationState]
  );

  const queryParams = {
    page: paginationState.currentPage,
    tab: searchState.tab,
    keywords: searchState.keywords,
    sortBy: searchState.sortBy,
  };

  // Fires whenever the values for tab, keywords, or sort change.
  useChange(JSON.stringify(queryParams), (current) => {
    const { tab, keywords, sortBy, page } = JSON.parse(current);
    const getResults = async () => {
      const apiURL = new URL(
        `/api/v1/search-results/${keywords}`,
        process.env.GATSBY_SEARCH_API_URL
      );
      apiURL.searchParams.set('sort', sortBy.toLowerCase());
      apiURL.searchParams.set('page', page);
      if (tab === 'image') {
        apiURL.searchParams.set('type', 'image');
      }
      const response = await fetch(apiURL, {
        mode: 'cors',
      });
      if (response.ok) {
        return response.json();
      }
      return {};
    };

    if (keywords.length > 0) {
      getResults()
        .then((results) => {
          handlers.setResults(results);
        })
        .catch((error) => {
          console.error(
            'There was a problem with your fetch operation:',
            error
          );
          handlers.setPending(false);
        });
    } else {
      // eslint-disable-next-line camelcase
      handlers.setResults({ message: '', content: [], total_count: 0 });
    }
  });

  return (
    <SearchContext.Provider value={[searchState, handlers]}>
      <Container>
        <Wrapper>
          <section className={search}>
            <div className={container}>
              <div className={content}>
                <div className={gridArea}>
                  <DisplayHeading extraSx={{ my: 8 }} variant={64}>
                    {heading}
                  </DisplayHeading>
                  {children}
                </div>
              </div>
            </div>
          </section>
        </Wrapper>
      </Container>
    </SearchContext.Provider>
  );
};
GoogleSearchProvider.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
};
