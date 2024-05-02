import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from '@psu-flex/psu-global-ui';
import { AlertBanner, AlertBannerProps, Wrapper } from '@psu-flex/core-ui';
import { Meta, Story } from '@storybook/react';
import { richTextAlertBannerExample } from './example-data';
export default {
  title: 'Core Composite/AlertBanner',
  component: AlertBanner,
  argTypes: {
    severity: {
      control: { type: 'select' },
      options: ['urgent', 'nonEmergency', 'immediate', 'allClear'],
    },
    openText: {
      control: { type: null },
    },
    publishedOn: {
      control: { type: null },
    },
  },
} as Meta;

const exampleData = {
  openText: richTextAlertBannerExample,
  publishedOn: '2020-07-21T13:02:03-04:00',
};

const Template: Story<AlertBannerProps> = (args) => (
  <>
    <AlertBanner
      {...args}
      openText={exampleData.openText}
      publishedOn={exampleData.publishedOn}
    />
    <div sx={{ backgroundColor: 'nittanyNavy', color: 'white', p: 5 }}>
      <Container>
        <Wrapper>
          <p>
            This is not part of the component. It is displayed here to show how
            the banner interacts with the content that will be placed below it.
          </p>
        </Wrapper>
      </Container>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  closedText: 'Alert Message',
  severity: 'urgent',
};
