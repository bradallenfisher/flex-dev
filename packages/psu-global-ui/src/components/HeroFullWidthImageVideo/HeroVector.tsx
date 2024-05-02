/** @jsx jsx */
/* eslint-disable no-undef */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import * as React from 'react';

interface HeroVectorProps {
  color: string;
  width: string;
  height: string;
  extraSx?: any;
  svgSx?: any;
}

export const HeroVector = ({
  width,
  height,
  color,
  extraSx,
  svgSx,
}: HeroVectorProps) => {
  const viewBox = `0 0 232 60`;
  return (
    <div sx={{ ...extraSx }}>
      <svg
        sx={{ ...svgSx }}
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector"
          d="M210.46 59.4602H1.06006L21.0401 1.44019H230.44L210.46 59.4602Z"
          stroke={color}
          stroke-miterlimit="10"
        />
      </svg>
    </div>
  );
};
