import React from 'react';
import { useSearchContext } from '../GoogleSearchProvider/GoogleSearchProvider';
import classnames from 'classnames';
import { page, active, container } from './number-pager.module.scss';

const NumberPager = () => {
  const [, handlers] = useSearchContext();
  const { totalPages, currentPage } = handlers.getPaginationState();
  if (totalPages < 2) {
    return null;
  }
  const pages = [];
  for (let i = 0; i < totalPages; i++) {
    const style = {};
    if (currentPage === i) {
      style.fontWeight = 'bold';
    }
    const onClick = () => {
      handlers.setPage(i);
    };
    const onKeyUp = e => {
      if (e.key === 'Enter') {
        handlers.setPage(i);
      }
    };
    const pageClasses = classnames(page, {
      [active]: currentPage === i
    });
    const pageNumber = i + 1;
    pages.push(
      <div
        role="link"
        tabIndex="0"
        onClick={onClick}
        onKeyUp={onKeyUp}
        className={pageClasses}
        key={`page-${i}`}
        aria-label={`Page ${pageNumber}`}
      >
        {pageNumber}
      </div>
    );
  }
  return <div className={container}>{pages}</div>;
};

export default NumberPager;
