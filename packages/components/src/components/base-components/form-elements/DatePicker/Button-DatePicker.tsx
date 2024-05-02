/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useButton } from 'react-aria';

export function Button(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <button
      className="h-fit pointer"
      sx={{
        backgroundColor: 'link',
        px: 6,
        py: 4,
        fontSize: 18,
        fontWeight: '500',
        color: 'white',
        borderWidth: 'xs',
        borderColor: 'link',
        borderStyle: 'solid',
        borderRadius: '0px 4px 4px 0px',
        '&:hover': {
          backgroundColor: 'nittanyNavy'
        }
      }}
      {...buttonProps}
      ref={ref}
    >
      {props.children}
    </button>
  );
}
