import React from 'react';
import { jsx, ThemeUIProvider } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { HeroFifty as HeroFiftyComponent } from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/HeroFifty',
  component: HeroFiftyComponent,
  argTypes: {
    variant: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = (args) => (
  <div>
    <HeroFiftyComponent {...args} />
  </div>
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
};
