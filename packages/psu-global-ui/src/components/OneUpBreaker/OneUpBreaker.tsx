/** @jsx jsx */
/* eslint-disable no-undef */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import vector from './assets/vector.svg';
import fiftyVector from './assets/fifty-vector.svg';
import blueBackgroundImage from './assets/blue-background.svg';
import blueBackgroundBG from './assets/blue-background-bg.png';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import { DisplayHeading, Body, CtaButton } from '@psu-flex/psu-global-ui';
import { Flex, Grid } from '@psu-flex/psu-global-ui';
import Image from 'next/image';

export interface OneUpBreakerBlueBackgroundProps {
  title: string;
  description?: string;
  link: {
    text: string;
    url: string;
  };
  image?: string;
}

export const OneUpBreakerBlueBackground = ({
  title,
  description,
  link,
  image,
}: OneUpBreakerBlueBackgroundProps) => {
  const { isSm, isMd, isLg, isXl, is2xl } = useBreakpoints();
  const blueBackgroundSrc = blueBackgroundBG?.src ?? blueBackgroundBG;

  return (
    <Grid
      extraSx={{
        backgroundImage: `url(${blueBackgroundSrc})`,
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        height: `${is2xl || isXl ? '1044px' : '1000px'}`,
        gridTemplateColumns: ['repeat(12, 1fr)'],
        gridTemplateRows: ['repeat(12, 1fr)'],
      }}
    >
      <Grid
        extraSx={{
          gridColumn: `${isSm || isMd ? '2/12' : '2/7'}`,
          gridRow: `${isSm || isMd ? '7/12' : '1/12'}`,
        }}
      >
        <Flex
          extraSx={{
            flexDirection: 'column',
            gridColumn: `${isSm ? '1/13' : isMd ? '1/11' : '2/12'}`,
            gridRow: `${isSm || isMd ? '1/7' : '5/12'}`,
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
              src={vector}
              width={10}
              height={10}
              sx={{
                gridColumn: '1/12',
                gridRow: '1/2',
                width: '13%',
                height: 'auto',
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
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingRight: `${isSm || isMd ? '1rem' : '3.25rem'}`,
              paddingLeft: `${isSm || isMd ? '1rem' : '3.25rem'}`,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'nittanyNavy',
              borderColor: 'linkLight',
              backgroundColor: 'linkLight',
              fontSize: `${isSm || isMd ? '16px' : '18px'}`,
            }}
          >
            {link.text}
          </CtaButton>
        </Flex>
      </Grid>
      <Flex
        extraSx={{
          gridColumn: `${isSm || isMd ? '2/12' : '7/12'}`,
          gridRow: `${isSm || isMd ? '2/7' : '1/12'}`,
        }}
      >
        <Image
          src={image ?? blueBackgroundImage}
          width={0}
          height={0}
          sizes="100%"
          sx={{
            width: '100%',
            margin: 'auto',
            height: 'auto',
          }}
          alt="Blue Background"
        />
      </Flex>
    </Grid>
  );
};

export const OneUpBreakerFifty = ({
  title,
  description,
  link,
  image,
}: OneUpBreakerBlueBackgroundProps) => {
  const { isSm, isMd, isLg, isXl, is2xl } = useBreakpoints();

  return (
    <Grid
      extraSx={{
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundPositionX: 'center',
        height: `${is2xl || isXl ? '800px' : '900px'}`,
        gridTemplateColumns: ['repeat(12, 1fr)'],
        gridTemplateRows: ['repeat(12, 1fr)'],
      }}
    >
      <Grid
        extraSx={{
          gridColumn: `${isSm || isMd ? '1/13' : '1/7'}`,
          gridRow: `${isSm ? '1/5' : isMd ? '1/6' : '1/12'}`,
          backgroundColor: 'nittanyNavy',
          gridTemplateColumns: ['repeat(12, 1fr)'],
          gridTemplateRows: ['repeat(12, 1fr)'],
          overflowY: 'hidden',
        }}
      >
        <Image
          src={fiftyVector}
          width={10}
          height={10}
          sx={{
            gridColumn: `${
              isMd || isMd ? '1/3' : isLg ? '1/8' : isXl ? '1/12' : '1/13'
            }`,
            gridRow: '2/3',
            zIndex: 10000,
            width: 'auto',
            height: 'auto',
          }}
          alt="Hero Article"
        />

        <Image
          src={image ?? blueBackgroundImage}
          width={10}
          height={10}
          sx={{
            gridColumn: `${
              isMd || isMd ? '2/12' : isLg ? '3/36' : isXl ? '4/34' : '7/36'
            }`,
            gridRow: '0/13',
            width: '100%',
            height: 'auto',
            zIndex: 1,
            marginBottom: '-40px',
          }}
          alt="Hero Article"
        />
      </Grid>

      <Grid
        extraSx={{
          gridColumn: `${isSm || isMd ? '2/12' : '7/13'}`,
          gridRow: `${isSm ? '6/13' : isMd ? '7/13' : '0/13'}`,
        }}
      >
        <Flex
          extraSx={{
            flexDirection: 'column',
            gridColumn: `${isSm ? '1/13' : isMd ? '1/11' : '2/12'}`,
            gridRow: `${isSm || isMd ? '1/7' : '5/12'}`,
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
            <DisplayHeading
              variant={48}
              extraSx={{
                textAlign: 'left',
                mb: 4,
                gridColumn: '1/12',
                gridRow: '2/13',
                color: 'nittanyNavy',
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
              color: 'nittanyNavy',
              textAlign: 'left',
            }}
          >
            {description}
          </Body>
          <CtaButton
            variant="primaryOutlined"
            to={link.url}
            extraSx={{
              paddingTop: '1rem',
              paddingBottom: '1rem',
              paddingRight: `${isSm || isMd ? '1rem' : '3.25rem'}`,
              paddingLeft: `${isSm || isMd ? '1rem' : '3.25rem'}`,
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.25rem',
              color: 'white',
              borderColor: 'link',
              backgroundColor: 'link',
              fontSize: `${isSm || isMd ? '16px' : '18px'}`,
            }}
          >
            {link.text}
          </CtaButton>
        </Flex>
      </Grid>
    </Grid>
  );
};
