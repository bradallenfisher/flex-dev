import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Accordion, AccordionProps } from '@psu-flex/psu-global-ui';
import { Container, Wrapper } from '@psu-flex/psu-global-ui';
import { faqs } from './example-data';
export default {
  title: 'Core Composite/TextAndMedia/Accordion',
  component: Accordion,
} as Meta;

const Template: Story<AccordionProps> = (args) => (
  <Container>
    <Wrapper
      className="h-full"
      extraSx={{
        py: [12, 15, 15, 15],
        backgroundColor: 'white',
      }}
    >
      <Accordion {...args} />
    </Wrapper>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Penn State’s rankings',
  body: 'Often ranked as a top twenty-five research university, our top-tier quality is reflected in Penn State’s worldwide standings as a leader in research, education, and community.',
  data: faqs,
};
