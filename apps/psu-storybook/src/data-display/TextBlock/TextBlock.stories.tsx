/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { TextBlock } from '@psu-flex/core-ui';
import { Container, Wrapper } from '@psu-flex/core-ui';
import { exampleContentfulData } from './example-contentful-data';
import { Story } from '@storybook/react';
import { TextBlockProps } from '@psu-flex/components/src/components/base-components/data-display/TextBlock/TextBlockTypes';

export default {
  title: 'Core Composite/TextAndMedia/TextBlock',
  component: TextBlock,
  parameters: { layout: 'centered' },
  argTypes: {
    data: {
      control: {
        disable: true,
      },
    },
    gridColumn: {
      control: {
        disable: true,
      },
    },
    totalGridColumns: {
      control: {
        disable: true,
      },
    },
    extraSx: {
      control: {
        disable: true,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: Story<TextBlockProps> = () => (
  <Container>
    <Wrapper>
      <TextBlock data={exampleContentfulData} />
    </Wrapper>
  </Container>
);
export const Default = Template.bind({});
Default.args = {};
