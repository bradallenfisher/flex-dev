/** @jsx jsx */
/* eslint-disable no-undef */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import {
  Flex,
  Heading,
  Body,
  CtaButton,
  Icon,
  VectorDecorator,
  Video,
} from '@psu-flex/psu-global-ui';
import { useBreakpoints, useToggle } from '@psu-flex/utility-hooks';
import vector from './assets/vector.svg';
import HeroVectorGroup from './HeroVectorGroup';

export interface HeroFullWitdhVideoProps {
  title: string;
  video?: string;
  videoCaption?: string;
  ctaTitle?: string;
  ctaSubCopy?: string;
}

export function HeroFullWidthVideo({
  title,
  video,
  videoCaption,
  ctaTitle,
  ctaSubCopy,
}: HeroFullWitdhVideoProps) {
  const videoRef: any = useRef(null);
  const [isVideoPlaying, toggleIsVideoPlaying] = useToggle(true);
  const { isSm, isMd, isLg } = useBreakpoints();

  const toggleVideo = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      toggleIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      toggleIsVideoPlaying(true);
    }
  };

  return (
    <Flex
      extraSx={{
        backgroundImage: `url(${vector?.src ?? vector})`,
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
        maxWidth: '100%',
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
        <Video
          ref={videoRef}
          autoPlay
          sx={{
            width: '100%',
            height: '100%',
            maxHeight: '900px',
            minWidth: '100%',
          }}
          muted
          loop
          playsInline
          src={`${video}`}
        />
        {!isSm && (
          <Flex
            extraSx={{
              zIndex: 999,
              position: 'relative',
              left: '60%',
              maxWidth: '100%',
              bottom: '700px',
              '@media (min-width: 1135px)': {
                left: '75%',
              },
              '@media (min-width: 1200px) and (max-width: 1480px)': {
                bottom: '550px',
              },
              '@media (min-width: 1085px) and (max-width: 1200px)': {
                bottom: '525px',
              },
              '@media (min-width: 901px) and (max-width: 1084px)': {
                bottom: '475px',
              },
              '@media (min-width: 787px) and (max-width: 900px)': {
                bottom: '425px',
                left: '55%',
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
            maxWidth: '100%',
            marginTop: `${isSm ? '0px' : '-620px'}`,
            zIndex: 1000,
            position: 'relative',
            left: '60%',
            top: '-30px',
            '@media (min-width: 1135px)': {
              left: '65%',
            },
            '@media (min-width: 1300px)': {
              left: '75%',
            },
            '@media (min-width: 1700px)': {
              left: '80%',
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
          flexDirection: `${isSm || isMd ? 'column-reverse' : 'row'}`,
          maxWidth: '100%',
          '@media (min-width: 2400px)': {
            marginLeft: '17%',
          },
          '@media (min-width: 2200px) and (max-width: 2399px)': {
            marginLeft: '13%',
          },
          '@media (min-width: 2000px) and (max-width: 2199px)': {
            marginLeft: '9%',
          },
          '@media (min-width: 1850px) and (max-width: 1999px)': {
            marginLeft: '7%',
          },
          '@media (min-width: 1700px) and (max-width: 1849px)': {
            marginLeft: '4%',
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
          {videoCaption}
        </Body>
        <Flex
          extraSx={{
            paddingLeft: 'var(--2x, 0.5rem)',
            justifyContent: `${isSm || isMd ? 'flex-start' : 'flex-end'}`,
            gap: 'var(--5x, 1.25rem)',
            marginBottom: `${isSm || isMd ? '20px' : '0'}`,
          }}
        >
          <Flex
            extraSx={{
              width: '18.5rem',
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              gap: 'var(--6x, 1.5rem)',
            }}
          >
            <div>
              <CtaButton
                variant="whiteOutlined"
                extraSx={{
                  padding: 'var(--2x, 0.5rem)',
                  border: 'none',
                }}
              >
                <Icon
                  onClick={toggleVideo}
                  color="beaverBlue"
                  extraSx={{
                    width: ['var(--8x, 2rem)', '5rem'],
                    height: ['var(--8x, 2rem)', '5rem'],
                  }}
                  icon={isVideoPlaying ? 'pauseCircle' : 'playCircle'}
                />
              </CtaButton>
            </div>
            <div>
              <Heading
                align="left"
                color="beaverBlue"
                extraSx={{
                  fontFamily: 'Roboto',
                  fontWeight: '700',
                  lineHeight: '120%',
                }}
                tag="h2"
                responsiveType="column"
                variant={22}
              >
                {ctaTitle}
              </Heading>
              <Body
                color="beaverBlue"
                extraSx={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '150%',
                  fontFamily: 'Roboto',
                }}
              >
                {ctaSubCopy}
              </Body>
            </div>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
