/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, ThemeUIProvider } from 'theme-ui';
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { LinkWrapper } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/core-ui';
import { Icon } from '@psu-flex/core-ui';
import { Heading } from '@psu-flex/core-ui';
import { Body } from '@psu-flex/core-ui';
import { LinkWrapperProps } from '@psu-flex/core-ui';
export default {
  title: 'Navigation/LinkWrapper',
  component: LinkWrapper,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const cardHoverSx = {
  '&:hover': {
    boxShadow: 'md-1',
  },
  '&:hover > div > h4': {
    textDecoration: 'underline',
  },
};

const Template: Story<LinkWrapperProps> = () => (
  <LinkWrapper to={'https://www.google.com/'}>
    <div sx={{ ...cardHoverSx, width: '22vw', p: 6, border: 'md' }}>
      <Flex alignItems="center" direction="column">
        <Icon size={60} extraSx={{ mb: 3 }} color="accent" icon={'checklist'} />
        <Heading
          align="center"
          extraSx={{ mb: 2, fontWeight: 'semiBold' }}
          tag="h4"
          variant={20}
        >
          MyPennState Information
        </Heading>
        <Body align="center" variant={16}>
          The MyPennState portal will help you manage all of your interactions
          with Penn State Admissions throughout the application process.
        </Body>
      </Flex>
    </div>
  </LinkWrapper>
);

export const Example = Template.bind({});
Example.args = {};
