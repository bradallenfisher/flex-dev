import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { BrandBar } from '@psu-flex/core-ui';

export default {
  title: 'Core Composite/Navigation/BrandBar',
  component: BrandBar,
} as Meta;

const Template = (args) => <BrandBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
