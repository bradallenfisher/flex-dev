/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Flex, Section } from '../../../base-components/layout';
import { Heading, Body } from '../../../base-components/data-display';
import { Card } from '../../../base-components/surface';
import { ImageCardProps } from './ImageCardTypes';

export const ImageCard = ({
  itemHeading,
  itemBody,
  itemImage,
  imageWidth,
  imageHeight,
  itemTo,
  ...props
}: ImageCardProps) => {
  let aspectWidth: string;
  let aspectRatio: number;
  aspectRatio = imageWidth / imageHeight;

  if (aspectRatio == 1.5) {
    aspectWidth = '100%';
  } else {
    aspectWidth = 'fit-content';
  }
  const cardHoverSx = {
    '&:hover': {
      boxShadow: 'lg-1',
    },
    '&:hover > div > h2': {
      textDecoration: 'underline',
    },
  };

  return (
    <Section {...props}>
      <Card
        className="h-full"
        backgroundColor="white"
        to={itemTo}
        square
        dropShadow="sm-1"
        extraSx={{
          ...cardHoverSx,
          position: 'relative',
        }}
      >
        <Flex alignItems="center" direction="column">
          <div className="aspect3-2">
            <img src={itemImage} alt="" sx={{ width: aspectWidth }} />
          </div>
          <Heading
            align="center"
            color="nittanyNavy"
            extraSx={{
              mt: [5, 6, 6, 7],
              mb: 3,
            }}
            tag="h2"
            responsiveType="column"
            variant={22}
          >
            {itemHeading}
          </Heading>
          <Body
            align="center"
            variant={18}
            responsiveType="column"
            extraSx={{
              mt: 0,
              mb: [7, 8, 8, 9],
              mx: [6, 7, 7, 8],
            }}
          >
            {itemBody}
          </Body>
        </Flex>
      </Card>
    </Section>
  );
};
