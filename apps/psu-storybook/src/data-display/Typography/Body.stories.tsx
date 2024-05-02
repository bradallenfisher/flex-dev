/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Body } from '@psu-flex/core-ui';
import { BodyProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Typography/Body',
  component: Body,
  argTypes: {
    align: {
      control: {
        type: 'select',
      },
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['16', '18', '20', '22'],
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['coalyGray', 'white'],
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

const Template: Story<BodyProps> = (args) => (
  <Body {...args}>This is a Body</Body>
);

export const Default = Template.bind({});
Default.args = {
  variant: 18,
  align: 'center',
};
