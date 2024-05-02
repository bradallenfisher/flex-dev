/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Icon',
  component: Icon,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template1: Story<IconProps> = (args) => <Icon {...args} />;

export const IconPlayground = Template1.bind({});
IconPlayground.args = {
  color: 'nittanyNavy',
  size: 36,
  icon: 'calculate',
};
