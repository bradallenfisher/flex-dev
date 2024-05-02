/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Flex, Section } from '../../../base-components/layout';
import { Heading } from '../../../base-components/data-display';
import { Card } from '../../../base-components/surface';
import { ThreeUpImageTextCardProps } from './ThreeUpImageTextCardTypes';
import { TextButton, RichTextContent } from '@psu-flex/core-ui';

export const ThreeUpImageTextCard = ({
  itemHeading,
  richTextRawBody,
  itemImage,
  imageWidth,
  imageHeight,
  textButtonTo,
  textButtonText,
  textButtonAria,
  ...props
}: ThreeUpImageTextCardProps) => {
  let aspectWidth: string;
  let aspectRatio: number;
  aspectRatio = imageWidth / imageHeight;

  if (aspectRatio == 1.5) {
    aspectWidth = '100%';
  } else {
    aspectWidth = 'fit-content';
  }

  return (
    <Section {...props}>
      <Card className="h-full">
        <Flex direction="column">
          <div className="aspect3-2" sx={{ mb: [3, 3, 4, 4] }}>
            <img src={itemImage} alt="" sx={{ width: aspectWidth }} />
          </div>
          {itemHeading && (
            <Heading
              align="left"
              color="nittanyNavy"
              extraSx={{
                mb: [2, 2, 3, 3],
                lineHeight: '140%',
              }}
              tag="h2"
              responsiveType="column"
              variant={22}
            >
              {itemHeading}
            </Heading>
          )}
          <RichTextContent
            richTextRaw={richTextRawBody}
            bodyVariant={18}
            extraSx={{
              mt: 0,
            }}
          />
          {textButtonTo && textButtonText && (
            <TextButton
              to={textButtonTo}
              aria-label={textButtonAria}
              variant="primary"
              extraSx={{ mt: [2, 2, 3, 3] }}
            >
              {textButtonText}
            </TextButton>
          )}
        </Flex>
      </Card>
    </Section>
  );
};
