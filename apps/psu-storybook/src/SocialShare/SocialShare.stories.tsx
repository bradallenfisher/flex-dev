import React from 'react';
import { jsx, SocialShare, SocialShareProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/SocialShare',
  component: SocialShare,
  parameters: { layout: 'centered' },
  argTypes: {
    icon: { table: { disable: true } },
    to: { table: { disable: true } },
    sx: { table: { disable: true } },
    extraSx: { table: { disable: true } },
  },
} as Meta;

const Template: Story<SocialShareProps> = (args) => (
  <SocialShare {...args} />
);

export const Default = Template.bind({});
Default.args = {};