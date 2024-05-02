/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { Body, CtaButton, Flex, Heading, Section } from "@psu-flex/core-ui";
import { useBreakpoints } from '@psu-flex/utility-hooks';
import React, { useRef } from "react";
import { Video } from '../Video/Video';

export interface FullWidthBreakerPromoBannerWithVideoProps {
  video?: string;
  title: string;
  content: string;
  buttonLabel?: string;
  buttonUrl?: string;
}

export const FullWidthBreakerPromoBannerWithVideo = ({
  video,
  title,
  content,
  buttonLabel,
  buttonUrl,
 }: FullWidthBreakerPromoBannerWithVideoProps) => {
  const videoRef: any = useRef(null);
  const { isSm, isMd } = useBreakpoints();
  return (
    <Section
      className="w-full bg-cover bg-no-repeat"
      extraSx={{
        width: '100%',
        gap: '7',
        objectFit: 'cover',
        minHeight: '768px',
        position: 'relative',
      }}
    >
      <Video
        src={video}
        className="absolute"
        ref={videoRef}
        playing={true}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '100%',
          minWidth: '100%',
          objectFit: 'cover',
        }}
      />
      <div sx={{
        position: 'absolute',
        width: '100%',
        bottom: 0,
      }}>
        <Flex
          direction='column'
          extraSx={{
            backgroundColor: 'nittanyNavy',
            maxWidth: '756px',
            marginInline: 'auto',
            padding: '3rem 4rem 3rem 4rem',
            '@media (max-width: 768px)': {
              pt: 6,
              px: 8,
            },
          }}
        >
          <div
            sx={{
              maxWidth: '628px',
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
            >{title}</Heading>
            <Body
              extraSx={{
                color: 'white',
                '@media (max-width: 768px)': {
                  fontSize: '16px',
                },
              }}
              variant={20}
            >{content}</Body>
            {buttonLabel && <CtaButton
              extraSx={{
                mt: 8,
              }}
              size={ isSm || isMd ? 'sm' : 'md'}
              variant='lightFilled'
              to={buttonUrl}>{buttonLabel}</CtaButton>}
          </div>
          <div
            sx={{
              position: 'relative',
              right: '-90%',
              bottom: -13,
              '@media (max-width: 1080px)': {
                right: '-70%',
              },
              '@media (max-width: 768px)': {
                right: '-50%',
              },
            }}
          >
            <svg width="379" height="65" viewBox="0 0 379 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M352.483 65H0L26.5171 0H379L352.483 65Z" fill="#EBFF00"/>
            </svg>
          </div>
        </Flex>
      </div>
    </Section>
  );
};
