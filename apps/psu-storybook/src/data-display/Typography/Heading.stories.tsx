/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Heading } from '@psu-flex/core-ui';
import { HeadingProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Typography/Heading',
  component: Heading,
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
    parameters: {
      layout: 'centered',
    },
    sx: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => (
  <Heading {...args}>This is a h2 Heading</Heading>
);

export const Default = Template.bind({});
Default.args = {
  color: 'nittanyNavy',
  variant: 40,
  align: 'center',
};
