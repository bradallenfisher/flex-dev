/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { gradients } from '@psu-flex/platform-theme';
import { useBreakpoints, useToggle } from '@psu-flex/utility-hooks';
import { useContent } from '@psu-flex/utility-functions';
import {
  Section,
  Container,
  Wrapper,
  Flex,
  Grid,
  useButtonGroupData,
  ButtonGroup,
} from '@psu-flex/core-ui';
import { Typography, Divider, PlayButton } from '@psu-flex/core-ui';
import { StandardHeroVideoProps } from './StandardHeroVideoTypes';

export const StandardHeroVideo = ({
  heading,
  video,
  copy,
  ...props
}: StandardHeroVideoProps) => {
  const videoRef: any = useRef(null);
  const [isPaused, setIsPaused] = useToggle(false);
  const contentProps = useContent(props);
  const buttonGroupDataProps = useButtonGroupData(props);
  const { isXl } = useBreakpoints();

  const toggleVideo = () => {
    if (isPaused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };
  const bothCtas =
    buttonGroupDataProps.ctaText && buttonGroupDataProps.secondaryCtaText;
  const oneCta =
    buttonGroupDataProps.ctaText || buttonGroupDataProps.secondaryCtaText;

  // Conditional height at mobile based on the number of CTAs
  const mobileSectionHeight = bothCtas
    ? '474px' // if both exist
    : oneCta
    ? '423px' // if either one exists
    : '360px'; // if none exist

  return (
    <Section
      extraSx={{
        aspectRatio: ['1/1', '16/9', '16/9', '16/9'],
        height: [mobileSectionHeight, 'auto', 'auto', 'auto'],
        position: 'relative',
        display: 'block',
        zIndex: '3',
        width: '100vw',
        '&::before': {
          content: "' '",
          height: '100%',
          width: '100vw',
          display: 'block',
          position: 'absolute',
          zIndex: '10 !important',
          top: ' 0 !important',
          background: () => `${gradients['hero']}`,
        },
      }}
    >
      <video
        ref={videoRef}
        className="absolute w-full h-full min-w-full min-h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={`${video}`}
      />
      <Container className="relative">
        <Wrapper>
          <Flex
            className="relative min-h-full"
            alignItems="flex-end"
            extraSx={{
              zIndex: 99,
            }}
          >
            <Grid
              extraSx={{
                alignSelf: 'flexEnd',
              }}
            >
              <Flex
                alignItems="flex-start"
                direction="column"
                extraSx={{
                  gridColumn: ['1/5', '2/8', '3/11', '3/10'],
                  mb: [10, 15, 25, 30],
                }}
              >
                <Typography
                  tag="h1"
                  size={[28, 36, 48, 56]}
                  color="white"
                  extraSx={{ mb: [8, 8, 10, 10], lineHeight: '120%' }}
                >
                  {heading}
                </Typography>
                <Divider
                  size="80px"
                  thickness="lg"
                  color="skyBlue"
                  extraSx={{ mb: 4 }}
                />
                <Typography
                  tag="p"
                  size={[20, 22, 24, 28]}
                  color="white"
                  extraSx={{
                    fontWeight: 'regular',
                    lineHeight: ['140%', '140%', '140%', '120%'],
                  }}
                >
                  {copy}
                </Typography>
                {buttonGroupDataProps && (
                  <ButtonGroup
                    hocId={contentProps && contentProps.id}
                    ctaSize={bothCtas ? 'sm' : oneCta && isXl ? 'md' : 'sm'}
                    extraSx={{ mt: [6, 6, 7, 8], pr: 20 }}
                    buttonGroupVariant="white"
                    withIconCta
                    {...buttonGroupDataProps}
                  />
                )}
              </Flex>
              <PlayButton
                hocId={contentProps && contentProps.id}
                variant="whiteOutlined"
                isPaused={isPaused}
                onClick={() => toggleVideo()}
                className="absolute"
                extraSx={{
                  right: 0,
                  bottom: [6, 7, 9, 10],
                }}
              />
            </Grid>
          </Flex>
        </Wrapper>
      </Container>
    </Section>
  );
};
