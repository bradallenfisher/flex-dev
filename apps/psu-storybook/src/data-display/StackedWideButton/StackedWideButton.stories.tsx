import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Container,
  BackgroundWrapper,
  StackedWideButton,
} from '@psu-flex/core-ui';

export default {
  title: 'Data Display/StackWideButton',
  component: StackedWideButton,
} as Meta;

const WideButtonVariant = 'pughBlueRounded';

const item = [
  {
    title: 'Future Students',
    to: 'https://www.google.com/',
  },
  {
    title: 'Accepted Students',
    to: 'https://www.google.com/',
  },
  {
    title: 'Online Learners',
    to: 'https://www.google.com/',
  },
  {
    title: 'School Counselors',
    to: 'https://www.google.com/',
  },
];

const wideButtonData = {
  variant: WideButtonVariant,
  items: item,
};

const Template: Story<StackedWideButton> = (args) => (
  <BackgroundWrapper>
    <Container>
      <StackedWideButton {...args} />
    </Container>
  </BackgroundWrapper>
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Ready to Get Started?',
  body: 'With the resources of twenty-four campuses, plus an online World Campus, Penn State’s educational model provides opportunities to build your future and your career.',
  data: wideButtonData,
};
