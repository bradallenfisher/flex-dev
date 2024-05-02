import React from 'react';
import { jsx, ThemeProvider, NewsLetterForm, NewsLetterFormProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import { Flex } from '@psu-flex/core-ui';

export default {
  title: 'Global/NewsLetterForm',
  component: NewsLetterForm,
} as Meta;

const Template: Story<NewsLetterFormProps> = (args) => (
  <ThemeProvider>
    <NewsLetterForm {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  itemHeading: 'Newsletter Signup Title',
  itemBody: 'In saepe laborum delectus possimus et alias.',
  formError: {},
  formRegister: () => {},
  buttonText: 'Subscribe',
  onButtonClick: () => {},
};