import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Footer } from '@psu-flex/psu-global-ui';
import { Flex } from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/Footer',
  component: Footer,
} as Meta;

const Template: Story<typeof Footer> = (args) => (
  <Flex direction="column">
    <Footer {...args} />
  </Flex>
);

export const Default = Template.bind({});
Default.args = {
  options1: [
    { id: 1, name: 'Global Learning Hub', href: 'https://www.google.com/' },
    {
      id: 2,
      name: 'Partnering with Penn State',
      href: 'https://www.google.com/',
    },
    {
      id: 3,
      name: 'Browse & Apply for Programs',
      href: 'https://www.google.com/',
    },
    { id: 4, name: 'Global Safety', href: 'https://www.google.com/' },
    {
      id: 5,
      name: 'Travel Grants & Scholarships',
      href: 'https://www.google.com/',
    },
    {
      id: 6,
      name: 'Get Involved with Global Learning',
      href: 'https://www.google.com/',
    },
  ],
  options2: [
    { id: 1, name: 'About', href: 'https://www.google.com/' },
    { id: 2, name: 'How to Give', href: 'https://www.google.com/' },
    {
      id: 3,
      name: 'News',
      href: 'https://www.google.com/',
    },
    { id: 4, name: 'Strategic Plan', href: 'https://www.google.com/' },
    { id: 5, name: 'Directory', href: 'https://www.google.com/' },
    {
      id: 6,
      name: 'Careers',
      href: 'https://www.google.com/',
    },
  ],
};
