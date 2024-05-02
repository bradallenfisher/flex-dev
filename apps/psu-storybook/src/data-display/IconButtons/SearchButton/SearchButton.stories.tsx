/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { SearchButton } from '@psu-flex/core-ui';
import { SearchButtonProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/IconButtons/SearchButton',
  component: SearchButton,
  argTypes: {
    icon: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    size: {
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<SearchButtonProps> = () => (
  <div
    sx={{ px: 30, py: 5, borderRadius: 'xs', backgroundColor: 'beaverBlue' }}
  >
    <SearchButton onClick={() => console.log('clicked')} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
