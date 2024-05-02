/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import heroImage from './assets/hero-article-image.png';
import decoration from './assets/decoration.png';
import shapeImg from './assets/shape.svg';
import { CtaButton, DisplayHeading, Heading } from '@psu-flex/psu-global-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import { Flex, Grid } from '@psu-flex/psu-global-ui';

export interface HeroArticleProps {
  title?: string;
  image?: string;
  subHeading?: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
}

export const HeroArticle = ({
  title,
  image,
  subHeading,
  leftButtonLabel,
  rightButtonLabel,
}: HeroArticleProps) => {
  const { isLg, isXl, is2xl } = useBreakpoints();
  const ctaBorder = '1px solid var(--color-nittany-navy, #001E44)';

  return (
    <Grid
      extraSx={{
        gridTemplateColumns: ['repeat(1, 1fr)'],
        margin: [
          '32px 0 32px 26px',
          '40px 0 40px 32px',
          '48px 0 48px 62px',
          '48px 0 48px 62px',
        ],
        ...((isLg || isXl || is2xl) && {
          backgroundImage: `url(${decoration?.src ?? decoration})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `${is2xl ? '250px' : isXl ? '200px' : '140px'}`,
          backgroundPosition: `${
            isLg ? 'right 10px top 145px' : 'right 10px top 90px'
          }`,
        }),
      }}
    >
      {(leftButtonLabel || rightButtonLabel) && (
        <Flex gap={0} variant="center" extraSx={{ mt: 8, mb: 4 }}>
          {leftButtonLabel && (
            <CtaButton
              extraSx={{
                mr: 4,
                border: ctaBorder,
                color: 'nittanyNavy',
              }}
              variant="primaryOutlined"
            >
              {leftButtonLabel}
            </CtaButton>
          )}
          {rightButtonLabel && (
            <CtaButton
              extraSx={{
                border: ctaBorder,
                color: 'nittanyNavy',
              }}
              variant="primaryOutlined"
            >
              {rightButtonLabel}
            </CtaButton>
          )}
        </Flex>
      )}
      <Flex
        variant="col"
        extraSx={{
          justifyContent: 'center',
          width: '75%',
          margin: 'auto',
          mb: 16,
        }}
        wrap={false}
      >
        <div>
          <DisplayHeading
            variant={56}
            extraSx={{
              textAlign: 'center',
              width: '85%',
              margin: 'auto',
              mb: 4,
              color: 'beaverBlue',
            }}
          >
            {title}
          </DisplayHeading>
        </div>
        <div>
          <Heading
            extraSx={{
              textAlign: 'center',
              width: '100%',
              margin: 'auto',
              color: 'beaverBlue',
              fontWeight: 400,
            }}
            variant={24}
          >
            {subHeading}
          </Heading>
        </div>
      </Flex>
      <div
        sx={{
          aspectRatio: '16/9',
          paddingBottom: ['40px', '50px', '45px', '45px'],
          width: '75%',
          margin: 'auto',
        }}
      >
        <Grid
          extraSx={{
            gridTemplateColumns: ['repeat(12, 1fr)'],
            gridTemplateRows: ['repeat(12, 1fr)'],
            margin: 'auto',
          }}
        >
          {(isLg || isXl || is2xl) && (
            <img
              src={shapeImg?.src ?? shapeImg}
              sx={{
                gridColumn: '7/13',
                gridRow: '10/12',
                zIndex: 10000,
                width: '100%',
              }}
              alt="Hero Article"
            />
          )}

          <img
            src={image ?? heroImage?.src ?? heroImage}
            sx={{
              gridColumn: '2/12',
              gridRow: '1/11',
              width: '100%',
            }}
            alt="Hero Article"
          />
        </Grid>
      </div>
    </Grid>
  );
};
