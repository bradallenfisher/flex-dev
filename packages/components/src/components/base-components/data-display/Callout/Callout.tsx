/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { RichTextContent } from '../RichTextContent/RichTextContent';
import { CalloutProps } from './CalloutTypes';
import { Grid } from '../../layout/Grid/Grid';

/** Callout is simple wysiwyg component that is used to highlight/draw attention to a block of text. It shouldn't be used on its own, and only nested inside a TextBlock*/
export const Callout = ({
  richText,
  backgroundColor,
  image,
  ...props
}: CalloutProps) => {
  const { extraSx, ...rest } = props;
  const imageUrl = image?.fields?.file?.url || image;

  return (
    <>
      {imageUrl ? (
        <Grid
          totalGridColumns={[4, 6, 8, 8]}
          extraSx={{
            backgroundColor: backgroundColor,
            my: [6, 6, 8, 8],
            py: [7, 7, 7, 0],
            px: [5, 5, 6, 0],
            gridRowGap: [0, 0, 0, 0],
          }}
        >
          <img
            className="w-full object-cover h-full"
            sx={{
              gridColumn: ['2/4', '3/5', '4/6', '1/3'],
              minHeight: '222px',
            }}
            src={`${imageUrl}`}
          />
          <RichTextContent
            richTextRaw={richText}
            extraSx={{
              gridColumn: ['1/-1', '1/-1', '1/-1', '3/9'],
              my: [5, 6, 6, 8],
              pr: [8],
              '& > *': { textAlign: ['center', 'center', 'center', 'left'] },
              ...extraSx,
            }}
            {...rest}
          />
        </Grid>
      ) : (
        <RichTextContent
          richTextRaw={richText}
          extraSx={{
            backgroundColor: backgroundColor,
            py: [4, 4, 5, 5],
            px: [4, 4, 5, 5],
            my: [6, 6, 8, 8],
            ...extraSx,
          }}
          {...rest}
        />
      )}
    </>
  );
};
