import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Body, Box } from '@psu-flex/core-ui';
import { Section, Container, Wrapper } from '@psu-flex/core-ui';
import { ContainerProps } from '@psu-flex/core-ui';
export default {
  title: 'Layout/Box',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<ContainerProps> = () => (
  <Section>
    <Container>
      <Wrapper>
        <Box
          className="w-fit mx-auto"
          extraSx={{
            borderRadius: 'sm',
            borderStyle: 'dashed',
            borderColor: 'limestoneGray',
            p: 4,
          }}
        >
          This Box is a generic wrapper for any element.
        </Box>
      </Wrapper>
    </Container>
  </Section>
);

export const Default = Template.bind({});
Default.args = {};
