import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Error404 } from '@psu-flex/static-page';
export default {
  title: 'Pages/404Page',
  component: Error404,
} as Meta;

const Template = () => <Error404 />;

export const Default = Template.bind({});
Default.args = {};
