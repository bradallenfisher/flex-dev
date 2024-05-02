import React from 'react';
import { jsx, ThemeProvider, Quote, QuoteProps, Flex } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/Quote',
  component: Quote,
} as Meta;

const Template: Story<QuoteProps> = (args) => (
  <ThemeProvider>
    <Flex extraSx={{ backgroundColor: 'nittanyNavy' }}>
      <Quote {...args} />
    </Flex>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  body: 'I’m passionate about telling diverse stories, not because it\'s the thing to do now, but because authentic storytelling can help break down stereotypes, normalize different cultural experiences, and bring people together.',
  author: 'Pooja Mallipamula, Penn State alum',
};