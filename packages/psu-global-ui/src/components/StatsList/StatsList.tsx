/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import vector from './assets/vector.svg';
import { useBreakpoints, useMediaQuery } from '@psu-flex/utility-hooks';
import { DisplayHeading, Body, CtaButton } from '@psu-flex/psu-global-ui';
import { Flex, Grid } from '@psu-flex/psu-global-ui';
import { useDraggable } from 'react-use-draggable-scroll';
import { useRef } from 'react';
import Image from 'next/image';

export interface StatsListProps {
  title: string;
  description?: string;
  link: {
    text: string;
    url: string;
  };
  cards: {
    id: number;
    title: string;
    description?: string;
  }[];
}

export const StatsList = ({
  title,
  description,
  link,
  cards,
}: StatsListProps) => {
  const isSmallTablet = useMediaQuery(
    '(min-width: 361px) and (max-width: 520px)'
  );
  const { isSm, isMd, isLg, isXl, is2xl } = useBreakpoints();
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  const isIndexEven = (index: number) => index % 2 === 0;

  return (
    <Grid
      extraSx={{
        margin: [
          '32px 0 32px 26px',
          '40px 0 40px 32px',
          '48px 0 48px 62px',
          '48px 0 48px 62px',
        ],
        gap: 0,
        backgroundColor: 'nittanyNavy',
        height: `${
          is2xl || isXl
            ? '717px'
            : isLg
            ? '650px'
            : isSmallTablet
            ? '570px'
            : '600px'
        }`,
        gridTemplateColumns: ['repeat(12, 1fr)'],
        gridTemplateRows: ['repeat(12, 1fr)'],
      }}
    >
      <Grid
        extraSx={{
          marginTop: '20px',
          gridTemplateColumns: [],
          gridColumn: `${isSm ? '1/13' : isMd ? '1/11' : '1/5'}`,
          gridRow: `${isSm || isMd ? '1/7' : '1/12'}`,
        }}
      >
        <Flex
          extraSx={{
            flexDirection: 'column',
          }}
        >
          <Grid
            extraSx={{
              width: '100%',
              gridTemplateColumns: ['repeat(12, 1fr)'],
              gridTemplateRows: ['repeat(12, 1fr)'],
              gap: 0,
            }}
          >
            <Image
              width={48}
              height={10}
              src={vector}
              sx={{
                gridColumn: '1/12',
                gridRow: '1/2',
                width: '13%',
              }}
              alt="Stats List Vector"
            />
            <DisplayHeading
              variant={48}
              extraSx={{
                textAlign: 'left',
                mb: 4,
                gridColumn: '1/12',
                gridRow: '2/13',
                color: 'white',
                fontWeight: 700,
                fontSize: `${isSm || isMd ? '36px' : '48px'}`,
              }}
            >
              {title}
            </DisplayHeading>
          </Grid>
          <Body
            variant={20}
            extraSx={{
              mb: 40,
              color: 'white',
              textAlign: 'left',
            }}
          >
            {description}
          </Body>
          <CtaButton
            variant="primaryOutlined"
            to={link.url}
            extraSx={{
              padding: '1rem 3.25rem',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'white',
              borderColor: 'white',
              fontSize: `${isSm || isMd ? '16px' : '18px'}`,
            }}
          >
            {link.text}
          </CtaButton>
        </Flex>
      </Grid>
      <Grid
        extraSx={{
          marginTop: `${isLg || isXl || is2xl ? '0' : '60px'}`,
          gridColumn: `${isSm || isMd ? '1/12' : '6/12'}`,
          gridRow: `${
            isSm ? '9/12' : isSmallTablet ? '9/12' : isMd ? '8/12' : '1/13'
          }`,
          gridTemplateColumns: ['repeat(12, 1fr)'],
          gridTemplateRows: ['repeat(12, 1fr)'],
          overflowX: 'scroll',
          overflowY: 'scroll',
          height: '100%',
          width: '105%',
        }}
        className="no-scrollbar"
        {...events}
        ref={ref}
      >
        {cards.map((card, index) => (
          <Flex
            extraSx={{
              flexDirection: 'column',
              gridColumn: `${isLg || isXl || is2xl ? 'span 6' : 'auto'}`,
              gridRow: `${isSm || isMd ? '1/12' : 'auto'}`,
              marginTop: `${
                isIndexEven(index) || isSm || isMd ? '0px' : '30px'
              }`,
              padding: '20px',
              height: '100%',
              backgroundColor: 'beaverBlue',
            }}
            key={card.id}
          >
            <DisplayHeading
              extraSx={{
                textAlign: 'left',
                mb: 4,
                color: 'white',
                fontWeight: 700,
                fontSize: `${!isSm && !isMd ? '28px' : '22px'}`,
              }}
            >
              {card.title}
            </DisplayHeading>
            {!isSm && !isMd && (
              <Body
                variant={18}
                extraSx={{
                  color: 'white',
                  textAlign: 'left',
                }}
              >
                {card.description}
              </Body>
            )}
          </Flex>
        ))}
      </Grid>
      <div
        sx={{
          background: `${
            isLg || isXl || is2xl
              ? 'linear-gradient(180deg, rgba(38, 38, 38, 0.00) 0%, rgba(0, 30, 68, 0.2) 10%, #001E44 100%)'
              : 'linear-gradient(90deg, rgba(38, 38, 38, 0.00) 0%, rgba(0, 30, 68, 0.2) 10%, #001E44 100%)'
          }`,
          // gridColumn: "6/13",
          // gridRow: "8/13",
          gridRow: `${
            isSm ? '9/13' : isSmallTablet ? '10/13' : isMd ? '8/13' : '8/13'
          }`,
          gridColumn: `${isSm || isMd ? '10/13' : '6/13'}`,
          zIndex: 100,
        }}
      />
    </Grid>
  );
};
