/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from 'react';
import { jsx, Flex, Heading, Body, Card } from '@psu-flex/core-ui';
import { Decoration } from '../Decoration/Decoration';

export interface HeroTextOnlyProps {
  itemHeading: string;
  itemBody: string;
}

export const HeroTextOnly = ({ itemHeading, itemBody }: HeroTextOnlyProps) => {
  return (
    <Flex
      extraSx={{
        maxWidth: '90rem',
        padding: 
          'var(--12x, 3rem) 0rem var(--12x, 3rem) var(--margin-xl, 3.875rem)',
        alignItems: 'center',
        gap: 7,
      }}
    >
      <Card
        backgroundColor="white"
        px={0}
        py={0}
        extraSx={{
          position: 'relative',
          maxWidth: '652px',
          zIndex: 1,
        }}
        square
      >
        <Flex gap={0} direction="column">
          <Heading
            align="left"
            color="beaverBlue"
            extraSx={{
              marginTop: '12px',
              fontFamily: 'Roboto',
              fontWeight: '900',
            }}
            tag="h2"
            responsiveType="column"
            variant={56}
          >
            {itemHeading}
          </Heading>
          <Body
            align="left"
            variant={24}
            responsiveType="column"
            extraSx={{
              display: '-webkit-box',
              width: '100%',
              overflow: 'hidden',
              WebkitLineClamp: 10,
              WebkitBoxOrient: 'vertical',
              fontFamily: 'Roboto',
              fontWeight: '400',
              lineHeight: '140%',
              marginTop: '4px',
            }}
          >
            {itemBody}
          </Body>
        </Flex>
      </Card>
      <Decoration
            className="hide-on-mobile"
            extraSx={{
              position: 'relative',
              right: 0,
              top: -20,
            }}
          />
    </Flex>
  );
};
