import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Footer, FooterProps, BrandFooter, Flex } from '@psu-flex/core-ui';

export default {
  title: 'Core Composite/Navigation/Footer',
  component: Footer,
  argTypes: {
    tierOneMark: {
      control: {
        type: null,
      },
    },
  },
} as Meta;

const Template: Story<FooterProps> = (args) => (
  <Flex direction="column">
    <Footer {...args} />
    <BrandFooter brandBarButtonData={buttonData} />
  </Flex>
);

const buttonData = [
  {
    text: 'Hotline',
    to: 'https://universityethics.psu.edu/hotline',
  },
  {
    text: 'Privacy Statements',
    to: 'https://www.psu.edu/web-privacy-statement',
  },
  { text: 'Non Discrimination', to: 'https://policy.psu.edu/policies/ad85' },
  { text: 'Accessibility', to: 'https://www.psu.edu/accessibilitystatement' },
  { text: 'Equal Opportunity', to: 'https://policy.psu.edu/policies/hr11' },
  { text: 'Legal Statements', to: 'https://www.psu.edu/legal-statements' },
];

const iconButtonData = [
  {
    icon: 'facebook',
    to: 'https://www.google.com/',
  },
  { icon: 'twitter', to: 'https://www.google.com/' },
  { icon: 'linkedIn', to: 'https://www.google.com/' },
  { icon: 'instagram', to: 'https://www.google.com/' },
  { icon: 'youtube', to: 'https://www.google.com/' },
];

const listOptions = [
  {
    listHeading: 'List Heading 1',
    listOptions: [
      { id: 1, name: 'List item 1', href: 'https://www.google.com/' },
      { id: 2, name: 'List item 2', href: 'https://www.google.com/' },
      { id: 3, name: 'List item 3', href: 'https://www.google.com/' },
      { id: 4, name: 'List item 4', href: 'https://www.google.com/' },
      { id: 5, name: 'List item 5', href: 'https://www.google.com/' },
      { id: 6, name: 'List item 6', href: 'https://www.google.com/' },
    ],
  },
  {
    listHeading: 'List Heading 2',
    listOptions: [
      { id: 1, name: 'List item 1', href: 'https://www.google.com/' },
      { id: 2, name: 'List item 2', href: 'https://www.google.com/' },
      { id: 3, name: 'List item 3', href: 'https://www.google.com/' },
      { id: 4, name: 'List item 4', href: 'https://www.google.com/' },
      { id: 5, name: 'List item 5', href: 'https://www.google.com/' },
      { id: 6, name: 'List item 6', href: 'https://www.google.com/' },
    ],
  },
  {
    listHeading: 'List Heading 3',
    listOptions: [
      { id: 1, name: 'List item 1', href: 'https://www.google.com/' },
      { id: 2, name: 'List item 2', href: 'https://www.google.com/' },
      { id: 3, name: 'List item 3', href: 'https://www.google.com/' },
      { id: 4, name: 'List item 4', href: 'https://www.google.com/' },
      { id: 5, name: 'List item 5', href: 'https://www.google.com/' },
      { id: 6, name: 'List item 6', href: 'https://www.google.com/' },
    ],
  },
];

export const Default = Template.bind({});
Default.args = {
  optionsContact: [
    {
      id: 1,
      name: 'Phone: ',
      value: '+1 (814) 865-4700',
      href: 'tel:1-814-865-4700',
    },
    { id: 2, name: 'Fax: ', value: '+1 (814) 863-7590' },
    {
      id: 3,
      name: 'Email: ',
      value: 'nittanylion@psu.edu',
      href: 'mailto:nittanylion@psu.edu',
    },
  ],
  iconButtonData: iconButtonData,
  listOptions: listOptions,
};
