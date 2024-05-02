/** @jsxImportSource theme-ui */
import React from 'react';
import { WithChildren } from '@psu-flex/common-ui';
import { forwardRef } from 'react';

export const TabPanel = forwardRef(function TabPanel(
  { activeTab, index, ...props }: WithChildren<any>,
  ref
) {
  const { extraSx, ...rest } = props;

  {
    return (
      <div
        ref={ref}
        sx={{ display: activeTab === index ? 'block' : 'none', ...extraSx }}
        role="tabpanel"
        aria-labelledby={`tab-${index}`}
        {...rest}
      >
        {props.children}
      </div>
    );
  }
});
