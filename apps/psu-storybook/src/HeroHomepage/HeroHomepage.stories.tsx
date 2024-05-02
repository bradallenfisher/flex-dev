import React from 'react';
import { jsx, ThemeProvider, HeroHomepage, HeroHomepageProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/HeroHomepage',
  component: HeroHomepage,
} as Meta;

const Template: Story<HeroHomepageProps> = (args) => (
  <ThemeProvider>
    <HeroHomepage {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Engaged Everywhere',
  subText: 'We’re redefining boundaries by seeing the world, sharing cultures and changing lives.',
};