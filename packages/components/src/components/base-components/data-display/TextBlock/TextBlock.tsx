/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { RichTextContent } from '../RichTextContent/RichTextContent';
import { useContent } from '@psu-flex/utility-functions';
import { TextBlockProps } from './TextBlockTypes';
import { Grid } from '@psu-flex/core-ui';

/** TextBlock is simple wysiwyg component that has a built in grid and grid column definition */
export const TextBlock = ({ ...props }: TextBlockProps) => {
  const contentProps = useContent(props);
  const { extraSx, data, totalGridColumns, gridColumn, assetMap, ...rest } =
    props;

  return (
    <Grid
      {...contentProps}
      totalGridColumns={totalGridColumns && totalGridColumns}
    >
      <RichTextContent
        extraSx={{
          gridColumn: (gridColumn && gridColumn) || [
            '1/5',
            '2/8',
            '3/11',
            '3/11',
          ],
          ...extraSx,
        }}
        assetMap={assetMap}
        richTextRaw={data}
        {...rest}
      />
    </Grid>
  );
};
