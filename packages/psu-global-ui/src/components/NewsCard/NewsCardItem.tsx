/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Flex, Section } from '@psu-flex/core-ui';
import { Heading, Body, Card, Typography, Icon } from '@psu-flex/core-ui';
import dayjs from 'dayjs';

export interface NewsCardsItemInterface {
  itemHeading: string;
  itemBody: string;
  itemImage: any;
  imageWidth: number;
  imageHeight: number;
  itemTo: string;
  itemDateTitle?: string;
  itemDatePosted?: string | number | Date;
}
export const NewsCardsItem = ({
  itemHeading,
  itemBody,
  itemImage,
  imageWidth,
  imageHeight,
  itemTo,
  itemDateTitle,
  itemDatePosted,
}: NewsCardsItemInterface) => {
  let aspectWidth: string;
  let aspectRatio: number;
  aspectRatio = imageWidth / imageHeight;

  if (aspectRatio == 1.5) {
    aspectWidth = '100%';
  } else {
    aspectWidth = 'fit-content';
  }

  const formattedDate = itemDatePosted
    ? dayjs(typeof itemDatePosted === 'number' ? itemDatePosted : Number(itemDatePosted)).format('dddd, MMMM D')
    : '';
  return (
    <Section
      extraSx={{
        minWidth: '18.75rem',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 'var(--4x, 1rem)',
        flex: '1 0 0',
      }}
    >
      <Card
        backgroundColor="white"
        px={0}
        py={0}
        extraSx={{
          position: 'relative',
          maxWidth: '319px',
        }}
        square
        to={itemTo}
      >
        <Flex gap={0} variant="col">
          <div
            sx={{
              aspectRatio: '3 / 2',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <img src={itemImage} alt="" sx={{
              alignSelf: 'center',
              maxHeight: '205px',
              width: '100%',
             }} />
          </div>
          <Heading
            align="left"
            color="nittanyNavy"
            extraSx={{
              fontFamily: 'Roboto',
              fontSize: '1.5rem',
              fontWeight: '700',
              fontStyle: 'normal',
              '&:hover': {
                textDecoration: 'underline',
              },
              lineHeight: '120%',
              mt: 4,
            }}
            tag="h1"
            responsiveType="column"
            variant={24}
          >
            {itemHeading}
          </Heading>
          <Body
            align="left"
            variant={16}
            responsiveType="column"
            extraSx={{
              fontWeight: 'regular',
              display: '-webkit-box',
              width: '100%',
              overflow: 'hidden',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              marginBottom: '3px',
              fontSize: '1rem',
              fontFamily: 'Roboto',
              textOverflow: 'ellipsis',
              mt: 3,
            }}
          >
            {itemBody}
          </Body>
        </Flex>
        <Flex
          extraSx={{
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '0.25rem var(--1x, 0.25rem)',
            flexWrap: 'wrap',
            mt: 3,
          }}
        >
          <Icon icon="calendar" size={24} color="beaverBlue" />
          <Typography
            color="beaverBlue"
            extraSx={{
              fontFamily: 'Roboto',
              fontWeight: '700',
              fontSize: 16,
              mx: 1,
            }}
            variant={16}
          >
            {itemDateTitle}
          </Typography>
          <Typography color="beaverBlue" variant={16}>
            {formattedDate}
          </Typography>
        </Flex>
      </Card>
    </Section>
  );
};
