/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import bckImage from './assets/hero-fifty.svg';
import shapeImg from './assets/shape.svg';
import { DisplayHeading, Body, Link, Heading } from '@psu-flex/psu-global-ui';
import { Flex, Grid } from '@psu-flex/psu-global-ui';
export interface HeroFiftyProps {
  title?: string;
  image?: string;
  description?: string;
  link?: {
    text: string;
    url: string;
  };
  subHeading?: string;
}

export const HeroFifty = ({
  title,
  image,
  description,
  link,
  subHeading,
}: HeroFiftyProps) => {
  return (
    <Grid
      extraSx={{
        margin: [
          '32px 0 32px 26px',
          '40px 0 40px 32px',
          '48px 0 48px 62px',
          '48px 0 48px 62px',
        ],
      }}
    >
      <Flex
        alignItems="center"
        extraSx={{
          flexDirection: ['column-reverse', 'column-reverse', 'row', 'row'],
          gridColumn: [
            '1 / span 4',
            '1 / span 8',
            '1 / span 12',
            '1 / span 12',
          ],
        }}
        wrap={false}
      >
        <Grid
          extraSx={{
            gridColumn: [
              '1 / span 4',
              '1 / span 8',
              '1 / span 6',
              '1 / span 12',
            ],
          }}
        >
          <Flex
            variant="col"
            extraSx={{
              justifyContent: 'center',
              gridColumn: ['1/5', '1/9', '1/7', '1/7'],
              gridRow: ['2/2', '2/2', '1/2', '1/2'],
            }}
            wrap={false}
          >
            <Heading extraSx={{ mb: 2, color: 'beaverBlue' }} variant={20}>
              {subHeading}
            </Heading>
            <DisplayHeading
              variant={56}
              extraSx={{ mb: 4, color: 'beaverBlue' }}
            >
              {title}
            </DisplayHeading>
            <Body variant={24} extraSx={{ mb: 6, fontWeight: '400' }}>
              {description}
            </Body>
            <Link
              className="flex items-center capitalize"
              to={link?.url ?? '/'}
              variant={24}
              underline="always"
              extraSx={{ fontWeight: '400' }}
            >
              {link?.text}
            </Link>
          </Flex>
          <div
            sx={{
              gridColumn: ['1/5', '1/9', '7/13', '7/13'],
              aspectRatio: '4/3',
              backgroundImage: `url(${shapeImg?.src ?? shapeImg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              paddingBottom: ['40px', '50px', '45px', '45px'],
              paddingTop: ['20px', '40px', '40px', '40px'],
              backgroundPosition: 'right',
            }}
          >
            <img
              sx={{ width: '100%', paddingRight: ['26px', '32px', 0, 0] }}
              src={image ?? bckImage}
              alt="Hero background"
            />
          </div>
        </Grid>
      </Flex>
    </Grid>
  );
};
