/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Shield } from '@psu-flex/core-ui';
import { ShieldProps } from '@psu-flex/core-ui';
import { AppBar } from '@psu-flex/core-ui';

export default {
  title: 'Brand Elements/Shield',
  component: Shield,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ShieldProps> = () => (
  <AppBar
    className="flex justify-center"
    extraSx={{ py: [5, 7, 7, 7] }}
    backgroundColor="nittanyNavy"
  >
    <Shield width={[37, 40, 51, 51]} height={[41, 44, 56, 56]} />
  </AppBar>
);

export const Default = Template.bind({});
Default.args = {};
