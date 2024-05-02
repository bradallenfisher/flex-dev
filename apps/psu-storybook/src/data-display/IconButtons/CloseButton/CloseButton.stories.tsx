/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { CloseButton } from '@psu-flex/core-ui';
import { CloseButtonProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/IconButtons/CloseButton',
  component: CloseButton,
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
    menuButtonRef: {
      control: { type: null },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<CloseButtonProps> = (args) => (
  <div
    sx={{
      backgroundColor:
        args.variant === 'linkLight'
          ? 'nittanyNavy'
          : args.variant === 'white'
          ? 'nittanyNavy'
          : 'white',
      px: 20,
      py: 5,
      borderRadius: 'xs',
    }}
  >
    <CloseButton {...args} onClick={() => console.log('clicked')} />
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'link',
  size: 'sm',
};
