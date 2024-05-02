/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { DisplayHeading } from '@psu-flex/core-ui';
import { DisplayHeadingProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Typography/DisplayHeading',
  component: DisplayHeading,
  argTypes: {
    align: {
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'select',
      },
    },
    variant: {
      control: {
        type: 'select',
        options: [56, 64],
      },
    },
    tag: {
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

const Template: Story<DisplayHeadingProps> = (args) => (
  <DisplayHeading {...args}>This is a DisplayHeading</DisplayHeading>
);

export const Default = Template.bind({});
Default.args = {
  variant: 56,
  color: 'beaverBlue',
  align: 'center',
};
