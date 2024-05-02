import React from 'react';
import { jsx, ThemeProvider, ProcessStep, ProcessStepProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/ProcessSteps',
  component: ProcessStep,
} as Meta;

const Template: Story<ProcessStepProps> = (args) => (
  <ThemeProvider>
    <ProcessStep {...args}>
      ProcessSteps story
    </ProcessStep>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};