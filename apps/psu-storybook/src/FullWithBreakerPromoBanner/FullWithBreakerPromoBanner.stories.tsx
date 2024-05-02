import React from 'react';
import {
  jsx,
  ThemeProvider,
  FullWithBreakerPromoBanner,
  FullWithBreakerPromoBannerProps,
  FullWidthBreakerPromoBannerWithVideo,
  FullWidthBreakerPromoBannerWithVideoProps,
} from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import fullWidthBanner from './assets/full-width-banner.svg';
import fallbackVideo from './assets/advocate.mp4';

export default {
  title: 'Global/FullWithBreakerPromoBanner',
  component: FullWithBreakerPromoBanner,
} as Meta;

const videoSrc = fallbackVideo;
const youtubeVideo = 'https://www.youtube.com/watch?v=-VaMPxO_zyQ';

const Template: Story<FullWithBreakerPromoBannerProps> = (args) => (
  <ThemeProvider>
    <FullWithBreakerPromoBanner image={fullWidthBanner} {...args} />
  </ThemeProvider>
);

const Template2: Story<FullWithBreakerPromoBannerProps> = (args) => (
  <ThemeProvider>
    <FullWithBreakerPromoBanner
      image={fullWidthBanner}
      buttonLabel="Button Medium"
      buttonUrl="https://www.google.com"
      {...args}
    />
  </ThemeProvider>
);

const Template3: Story<FullWidthBreakerPromoBannerWithVideoProps> = () => (
  <ThemeProvider>
    <FullWidthBreakerPromoBannerWithVideo
      title="Lorem ipsum dolor sit amet consectetur. Et leo amet ac lectus faucibus."
      content="Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend."
      video={videoSrc}
    />
  </ThemeProvider>
);

const Template4: Story<FullWidthBreakerPromoBannerWithVideoProps> = () => (
  <ThemeProvider>
    <FullWidthBreakerPromoBannerWithVideo
      title="Lorem ipsum dolor sit amet consectetur. Et leo amet ac lectus faucibus."
      content="Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend."
      video={videoSrc}
      buttonLabel="Button Medium"
      buttonUrl="https://www.google.com"
    />
  </ThemeProvider>
);

const Template5: Story<FullWidthBreakerPromoBannerWithVideoProps> = () => (
  <ThemeProvider>
    <FullWidthBreakerPromoBannerWithVideo
      title="Lorem ipsum dolor sit amet consectetur. Et leo amet ac lectus faucibus."
      content="Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend."
      video={youtubeVideo}
    />
  </ThemeProvider>
);

const Template6: Story<FullWidthBreakerPromoBannerWithVideoProps> = () => (
  <ThemeProvider>
    <FullWidthBreakerPromoBannerWithVideo
      title="Lorem ipsum dolor sit amet consectetur. Et leo amet ac lectus faucibus."
      content="Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend."
      video={youtubeVideo}
      buttonLabel="Button Medium"
      buttonUrl="https://www.google.com"
    />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title:
    'Lorem ipsum dolor sit amet consectetur. Et leo amet ac lectus faucibus.',
  content:
    'Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend.',
};
export const WithButton = Template2.bind({});
WithButton.args = {
  title:
    'Lorem ipsum dolor sit amet consectetur. Et leo amet ac lectus faucibus.',
  content:
    'Lorem ipsum dolor sit amet consectetur. Eros enim cras pellentesque nunc nisi nulla mattis pellentesque sed. Euismod amet cursus vestibulum enim posuere tincidunt cursus praesent eleifend.',
};
export const WithVideo = Template3.bind({});
WithVideo.args = {};
export const WithVideoAndButton = Template4.bind({});
WithVideoAndButton.args = {};
export const WithYouTubeVideo = Template5.bind({});
WithYouTubeVideo.args = {};
export const WithYouTubeVideoAndButton = Template6.bind({});
WithYouTubeVideoAndButton.args = {};
