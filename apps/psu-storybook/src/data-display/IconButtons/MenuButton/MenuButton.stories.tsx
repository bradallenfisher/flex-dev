/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { MenuButton } from '@psu-flex/core-ui';
import { MenuButtonProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/IconButtons/MenuButton',
  component: MenuButton,
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

const Template: Story<MenuButtonProps> = () => (
  <div
    sx={{ px: 30, py: 5, borderRadius: 'xs', backgroundColor: 'nittanyNavy' }}
  >
    <MenuButton onClick={() => console.log('clicked')} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
