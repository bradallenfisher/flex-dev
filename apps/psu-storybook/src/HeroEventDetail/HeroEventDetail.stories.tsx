import React from 'react';
import { jsx, ThemeProvider, HeroEventDetail, HeroEventDetailProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/HeroEventDetail',
  component: HeroEventDetail,
} as Meta;

const Template: Story<HeroEventDetailProps> = (args) => (
  <ThemeProvider>
    <HeroEventDetail {...args} />
  </ThemeProvider>
);

const iconButtonData = [
  {
    icon: 'facebook',
    to: 'https://www.google.com/'
  },
  { icon: 'twitter', to: 'https://www.google.com/' },
  { icon: 'linkedIn', to: 'https://www.google.com/' },
  { icon: 'instagram', to: 'https://www.google.com/' },
  { icon: 'email', to: 'https://www.google.com/' }
];

export const Default = Template.bind({});
Default.args = {
  title: 'Welcoming 2024 Students',
  badges: ['Events', 'New Students'],
  externalLink: { label: 'External Link', url: 'https://www.psu.edu'},
  eventDate: 'August 20, 2021',
  eventTime: '12:00 PM',
  eventLocation: 'Old Main Lawn',
  iconButtonData: iconButtonData
};