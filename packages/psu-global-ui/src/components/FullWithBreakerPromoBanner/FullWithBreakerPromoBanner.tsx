/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import {
  Body,
  Container,
  CtaButton,
  Flex,
  Heading,
  Grid,
  Wrapper,
} from '@psu-flex/core-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import Image from 'next/image';

export interface FullWithBreakerPromoBannerProps {
  image?: any;
  title: string;
  content: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

export const FullWithBreakerPromoBanner = ({
  image,
  title,
  content,
  buttonLabel,
  buttonUrl,
}: FullWithBreakerPromoBannerProps) => {
  const { isSm, isMd, isXl, is2xl } = useBreakpoints();

  return (
    <Grid
      extraSx={{
        width: '100%',
        gridTemplateColumns: 'repeat(10, 1fr)',
        maxHeight: '1200px',
      }}
    >
      <div
        sx={{
          width: '100%',
          minHeight: '285px',
          gridColumn: '1/11',
          gridRow: '1/5',
        }}
      >
        <Image
          src={image}
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: '100%',
            height: '100%',
            maxHeight: '900px',
            minWidth: '100%',
          }}
        />
      </div>
      <Grid
        extraSx={{
          maxWidth: '100%',
          zIndex: 1000,
          gridColumn: `${is2xl ? '3/8' : isXl ? '2/9' : '1/11'}`,
          gridRow: `${is2xl ? '3/5' : isXl ? '3/5' : '3/10'}`,
          '@media (min-width: 361px) and (max-width: 420px)': {
            gridRow: '4/10',
            marginTop: '25px',
          },
          '@media (min-width: 421px) and (max-width: 470px)': {
            gridRow: '3/10',
            marginTop: '60px',
          },
          '@media (min-width: 471px) and (max-width: 670px)': {
            gridRow: '4/10',
            marginTop: '10px',
          },
          '@media (min-width: 671px) and (max-width: 870px)': {
            gridRow: '4/10',
            marginTop: '18px',
          },
          '@media (min-width: 871px) and (max-width: 1079px)': {
            gridRow: '4/10',
            marginTop: '20px',
          },
          '@media (min-width: 1080px) and (max-width: 1226px)': {
            marginTop: '45px',
          },

          'overflow-x': `${is2xl || isXl ? 'visible' : 'hidden'}`,
          marginTop: `${isSm ? '80px' : '45px'}`,
          backgroundColor: 'nittanyNavy',
          height: '90%',

          minWidth: '360px',
          padding: '3rem 4rem 0rem 4rem',

          '@media (max-width: 768px)': {
            maxWidth: '100%',
            pt: 6,
            pl: 8,
          },
          gridTemplateColumns: 'repeat(10, 1fr)',
          gridTemplateRows: 'repeat(10, 1fr)',
        }}
      >
        <div
          sx={{
            gridColumn: '1/10',
            gridRow: '1/12',
          }}
        >
          <Heading
            extraSx={{
              color: 'white',
              gap: '11px',
              padding: '0px 0px 1.25rem 0px',
              '@media (max-width: 768px)': {
                fontSize: '40px',
              },
            }}
            variant={48}
          >
            {title}
          </Heading>
          <Body
            extraSx={{
              color: 'white',
              '@media screen and (max-width: 768px)': {
                fontSize: '16px',
              },
            }}
            variant={20}
          >
            {content}
          </Body>
          {buttonLabel && (
            <CtaButton
              extraSx={{
                mt: 8,
              }}
              size={isSm || isMd ? 'sm' : 'md'}
              variant="lightFilled"
              to={buttonUrl}
            >
              {buttonLabel}
            </CtaButton>
          )}
        </div>
        <div
          sx={{
            gridColumn: '9/12',
          }}
        >
          <svg
            width="379"
            height="65"
            viewBox="0 0 379 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M352.483 65H0L26.5171 0H379L352.483 65Z" fill="#EBFF00" />
          </svg>
        </div>
      </Grid>
    </Grid>
  );
};
