/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { FormLabel } from '@psu-flex/core-ui';
import { FormLabelProps } from '@psu-flex/core-ui';
export default {
  title: 'Form Elements/FormLabel',
  component: FormLabel,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: 'select',
    },
    color: {
      control: 'select',
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<FormLabelProps> = (args) => (
  <FormLabel {...args}>FormLabel</FormLabel>
);

export const Playground = Template.bind({});
Playground.args = {};
