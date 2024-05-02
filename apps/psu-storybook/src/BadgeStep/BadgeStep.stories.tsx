import React from 'react';
import { jsx, ThemeProvider, BadgeStep, BadgeStepProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/BadgeStep',
  component: BadgeStep,
} as Meta;

const Template: Story<BadgeStepProps> = (args) => (
  <ThemeProvider>
    <BadgeStep {...args}>
      BadgeStep story
    </BadgeStep>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};