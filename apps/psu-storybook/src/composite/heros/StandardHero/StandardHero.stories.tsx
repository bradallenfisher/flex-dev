import React, { Component } from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import fallbackVideo from './assets/advocate.mp4';
import fallbackImage from '@psu-flex/core-ui/assets/images/standardHeroBackground.png';
import { StandardHero, StandardHeroVideo } from '@psu-flex/core-ui';
import { StandardHeroVideoProps } from '@psu-flex/components/src/components/composite/heros/StandardHero/StandardHeroVideoTypes';
import { StandardHeroProps } from '@psu-flex/components/src/components/composite/heros/StandardHero/StandardHeroType';
export default {
  title: 'Core Composite/Heros/StandardHero',
  component: StandardHero,
  argTypes: {
    ctaTo: {
      control: {
        type: null,
      },
    },
    secondaryCtaTo: {
      control: {
        type: null,
      },
    },
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
  },
} as Meta;

const imageSrc = fallbackImage;
const videoSrc = fallbackVideo;

const Template: Story<StandardHeroProps | StandardHeroVideoProps | any> = (
  args
) => {
  return (
    <>
      {args.versionWithVideo ? (
        <StandardHeroVideo
          video={videoSrc}
          ctaText={args.ctaText}
          secondaryCtaText={args.secondaryCtaText}
          secondaryCtaTo="https://www.google.com/"
          ctaTo="https://www.google.com/"
          heading={args.heading}
          copy={args.copy}
        />
      ) : (
        <StandardHero
          image={imageSrc}
          ctaText={args.ctaText}
          secondaryCtaText={args.secondaryCtaText}
          secondaryCtaTo="https://www.google.com/"
          ctaTo="https://www.google.com/"
          heading={args.heading}
          copy={args.copy}
        />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  heading: 'We’ll meet you where you are.',
  versionWithVideo: false,
  ctaText: 'Primary Button',
  secondaryCtaText: 'Secondary Button',
  copy: 'We’re ready for you, future Nittany Lions! From virtual tours to connecting with current students, staff, and faculty in real time on campus.',
};
