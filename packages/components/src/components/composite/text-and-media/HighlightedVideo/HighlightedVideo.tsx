/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { HighlightedVideoProps } from './HighlightedVideoTypes';
import { Heading, Body, Card, Divider, Icon } from '@psu-flex/core-ui';
import { Section, Grid, Container, Wrapper } from '@psu-flex/core-ui';
import { useBreakpoints } from '@psu-flex/utility-hooks';
import ReactPlayer from 'react-player';

export const HighlightedVideo = ({
  subHeading,
  body,
  heading,
  videoUrl,
  backgroundColor,
}: HighlightedVideoProps) => {
  const { isSm, isMd, isLg } = useBreakpoints();

  return (
    <>
      {isSm || isMd || isLg ? (
        <Section
          className="w-full relative"
          extraSx={{
            zIndex: '0',
            height: ['350px', '324px', '324px', '480px'],
            bottom: '0',
          }}
        >
          <Container>
            <Grid
              extraSx={{
                width: '100%',
                height: '100%',
                zIndex: '6',
                alignItems: 'end',
                overflow: 'visible',
              }}
            >
              <Wrapper
                extraSx={{
                  zIndex: 3,
                  gridColumn: [
                    '1 / span 4',
                    '2 / span 6',
                    '1 / span 9',
                    '1 / span 9',
                  ],
                  gridRow: [
                    '1 / span 8',
                    '1 / span 8',
                    '1 / span 9',
                    '1 / span 9',
                  ],
                  px: ['26px', 0, 0, 0],
                }}
              >
                <ReactPlayer
                  className="relative"
                  sx={{
                    aspectRatio: ['16/9', '16/9', '16/9', '16/9'],
                    top: 'auto',
                    // border: '1px dotted red',
                  }}
                  height={'100%'}
                  width={'100%'}
                  light={true}
                  playing={true}
                  playIcon={
                    <Icon
                      icon="playCircle"
                      color="white"
                      size={[32, 40, 48, 60]}
                      extraSx={{
                        position: 'absolute',
                        left: ['4', '5', '5', '6'],
                        bottom: ['4', '5', '5', '6'],
                      }}
                    />
                  }
                  url={videoUrl}
                  controls={true}
                />
              </Wrapper>
              <Card
                extraSx={{
                  '&:after': {
                    content: '" "',
                    height: '350px',
                    width: '100%',

                    bg: backgroundColor,
                    position: 'absolute',
                    left: '0',
                    zIndex: '-1',
                  },
                  zIndex: [2, 2, 3, 3],
                  gridColumn: [
                    '1 / span 4',
                    '2 / span 6',
                    '1 / span 5',
                    '1 / span 4',
                  ],
                  gridRow: [
                    '8 / span 9',
                    '8 / span 9',
                    '1 / span 1',
                    '1 / span 1',
                  ],
                  px: ['26px', 0, 0, 0],
                }}
                square
                backgroundColor="transparent"
              >
                <div>
                  {subHeading && (
                    <Heading
                      extraSx={{ mb: 3, mt: 14 }}
                      color={
                        backgroundColor === 'limestoneMaxLight'
                          ? 'nittanyNavy'
                          : 'white'
                      }
                      className="uppercase"
                      variant={16}
                    >
                      {subHeading}
                    </Heading>
                  )}
                  <Heading
                    color={
                      backgroundColor === 'limestoneMaxLight'
                        ? 'nittanyNavy'
                        : 'white'
                    }
                    variant={28}
                  >
                    {heading}
                  </Heading>
                  <Divider
                    extraSx={{ mt: [6, 6, 6, 7], mb: 4 }}
                    thickness="sm"
                    size="80px"
                    color="skyBlue"
                  />
                  <Body
                    extraSx={{ mb: [6, 6, 6, 7] }}
                    color={
                      backgroundColor === 'limestoneMaxLight'
                        ? 'coalyGray'
                        : 'white'
                    }
                    variant={18}
                  >
                    {body}
                  </Body>
                </div>
              </Card>
            </Grid>
          </Container>
        </Section>
      ) : (
        <Section
          className="w-full relative"
          extraSx={{
            bg: backgroundColor,
            zIndex: '0',
            height: ['350px', '324px', '324px', '480px'],
            bottom: '0',
          }}
        >
          <Container>
            <Wrapper
              className="relative"
              extraSx={{
                mb: 12,
                overflow: 'visible',
              }}
            >
              <Grid
                extraSx={{
                  bottom: '0',
                  height: '100%',
                  zIndex: '6',
                }}
              >
                <Card
                  extraSx={{
                    zIndex: [2, 2, 3, 3],
                    top: 15,
                    mt: [0, 0, 10, 14],
                    gridColumn: [
                      '1 / span 4',
                      '2 / span 6',
                      '1 / span 5',
                      '1 / span 4',
                    ],
                  }}
                  square
                  backgroundColor="transparent"
                >
                  <div>
                    {subHeading && (
                      <Heading
                        extraSx={{ mb: 3 }}
                        color={
                          backgroundColor === 'limestoneMaxLight'
                            ? 'nittanyNavy'
                            : 'white'
                        }
                        className="uppercase"
                        variant={16}
                      >
                        {subHeading}
                      </Heading>
                    )}
                    <Heading
                      color={
                        backgroundColor === 'limestoneMaxLight'
                          ? 'nittanyNavy'
                          : 'white'
                      }
                      variant={28}
                    >
                      {heading}
                    </Heading>
                    <Divider
                      extraSx={{ mt: [6, 6, 6, 7], mb: 4 }}
                      thickness="sm"
                      size="80px"
                      color="skyBlue"
                    />
                    <Body
                      extraSx={{ mb: [6, 6, 6, 7] }}
                      color={
                        backgroundColor === 'limestoneMaxLight'
                          ? 'coalyGray'
                          : 'white'
                      }
                      variant={18}
                    >
                      {body}
                    </Body>
                  </div>
                </Card>

                <div
                  className="relative"
                  sx={{
                    zIndex: 4,
                    gridColumn: [
                      '1 / span 4',
                      '2 / span 6',
                      '6 / span 7',
                      '5 / span 8',
                    ],
                    height: ['350px', '324px', '324px', '480px'],
                  }}
                >
                  <ReactPlayer
                    className="relative"
                    sx={{
                      aspectRatio: ['1/1', '16/9', '16/9', '16/9'],
                      top: [6, 8, -8, -12],
                      // border: '1px dotted red',
                    }}
                    height={'100%'}
                    width={'100%'}
                    light={true}
                    playing={true}
                    playIcon={
                      <Icon
                        icon="playCircle"
                        color="white"
                        size={[32, 40, 48, 60]}
                        extraSx={{
                          position: 'absolute',
                          left: ['4', '5', '5', '6'],
                          bottom: ['4', '5', '5', '6'],
                        }}
                      />
                    }
                    url={videoUrl}
                    controls={true}
                  />
                </div>
              </Grid>
            </Wrapper>
          </Container>
        </Section>
      )}
    </>
  );
};
