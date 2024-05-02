/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Tooltip, TooltipProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    placement: { control: { type: 'select' } },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template1: Story<TooltipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <button className="pointer" sx={{ py: 2, px: 3, fontSize: 16 }}>
        Hover me
      </button>
    </Tooltip>
  );
};

export const Playground = Template1.bind({});
Playground.args = {
  placement: 'top',
  content: 'Great job 👍',
  showDelay: 250,
  hideDelay: 100,
  tooltipMargin: '45px',
};
