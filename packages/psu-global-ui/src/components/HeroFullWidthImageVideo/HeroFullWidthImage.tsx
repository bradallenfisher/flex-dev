/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import heroImage from './assets/hero-image.svg';
import vector from './assets/vector.svg';
import playIcon from './assets/play-icon.svg';
import {
  Body,
  Heading,
  useBreakpoints,
  CtaButton,
} from '@psu-flex/psu-global-ui';
import { Flex, VectorDecorator } from '@psu-flex/psu-global-ui';
import HeroVectorGroup from './HeroVectorGroup';
import Image from 'next/image';

export interface HeroFullWidthImageProps {
  title?: string;
  body?: string;
  image?: string;
}

export const HeroFullWidthImage = ({
  title,
  image = heroImage,
  body,
}: HeroFullWidthImageProps) => {
  const { isSm, isMd, isLg } = useBreakpoints();

  return (
    <Flex
      extraSx={{
        backgroundImage: `url(${vector})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 10px top 20px',
        '@media (min-width: 361px) and (max-width: 390px)': {
          backgroundPosition: 'right 10px top 105px',
        },
        '@media (min-width: 390px) and (max-width: 550px)': {
          backgroundPosition: 'right 10px top 80px',
        },
        backgroundSize: `${isSm ? '0 0' : 'auto'}`,
        padding: '3rem 0rem',
        flexDirection: 'column',
        margin: '32px 0 32px 26px',
        overflowX: 'hidden',
      }}
    >
      <Heading
        extraSx={{
          mb: 2,
          color: 'beaverBlue',
          fontSize: `${isSm ? '3rem' : isMd ? '3.5rem' : '4rem'}`,
          textAlign: 'center',
          marginRight: '32px',
          marginBottom: `${isSm ? '1.5rem' : isMd || isLg ? '2rem' : '4rem'}`,
        }}
      >
        {title}
      </Heading>
      <Flex
        extraSx={{
          marginRight: `${isSm ? '0px' : '32px'}`,
          maxWidth: '100%',
          flexDirection: 'column',
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
        {!isSm && (
          <Flex
            extraSx={{
              zIndex: 999,
              position: 'relative',
              left: '60%',
              bottom: '700px',
              '@media (min-width: 1135px)': {
                left: '58%',
              },
              '@media (min-width: 1085px) and (max-width: 1200px)': {
                bottom: '600px',
              },
              '@media (min-width: 901px) and (max-width: 1084px)': {
                bottom: '500px',
              },
              '@media (min-width: 787px) and (max-width: 900px)': {
                bottom: '425px',
              },
              '@media (min-width: 580px) and (max-width: 786px)': {
                bottom: '370px',
                left: '40%',
              },
              '@media (min-width: 361px) and (max-width: 579px)': {
                bottom: '310px',
                left: '40%',
              },
            }}
          >
            <HeroVectorGroup />
          </Flex>
        )}
        <Flex
          direction="column"
          extraSx={{
            marginTop: `${isSm ? '0px' : '-620px'}`,
            zIndex: 1000,
            position: 'relative',
            left: '60%',
            bottom: '45px',
            '@media (min-width: 1135px)': {
              left: '65%',
            },
          }}
        >
          <VectorDecorator />
        </Flex>
      </Flex>

      <Flex
        extraSx={{
          marginTop: `${isSm ? '1rem' : isMd ? '1.5rem' : '4rem'}`,
          marginRight: `${isSm ? '0px' : '32px'}`,
          '@media (min-width: 2400px)': {
            marginLeft: '25%',
          },
          '@media (min-width: 2200px) and (max-width: 2399px)': {
            marginLeft: '23%',
          },
          '@media (min-width: 2000px) and (max-width: 2199px)': {
            marginLeft: '20%',
          },
          '@media (min-width: 1850px) and (max-width: 1999px)': {
            marginLeft: '17%',
          },
          '@media (min-width: 1700px) and (max-width: 1849px)': {
            marginLeft: '15%',
          },
          '@media (min-width: 1560px) and (max-width: 1699px)': {
            marginLeft: '11%',
          },
          '@media (min-width: 1415px) and (max-width: 1559px)': {
            marginLeft: '7%',
          },
          '@media (min-width: 1300px) and (max-width: 1414px)': {
            marginLeft: '5%',
          },
        }}
      >
        <Body
          variant={24}
          extraSx={{
            borderLeft: '2px solid',
            borderColor: 'beaverBlue',
            paddingLeft: '24px',
            mb: 6,
            fontWeight: '400',
            width: `${isSm || isMd ? 'auto' : '60%'}`,
          }}
        >
          {body}
        </Body>
      </Flex>
    </Flex>
  );
};
