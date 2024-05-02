/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { BackgroundWrapper } from '@psu-flex/core-ui';
import { Container, Wrapper } from '@psu-flex/core-ui';
import { Heading } from '@psu-flex/core-ui';
import { BackgroundWrapperProps } from '@psu-flex/core-ui';

export default {
  title: 'Layout/BackgroundWrapper',
  component: BackgroundWrapper,
  argTypes: {
    variant: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<BackgroundWrapperProps> = (args) => (
  <div sx={{ background: 'white', height: '50vw' }}>
    <BackgroundWrapper variant="white" {...args}>
      <Container>
        <Wrapper>
          <Heading variant={32}>
            This Heading is wrapped by a BackgroundWrapper
          </Heading>
        </Wrapper>
      </Container>
    </BackgroundWrapper>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {};
