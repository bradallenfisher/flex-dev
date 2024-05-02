/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { Flex, Heading } from '@psu-flex/core-ui';
import { CareerListingCard, Pagination } from '@psu-flex/psu-global-ui';

export interface CareerListingGroupProps {
  careersType: string;
  pageSize?: number;
  items: Array<any>;
}

export const CareerListingGroup = ({
  careersType,
  pageSize = 5,
  items,
  ...props
}: CareerListingGroupProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentTableData = () => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  };

  return (
    <Flex
      extraSx={{
        flexDirection: 'column',
        padding: '0px 48px 48px 48px',
      }}
    >
      <Heading
        tag="h5"
        variant={16}
        extraSx={{
          fontFamily: 'Roboto',
          fontSize: '2.25rem',
          fontWeight: '400',
          lineHeight: '150%',
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'flex-start',
          color: 'coalyGray',
        }}
      >
        Showing {currentTableData().length} Results for: {careersType}
      </Heading>
      <Flex
        {...props}
        extraSx={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          gap: '1.5rem',
          alignSelf: 'stretch',
          flexWrap: 'wrap',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        {currentTableData().map((item) => (
          <CareerListingCard {...item} key={item.id} />
        ))}
      </Flex>
      <Pagination
        currentPage={currentPage}
        totalCount={items.length}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </Flex>
  );
};
