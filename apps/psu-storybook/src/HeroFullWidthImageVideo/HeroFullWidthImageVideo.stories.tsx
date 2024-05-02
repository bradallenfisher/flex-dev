import React from 'react';
import {
  jsx,
  ThemeProvider,
  HeroFullWidthImage,
  HeroFullWidthImageProps,
  HeroFullWidthVideo,
  HeroFullWidthVideoProps,
} from '@psu-flex/psu-global-ui';
import fallbackVideo from './assets/advocate.mp4';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/HeroFullWidthImageVideo',
  component: HeroFullWidthImage,
} as Meta;

const videoSrc = fallbackVideo;

const Template: Story<HeroFullWidthImageProps> = (args) => (
  <ThemeProvider>
    <HeroFullWidthImage {...args} />
  </ThemeProvider>
);

const Template2: Story<HeroFullWidthVideoProps> = () => (
  <ThemeProvider>
    <HeroFullWidthVideo
      title="Lorem ipsum dolor sit"
      video={videoSrc}
      videoCaption="Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend."
      ctaTitle="Video CTA Here"
      ctaSubCopy="Lorem ipsum dolor sit amet consectetur. "
    />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Lorem ipsum dolor sit',
  body: 'Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend.',
  ctaTitle: 'Video CTA Here',
  ctaBody: 'Lorem ipsum dolor sit amet consectetur. ',
};
export const WithVideoCta = Template2.bind({});
WithVideoCta.args = {};
