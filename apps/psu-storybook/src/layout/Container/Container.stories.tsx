import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Body } from '@psu-flex/core-ui';
import { Section, Container, Wrapper } from '@psu-flex/core-ui';
import { ContainerProps } from '@psu-flex/core-ui';
export default {
  title: 'Layout/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<ContainerProps> = () => (
  <Section>
    <Container>
      <Wrapper>
        <div sx={{ border: '1px dashed', p: 4 }}>
          <Body variant={20}>This text is wrapped by a Container</Body>
        </div>
      </Wrapper>
    </Container>
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
