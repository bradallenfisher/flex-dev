/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { AdvanceButton } from '@psu-flex/core-ui';
import { AdvanceButtonProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/IconButtons/AdvanceButton',
  component: AdvanceButton,
  argTypes: {
    icon: {
      control: { type: 'select' },
    },
    variant: {
      control: { type: 'select' },
    },
    direction: {
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
    extraSx: {
      control: { type: null },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<AdvanceButtonProps> = (args) => (
  <div
    sx={{
      backgroundColor:
        args.variant === 'white' ? 'nittanyNavy' : 'limestoneLight',
      px: 20,
      py: 5,
      borderRadius: 'xs',
    }}
  >
    <AdvanceButton {...args} onClick={() => console.log('clicked')} />
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'nittanyNavy',
  size: 'sm',
};
