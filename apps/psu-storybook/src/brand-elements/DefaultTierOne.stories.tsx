/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { DefaultTierOne } from '@psu-flex/core-ui';
import { DefaultTierOneProps } from '@psu-flex/core-ui';
import { AppBar } from '@psu-flex/core-ui';

export default {
  title: 'Brand Elements/DefaultTierOne',
  component: DefaultTierOne,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<DefaultTierOneProps> = () => (
  <AppBar
    className="flex justify-center"
    extraSx={{ py: [5, 7, 7, 7] }}
    backgroundColor="nittanyNavy"
  >
    <DefaultTierOne width={[84, 90, 116, 116]} height={[13, 14, 18, 18]} />
  </AppBar>
);

export const Default = Template.bind({});
Default.args = {};
