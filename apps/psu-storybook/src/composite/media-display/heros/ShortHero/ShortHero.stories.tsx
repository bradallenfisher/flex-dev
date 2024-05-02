import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  ShortHero,
  ShortHeroProps,
  ShortHeroVideo,
} from '@psu-flex/psu-global-ui';
import fallbackImage from './assets/test-image.png';
import video from './assets/wideVideoSample.mp4';
export default {
  title: 'Core Composite/Heros/ShortHero',
  component: ShortHero,
  argTypes: {
    image: {
      control: {
        type: null,
      },
    },
    video: {
      control: {
        type: null,
      },
    },
    alt: {
      control: {
        type: null,
      },
    },
    id: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const imageSrc = fallbackImage;
const videoSrc = video;

const Template: Story<ShortHeroProps> = (args) => {
  return (
    <>
      {args.versionWithImage ? (
        <ShortHero alt="" image={imageSrc} />
      ) : (
        <ShortHeroVideo video={videoSrc} />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  versionWithImage: true,
};
