import React from 'react';
import { jsx, ThemeProvider, JumpLink, JumpLinkProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/JumpLink',
  component: JumpLink,
} as Meta;

const Template: Story<JumpLinkProps> = (args) => (
  <ThemeProvider>
    <JumpLink {...args}>
      JumpLink story
    </JumpLink>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: 'On This Page',
  links: [
    { title: 'STEP 1: Complete the Online Education Abroad 101 Module', url: '#'},
    { title: 'STEP 2: Make an Academic Plan', url: '#'},
    { title: 'STEP 3: Make a Financial Plan', url: '#'},
    { title: 'STEP 4: Choose an Education Abroad Program', url: '#'},
    { title: 'STEP 5: Submit an Application', url: '#'},
  ]
};