/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { useToggle, useBreakpoints } from '@psu-flex/utility-hooks';
import { useContent } from '@psu-flex/utility-functions';
import { Section } from '@psu-flex/core-ui';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import { PlayButton } from '@psu-flex/core-ui';
import { ShortHeroVideoProps } from './ShortHeroVideoTypes';

export const ShortHeroVideo = ({ video, ...props }: ShortHeroVideoProps) => {
  const inspectorProps = useContentfulInspectorMode({ entryId: props.id });

  const videoRef: any = useRef(null);
  const [isPaused, setIsPaused] = useToggle(false);
  const { isXl } = useBreakpoints();
  const contentProps = useContent(props);

  const toggleVideo = () => {
    if (isPaused) {
      videoRef.current.play();
      setIsPaused(false);
    } else {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <Section
      extraSx={{
        mb: [8, 12, 12, 12],
      }}
      {...inspectorProps({
        fieldId: 'heading',
      })}
    >
      <div
        className="relative block h-auto"
        sx={{
          aspectRatio: ['16 / 9', '16 / 9', '4 / 1', '4 / 1'],
        }}
      >
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover min-w-full min-h-full"
          autoPlay
          sx={{
            overflowX: 'visible',
          }}
          muted
          loop
          playsInline
          src={`${video}`}
        />
        <PlayButton
          hocId={contentProps && contentProps.id}
          size={isXl ? 'sm' : 'xs'}
          variant="whiteOutlined"
          isPaused={isPaused}
          onClick={() => toggleVideo()}
          className="absolute"
          extraSx={{
            right: ['5%', '2.5%', '2.5%', '2.5%'],
            bottom: '7.5%',
          }}
        />
      </div>
    </Section>
  );
};
