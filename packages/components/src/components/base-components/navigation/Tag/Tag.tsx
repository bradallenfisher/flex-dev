/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { useFocusRing, useTag } from 'react-aria';
import { TagProps } from './TagTypes';

/**
 * Tags are compact elements that represent an input, attribute, or action.
 */

export const Tag = ({ size, tagRef, variant, ...props }: TagProps) => {
  const { extraSx, className } = props;

  const sizeObj = {
    sm: {
      py: 1,
      px: 4,
      fontSize: 16,
    },
    md: {
      py: 2,
      px: 6,
      fontSize: 18,
    },
  };

  const tagVariants = {
    outlined: {
      backgroundColor: 'transparent',
      color: 'nittanyNavy',
      borderColor: 'nittanyNavy',
      borderStyle: 'solid',
      '&:hover': {
        backgroundColor: 'limestoneLight',
      },
    },
    filled: {
      backgroundColor: 'nittanyNavy',
      color: 'white',
      '&:hover': {
        backgroundColor: 'beaverBlue',
      },
    },
  };

  const baseTagSx = {
    lineHeight: '150',
    borderWidth: 'xs',
    fontFamily: 'sans',
    fontWeight: 'regular',
    cursor: 'pointer',
  };

  let { item, state } = props;
  let ref = React.useRef(null);
  let { focusProps, isFocusVisible } = useFocusRing({ within: true });
  let { rowProps, gridCellProps } = useTag(props, state, ref);
  return (
    <div
      sx={{
        '&:focus': {
          outline: '1px dashed;',
          outlineColor: 'link',
          outlineOffset: '1px;',
        },
      }}
      {...focusProps}
      ref={ref}
      data-focus-visible={isFocusVisible}
      {...rowProps}
    >
      <div
        className={className}
        sx={{
          ...baseTagSx,
          ...tagVariants[variant],
          ...sizeObj[size as any],
          ...extraSx,
        }}
        {...gridCellProps}
      >
        {item?.rendered}
      </div>
    </div>
  );
};
