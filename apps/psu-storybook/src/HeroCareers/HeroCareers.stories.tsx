import React from 'react';
import { jsx } from 'theme-ui';
import { Meta } from '@storybook/react';
import {
  HeroCareers as HeroCareersComponent,
  ThemeProvider,
} from '@psu-flex/psu-global-ui';
import { BackgroundWrapper } from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/HeroCareers',
  component: HeroCareersComponent,
  argTypes: {
    variant: {
      options: ['white'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = (args) => (
  <BackgroundWrapper variant="white" hasFixedHeight={true} {...args}>
    <ThemeProvider>
      <HeroCareersComponent {...args} />
    </ThemeProvider>
  </BackgroundWrapper>
);

export const Default = Template.bind({});
Default.args = {
  title: 'News Article Placeholder',
  description:
    'Penn State is where academic excellence meets vibrant campus life. Join our diverse community to innovate, connect, and create unforgettable memories that define the Penn State experience. Welcome to a future full of possibilities.',
  link: {
    text: 'Read Article',
    url: 'https://www.psu.edu/',
  },
  subHeading: 'News',
  locations: [
    { id: 1, name: 'Pennsylvania' },
    { id: 2, name: 'New Hampshire' },
    { id: 3, name: 'New Jersey' },
  ],
  onTypeChange: (type: string) => {},
  onLocationChange: (location: string) => {},
};
