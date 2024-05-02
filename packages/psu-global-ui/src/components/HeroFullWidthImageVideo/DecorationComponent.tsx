/** @jsx jsx */
/* eslint-disable no-undef */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';

interface DecorationProps {
  color?: string;
  width?: string;
  height?: string;
  extraSx?: any;
}
export const DecorationComponent = ({
  color = '#F0FF3E',
  width = '74',
  height = '49',
  extraSx,
}: DecorationProps) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      sx={{ ...extraSx }}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
    >
      <path d="M515.58 93.78H0L32.28 0H547.86L515.58 93.78Z" fill={color} />
    </svg>
  );
};
