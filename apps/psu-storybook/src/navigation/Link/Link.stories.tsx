/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Link } from '@psu-flex/core-ui';
import React from 'react';
import { LinkProps } from '@psu-flex/core-ui';

export default {
  title: 'Navigation/Link',
  component: Link,
  argTypes: {
    underline: {
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'select',
      },
    },
    typeStyle: {
      control: {
        type: 'select',
      },
    },
    responsiveType: {
      control: {
        type: 'select',
      },
    },
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

const Template: Story<LinkProps> = (args) => <Link {...args}>Link</Link>;

export const Playground = Template.bind({});
Playground.args = {
  to: 'https://www.psu.edu/',
  variant: 24,
};
