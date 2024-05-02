import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { MinimalistHero } from '@psu-flex/psu-global-ui';
import fallbackVideo from './assets/advocate.mp4';
import fallbackImage from '@psu-flex/core-ui/assets/images/psuFallback2.png';
import { MinimalistHeroVideo } from '@psu-flex/psu-global-ui';
import { MinimalistHeroProps } from '@psu-flex/psu-global-ui/src/components/MinimalistHero/MinimalistHeroTypes';
import { MinimalistHeroVideoProps } from '@psu-flex/psu-global-ui/src/components/MinimalistHero/MinimalistHeroVideoTypes';
export default {
  title: 'Core Composite/Heros/MinimalistHero',
  component: MinimalistHero,
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

const Template: Story<MinimalistHeroProps | MinimalistHeroVideoProps | any> = (
  args
) => {
  return (
    <>
      {args.versionWithVideo ? (
        <MinimalistHeroVideo
          video={videoSrc}
          ctaText={args.ctaText}
          secondaryCtaText={args.secondaryCtaText}
          secondaryCtaTo="https://www.google.com/"
          ctaTo="https://www.google.com/"
          heading={args.heading}
        />
      ) : (
        <MinimalistHero
          image={imageSrc}
          ctaText={args.ctaText}
          secondaryCtaText={args.secondaryCtaText}
          secondaryCtaTo="https://www.google.com/"
          ctaTo="https://www.google.com/"
          heading="THON raises record-setting $13.7 million in its 50th year"
        />
      )}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  versionWithVideo: false,
  ctaText: 'Primary Button',
  secondaryCtaText: 'Secondary Button',
  heading: 'THON raises record-setting $13.7 million in its 50th year',
};
