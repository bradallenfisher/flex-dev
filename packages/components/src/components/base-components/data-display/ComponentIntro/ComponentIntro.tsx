/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React from 'react';
import { RichTextContent } from '../RichTextContent/RichTextContent';
import { Heading } from '../Typography/Heading/Heading';
import { Grid } from '../../layout';
import { BaseComponentIntroProps } from './ComponentIntroTypes';

export const ComponentIntro = ({
  introHeading,
  introParagraph,
  numberOfCards,
}: BaseComponentIntroProps) => {
  return (
    <>
      <Grid>
        {introParagraph == null &&
        introParagraph == undefined &&
        numberOfCards == 2 ? (
          <div
            sx={{
              gridColumn: ['1/5', '1/8', '3/10', '3/10'],
              mb: [6, 7, 7, 8],
            }}
          >
            <Heading tag="h2" variant={32}>
              {introHeading}
            </Heading>
          </div>
        ) : introParagraph == null &&
          introParagraph == undefined &&
          numberOfCards !== 2 ? (
          <div
            sx={{
              gridColumn: ['1/5', '1/9', '1/13', '1/13'],
              mb: [6, 7, 7, 8],
            }}
          >
            <Heading tag="h2" variant={32}>
              {introHeading}
            </Heading>
          </div>
        ) : introHeading == null && introHeading == undefined ? (
          <div
            sx={{
              gridColumn: ['1/5', '2/8', '3/11', '3/11'],
              mb: [7, 9, 10, 11],
            }}
          >
            <RichTextContent richTextRaw={introParagraph} />
          </div>
        ) : (
          <div
            sx={{
              gridColumn: ['1/5', '2/8', '3/11', '3/11'],
              mb: [7, 9, 10, 11],
            }}
          >
            <Heading tag="h2" variant={32} extraSx={{ mb: [3, 3, 4, 4] }}>
              {introHeading}
            </Heading>
            <RichTextContent richTextRaw={introParagraph} />
          </div>
        )}
      </Grid>
    </>
  );
};
