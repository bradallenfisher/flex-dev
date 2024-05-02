/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import * as React from 'react';
import Image from 'next/image';
import {
  Section,
  Grid,
  Container,
  Wrapper,
  Flex,
  Icon,
  Body,
  Link,
  Heading,
  useBreakpoints,
} from '@psu-flex/core-ui';
import bckImage from './assets/hero-image.svg';
import { Decoration } from './Decoration';

export interface HeroEventListingProps {
  title: string;
  content: string;
  eventDate: string;
  eventLocation: string;
  link: {
    text: string;
    url: string;
  };
  image?: string;
}

export const HeroEventListing = ({
  title,
  content,
  eventDate,
  eventLocation,
  link,
  image,
}: HeroEventListingProps) => {
  const { isSm, isMd, isLg, isXl } = useBreakpoints();
  return (
    <Section>
      <Container
        // @ts-expect-error it's actually sx and not extraSx
        sx={{
          padding: `${isXl ? '15px 0px' : '0px'}`,
        }}
      >
        <Wrapper>
          <Grid
            extraSx={{
              '@media (max-width: 1080px)': {
                'div:first-child': {
                  order: 2,
                },
              },
            }}
          >
            <div
              sx={{
                gridColumn: ['auto / span 6'],
                padding: '28px 28px 0px 0px',
              }}
            >
              <Heading
                tag="h1"
                variant={20}
                extraSx={{
                  fontFamily: 'Roboto',
                  padding: '0px 0px 8px 0px',
                  gap: 2,
                  color: 'beaverBlue',
                }}
              >
                Events
              </Heading>
              <Flex gap={2}>
                <Icon
                  size={24}
                  extraSx={{
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                  color="beaverBlue"
                  icon={'calendar'}
                />
                <Body
                  variant={16}
                  extraSx={{
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'beaverBlue',
                    gap: 4,
                    lineHeight: '120%',
                    pt: '0.2rem',
                  }}
                >
                  {eventDate}
                </Body>
              </Flex>
              <Flex gap={2}>
                <Icon
                  size={24}
                  extraSx={{
                    width: '1.5rem',
                    height: '1.5rem',
                  }}
                  color="beaverBlue"
                  icon={'locationPin'}
                />
                <Body
                  variant={16}
                  extraSx={{
                    fontFamily: 'Roboto',
                    fontSize: '1rem',
                    fontWeight: '400',
                    color: 'beaverBlue',
                    gap: 4,
                    lineHeight: '120%',
                    pt: '0.25rem',
                  }}
                >
                  {eventLocation}
                </Body>
              </Flex>
              <Heading
                tag="h1"
                variant={56}
                extraSx={{
                  fontFamily: 'Roboto',
                  color: 'beaverBlue',
                  mt: 4,
                }}
              >
                {title}
              </Heading>
              <Body
                extraSx={{
                  mt: 4,
                  mb: 4,
                }}
                variant={24}
              >
                {content}
              </Body>
              <Link
                to={link.url}
                extraSx={{
                  textDecoration: 'underline',
                  fontSize: `${
                    isSm ? '1.125rem' : isMd || isLg ? '1.375rem' : '1.5rem'
                  }`,
                }}
              >
                {link.text}
              </Link>
            </div>
            <div
              sx={{
                gridColumn: `${
                  isSm || isMd || isLg ? '1/9' : ['auto / span 6']
                }`,
              }}
            >
              {!isSm && (
                <Decoration
                  extraSx={{
                    position: 'absolute',
                    top: `${isXl ? '12rem' : isLg ? '18rem' : '12rem'}`,
                    right: 0,
                    zIndex: 1,
                    '@media (min-width: 826px) and (max-width: 928px)': {
                      maxHeight: '650px',
                    },
                    '@media (min-width: 768px) and (max-width: 825px)': {
                      maxHeight: '600px',
                    },
                    '@media (min-width: 648px) and (max-width: 768px)': {
                      maxHeight: '650px',
                    },
                    '@media (min-width: 100px) and (max-width: 647px)': {
                      maxHeight: '575px',
                    },
                    '@media (min-width: 618px) and (max-width: 647px)': {
                      maxHeight: '575px',
                    },
                    '@media (min-width: 500px) and (max-width: 617px)': {
                      maxHeight: '500px',
                    },
                    '@media (min-width: 548px) and (max-width: 617px)': {
                      maxHeight: '500px',
                    },
                    '@media (min-width: 491px) and (max-width: 547px)': {
                      maxHeight: '450px',
                    },
                    '@media (min-width: 460px) and (max-width: 490px)': {
                      maxHeight: '400px',
                    },
                    '@media (min-width: 429px) and (max-width: 459px)': {
                      maxHeight: '375px',
                    },
                    '@media (min-width: 400px) and (max-width: 428px)': {
                      maxHeight: '350px',
                    },
                    '@media (min-width: 361px) and (max-width: 399px)': {
                      maxHeight: '320px',
                    },
                  }}
                />
              )}
              <Image
                width={10}
                height={10}
                sizes="100%"
                sx={{
                  paddingRight: ['26px', '32px', 0, 0],
                  width: '100%',
                  height: 'auto',
                  position: 'relative',
                  zIndex: 2,
                  mt: 22,
                }}
                src={image ?? bckImage}
                alt="Image background"
              />
            </div>
          </Grid>
        </Wrapper>
      </Container>
    </Section>
  );
};
