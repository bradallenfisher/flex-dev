import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Section } from '@psu-flex/core-ui';
import { Body } from '@psu-flex/core-ui';
import { Container, Wrapper } from '@psu-flex/core-ui';
import { SectionProps } from '@psu-flex/core-ui';
export default {
  title: 'Layout/Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<SectionProps> = () => (
  <div sx={{ border: '1px dashed' }}>
    <Section>
      <Container>
        <Wrapper>
          <Body variant={22}>
            This text is wrapped by a Section with 100% width
          </Body>
        </Wrapper>
      </Container>
    </Section>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
