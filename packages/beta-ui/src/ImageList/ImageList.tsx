/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { WithChildren } from '@psu-flex/common-ui';
import { ImageListProps } from './ImageListTypes';
import { forwardRef } from 'react';
import { Grid } from '@psu-flex/core-ui';

/** The Image List displays a collection of images in an organized grid.*/

export const StandardImageList = forwardRef(function ImageList(
  { images, columnSpan, gap, ...props }: WithChildren<any>,
  ref
) {
  const { extraSx, ...rest } = props;
  return (
    <Grid gap={gap && gap} {...rest} className="image-list">
      {images.map((image, index) => (
        <img
          className="object-cover w-full h-auto"
          sx={{
            gridColumn: `auto / span ${columnSpan}`,
            maxHeight: '270px',
            borderRadius: 'xs',
          }}
          key={index}
          src={image}
          alt={`Image ${index}`}
        />
      ))}
    </Grid>
  );
});

export const MasonryImageList = forwardRef(function ImageList(
  { images, columnSpan, gap, ...props }: WithChildren<any>,
  ref
) {
  const { extraSx, ...rest } = props;

  return (
    <div
      sx={{
        columnGap: '1.5em',
        columnCount: [2, 2, 3, 4],
      }}
      {...rest}
      className="image-list"
    >
      {images.map((image, index) => (
        <img
          className="h-auto w-full"
          sx={{
            breakInside: 'avoid',
            boxSizing: 'border-box',
            mb: '1.5em',
            borderRadius: 'xs',
          }}
          key={index}
          src={image}
          alt={`Image ${index}`}
        />
      ))}
    </div>
  );
});

export const ImageList = forwardRef(function ImageList(
  {
    variant = 'standard',
    images,
    columnSpan,
    gap,
    ...props
  }: WithChildren<ImageListProps>,
  ref
) {
  const { extraSx, ...rest } = props;

  // Return the appropriate image list component based on the variant
  switch (variant) {
    case 'standard':
      return (
        <StandardImageList
          images={images}
          columnSpan={columnSpan}
          gap={gap}
          {...rest}
          ref={ref}
        />
      );
    case 'masonry':
      return (
        <MasonryImageList
          images={images}
          columnSpan={columnSpan}
          gap={gap}
          {...rest}
          ref={ref}
        />
      );
    default:
      return null;
  }
});
