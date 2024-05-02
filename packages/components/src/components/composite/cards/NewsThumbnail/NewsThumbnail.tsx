'use-client';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Flex } from '../../../base-components/layout';
import { Body, Heading } from '../../../base-components/data-display';
import { Card } from '../../../base-components/surface';
import { NewsThumbnailProps } from './NewsThumbnailTypes';
import fallbackImage from './college.png';
import dayjs from 'dayjs';
export const NewsThumbnail = ({
  imageWidth,
  imageHeight,
  title,
  image,
  date,
  link,
  imageAlt,
}: NewsThumbnailProps) => {
  let aspectWidth: string;
  let aspectRatio: number;
  //@ts-ignore
  aspectRatio = imageWidth / imageHeight;
  const roundedAspectRatio = Math.round(aspectRatio * 100) / 100; // Round to two decimal places

  if (roundedAspectRatio === 1.33) {
    aspectWidth = '100%';
  } else {
    aspectWidth = 'fit-content';
  }
  const cardHoverSx = {
    '&:hover > div > h3': {
      textDecoration: 'underline',
    },
  };

  const formattedDate = date && dayjs(date).format('MMMM DD, YYYY');

  return (
    <Card
      className="relative"
      to={link}
      square
      linkWrapperSx={{
        '&:focus-visible': {
          outlineOffset: '5px !important',
        },
      }}
      extraSx={{
        ...cardHoverSx,
      }}
    >
      <Flex direction="column">
        <div className="aspect4-3">
          <img
            src={image ? image : `${fallbackImage.src}`}
            alt={imageAlt ? imageAlt : ' '}
            sx={{ width: aspectWidth }}
          />
        </div>
        <Heading
          tag="h3"
          color="link"
          extraSx={{
            mt: [4, 4, 4, 5],
            fontFamily: 'serif',
            lineHeight: '120%',
          }}
          responsiveType="column"
          variant={22}
        >
          {title}
        </Heading>
        {formattedDate && (
          <Body
            extraSx={{ fontWeight: 'bold', mt: 3 }}
            color="coalyGray"
            variant={18}
            responsiveType="column"
          >
            {formattedDate}
          </Body>
        )}
      </Flex>
    </Card>
  );
};
