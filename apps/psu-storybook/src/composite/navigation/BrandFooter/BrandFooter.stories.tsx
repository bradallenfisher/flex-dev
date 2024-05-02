import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { BrandFooter, BrandFooterLink } from '@psu-flex/core-ui';
import { BrandFooterProps } from '@psu-flex/core-ui';

export default {
  title: 'Core Composite/Navigation/BrandFooter',
  component: BrandFooter,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const buttonData: BrandFooterLink[] = [
  { title: 'Hotline', to: 'https://universityethics.psu.edu/hotline' },
  { title: 'Privacy Statements', to: 'https://www.psu.edu/web-privacy-statement' },
  { title: 'Non Discrimination', to: 'https://policy.psu.edu/policies/ad85' },
  { title: 'Accessibility', to: 'https://www.psu.edu/accessibilitystatement' },
  { title: 'Equal Opportunity', to: 'https://policy.psu.edu/policies/hr11' },
  { title: 'Legal Statements', to: 'https://www.psu.edu/legal-statements' },
];

const Template: Story<BrandFooterProps> = (args) => (
  <BrandFooter linkItems={buttonData} />
);

export const Default = Template.bind({});
Default.args = {};
