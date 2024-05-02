/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeUICSSObject } from 'theme-ui';
import React from 'react';

import { usePagination, DOTS } from '@psu-flex/utility-hooks';
import { Icon } from '@psu-flex/core-ui';

export const Pagination = (props: any) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const paginationArr = paginationRange || [];

  if (currentPage === 0 || paginationArr.length < 2) {
    return null;
  }

  let lastPage = paginationArr[paginationArr.length - 1];

  const onNext = () => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  };

  const onLastPage = () => onPageChange(lastPage);

  const paginationItemStyles: ThemeUICSSObject = {
    padding: '0 12px',
    height: '32px',
    color: 'coalyGray',
    display: 'flex',
    alignItems: 'center',
    borderLeft: 'solid 1px',
    borderColor: 'limestoneLight',
    lineHeight: '27px',
    fontSize: '17px',
    fontWeight: '400px',
    minWidth: '32px',
    cursor: 'pointer',
  };

  return (
    <ul
      sx={{
        display: 'flex',
        listStyleType: 'none',
        justifyContent: 'left',
      }}
    >
      {paginationArr.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={pageNumber}
              sx={{
                ...paginationItemStyles,
              }}
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={pageNumber}
            sx={{
              ...paginationItemStyles,
              ...(currentPage === pageNumber && {
                background: 'limestoneLight',
              }),
            }}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li sx={{ ...paginationItemStyles }} onClick={onLastPage}>
        <Icon
          id="end-icon"
          className="flex"
          extraSx={{ ml: 1 }}
          size={20}
          icon={'chevronLast'}
          color="coalyGray"
        />
      </li>
      <li sx={{ ...paginationItemStyles }} onClick={onNext}>
        <Icon
          id="end-icon"
          className="flex"
          extraSx={{ ml: 1 }}
          size={12}
          icon={'chevronRight'}
          color="coalyGray"
        />
      </li>
    </ul>
  );
};
