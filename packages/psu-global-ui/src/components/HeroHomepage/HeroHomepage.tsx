/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { Body, Flex, Heading } from '@psu-flex/core-ui';
import bckImage from './assets/hero-homepage.png';

export interface HeroHomepageProps {
  title: string;
  subText: string;
  image?: string;
}

export const HeroHomepage = ({ title, subText, image }: HeroHomepageProps) => {
  return (
    <Flex
      extraSx={{
        width: '100%',
        padding: ['var(--8x, 2rem) 0rem', 'var(--12x, 3rem) 0rem'],
        backgroundColor: 'white',
      }}
      justifyContent="center"
      alignItems="flex-start"
      gap="var(--12x, 3rem)"
      direction="column"
    >
      <Flex
        extraSx={{
          padding: [
            '0rem var(--margin-sm, 1.625rem)',
            '0rem var(--margin-md, 2.5rem)',
            '0rem var(--margin-lg, 2.875rem)',
            '0rem var(--margin-xl, 3.875rem)',
          ],
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignContent: ['center', 'flex-start'],
          gap: ['var(--2x, 0.5rem)', '0rem var(--7x, 1.75rem)'],
          alignSelf: 'stretch',
          flexWrap: 'wrap',
          flexDirection: ['column', 'column', 'row', 'row'],
        }}
      >
        <Heading
          color="beaverBlue"
          extraSx={{
            fontSize: ['2.5rem', '3rem', '3.5rem', '4rem'],
            fontFamily: 'Roboto',
            fontWeight: '900',
            flex: '1 0 0',
            alignSelf: 'stretch',
          }}
          tag="h1"
          responsiveType="column"
          variant={64}
        >
          {title}
        </Heading>
        <Body
          color="coalyGray"
          variant={28}
          extraSx={{
            fontFamily: 'Roboto',
            fontSize: ['1.375rem', '1.75rem', '1.75rem', '1.75rem'],
            fontWeight: '400',
            lineHeight: '140%',
            pt: 2,
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 2,
            flex: '1 0 0',
          }}
        >
          {subText}
        </Body>
      </Flex>
      <Flex
        extraSx={{
          pt: 12,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 'var(--2x, 0.5rem)',
          alignSelf: 'stretch',
        }}
      >
        <img
          sx={{ width: '100%' }}
          src={image ?? bckImage}
          alt="Hero background"
        />
      </Flex>
    </Flex>
  );
};
