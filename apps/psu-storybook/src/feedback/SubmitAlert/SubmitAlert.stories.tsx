import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { SubmitAlert } from '@psu-flex/core-ui';
import { SubmitAlertProps } from '@psu-flex/core-ui';
export default {
  title: 'Feedback/SubmitAlert',
  component: SubmitAlert,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    variant: {
      control: {
        type: 'select',
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<SubmitAlertProps> = (args) => (
  <SubmitAlert extraSx={{ width: '35vw' }} {...args}></SubmitAlert>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'success',
  alertTitle: 'Thank you!',
  children: 'Your response was not successfully submitted.',
};
