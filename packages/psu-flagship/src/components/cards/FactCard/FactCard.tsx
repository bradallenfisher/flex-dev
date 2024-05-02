/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Flex } from '@psu-flex/core-ui';
import { Typography, Body, Divider } from '@psu-flex/core-ui';
import { Card } from '@psu-flex/core-ui';
import { FactCardProps } from './FactCardTypes';
import { cardBorder, cardMargins } from './FactCardStyles';

export const FactCard = ({
  itemHeading,
  itemBody,
  itemCitation,
  index,
  itemsLength,
  ...props
}: FactCardProps) => {
  const fourUpGridColumnStartLg = index % 2 === 0 ? 3 : 7;

  const conditionalGridColumn =
    itemsLength === 3
      ? ['auto / span 4', '2 / span 4', 'auto / span 4', 'auto / span 4']
      : [
          'auto / span 4',
          'auto / span 4',
          `${fourUpGridColumnStartLg} / span 4`,
          'auto / span 3',
        ];

  return (
    <Flex
      direction="column"
      extraSx={{
        borderRight: [
          'none',
          'none',
          itemsLength === 4 ? 'none' : cardBorder,
          cardBorder,
        ],
        borderBottom: [
          cardBorder,
          itemsLength === 4 ? 'none' : cardBorder,
          'none',
          'none',
        ],
        '&:last-child': { borderRight: 'none', borderBottom: 'none' },
        gridColumn: conditionalGridColumn,
      }}
      {...props}
    >
      <Card
        extraSx={{ ...cardMargins(itemsLength, index) }}
        className="h-full relative"
        square
      >
        <Flex direction="column">
          <Typography
            size={[48, 56, 56, 64]}
            tag="h2"
            color="white"
            extraSx={{
              mb: 3,
              fontWeight: '900',
            }}
          >
            {itemHeading}
          </Typography>
          <Divider
            size="64px"
            thickness="sm"
            color="white"
            extraSx={{ mb: 5 }}
          />
          <Body
            variant={18}
            color="white"
            responsiveType="column"
            extraSx={{
              fontWeight: 'bold',
              lineHeight: '140',
            }}
          >
            {itemBody}
          </Body>
          {itemCitation && (
            <Body
              className="italic"
              variant={16}
              color="white"
              responsiveType="column"
              extraSx={{
                mt: 3,
              }}
            >
              {itemCitation}
            </Body>
          )}
        </Flex>
      </Card>
      {itemsLength === 4 && index < 2 && (
        <div
          className="grid"
          sx={{
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
        >
          <div
            sx={{
              gridColumn: '1 / span 3',
              borderBottom: ['none', cardBorder, cardBorder, 'none'],
            }}
          />
        </div>
      )}
    </Flex>
  );
};
