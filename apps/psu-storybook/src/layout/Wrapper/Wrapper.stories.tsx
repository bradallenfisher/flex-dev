import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Wrapper } from '@psu-flex/core-ui';
import { Body } from '@psu-flex/core-ui';
import { WrapperProps } from '@psu-flex/core-ui';
export default {
  title: 'Layout/Wrapper',
  component: Wrapper,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<WrapperProps> = () => (
  <Wrapper>
    <div sx={{ p: 5, border: '1px dashed' }}>
      <Body variant={22}>
        This content is wrapped by a Wrapper. The Wrapper provides responsive
        margins to the left and right of the content
      </Body>
    </div>
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};
