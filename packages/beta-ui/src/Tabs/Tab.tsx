/** @jsxImportSource theme-ui */
import React from 'react';
import { WithChildren } from '@psu-flex/common-ui';
import { TabsProps } from './TabsTypes';
import { forwardRef } from 'react';

export const Tab = forwardRef(function ImageList(
  { active, ...props }: WithChildren<any>,
  ref
) {
  const { extraSx, ...rest } = props;

  const activeSx = {
    // backgroundColor: 'white',
    backgroundColor: 'transparent',
    color: 'beaverBlue',
  };
  const notActiveSx = {
    backgroundColor: 'transparent',
    color: 'limestoneGray',
  };

  // Return the appropriate image list component based on the variant
  {
    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        className="pointer"
        sx={{
          zIndex: 99,
          fontWeight: 'bold',
          border: '0px',
          outline: 'none',
          fontSize: 16,
          borderRadius: 'sm',
          p: 4,
          ...extraSx,
          ...(active ? { ...activeSx } : { ...notActiveSx }),
        }}
        {...rest}
        tabIndex={active ? undefined : -1}
      >
        <span>{props.children}</span>
      </button>
    );
  }
});
