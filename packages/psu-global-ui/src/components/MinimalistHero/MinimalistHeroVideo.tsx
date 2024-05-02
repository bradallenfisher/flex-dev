/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { gradients } from '@psu-flex/platform-theme';
import { useToggle, useBreakpoints } from '@psu-flex/utility-hooks';
import {
  Section,
  Container,
  Wrapper,
  Flex,
  Grid,
  PlayButton,
  useButtonGroupData,
  ButtonGroup,
  useContent,
  DisplayHeading,
} from '@psu-flex/core-ui';
import { MinimalistHeroVideoProps } from './MinimalistHeroVideoTypes';

export const MinimalistHeroVideo = ({
  heading,
  video,
  ...props
}: MinimalistHeroVideoProps) => {
  const videoRef: any = useRef(null);
  const [isPaused, setIsPaused] = useToggle(false);
  const { isXl } = useBreakpoints();

  const contentProps = useContent(props);
  const buttonGroupDataProps = useButtonGroupData(props);

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
    ? '410px' // if both exist
    : oneCta
    ? '360px' // if either one exists
    : '360px'; // if none exist

  return (
    <Section
      className="relative block"
      extraSx={{
        aspectRatio: ['1/1', '16/9', '16/9', '16/9'],
        height: [mobileSectionHeight, 'unset', 'unset', 'unset'],
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
                  mb: [bothCtas || oneCta ? 10 : 20, 20, 25, '140px'],
                  gridColumn: ['1/5', '2/8', '2/10', '2/9'],
                }}
              >
                <DisplayHeading variant={64} color="white">
                  {heading}
                </DisplayHeading>
                {buttonGroupDataProps && (
                  <ButtonGroup
                    withIconCta
                    hocId={contentProps && contentProps.id}
                    ctaSize={bothCtas ? 'sm' : oneCta && isXl ? 'md' : 'sm'}
                    extraSx={{ mt: [6, 6, 7, 8], pr: 20 }}
                    buttonGroupVariant="white"
                    {...buttonGroupDataProps}
                  />
                )}
              </Flex>
              <PlayButton
                className="absolute"
                variant="whiteOutlined"
                isPaused={isPaused}
                onClick={toggleVideo}
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
