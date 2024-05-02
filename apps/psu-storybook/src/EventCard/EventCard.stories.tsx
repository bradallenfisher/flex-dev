import React from 'react';
import { jsx, ThemeProvider, EventCard, EventCardProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import {
  Container,
  Wrapper
} from '@psu-flex/core-ui';

export default {
  title: 'Global/EventCard',
  component: EventCard,
} as Meta;

const Template: Story<EventCardProps> = (args) => (
  <ThemeProvider>
    <Container>
      <Wrapper>
        <EventCard {...args} />
      </Wrapper>
    </Container>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  itemHeading:
    'American will spend half their lives taking prescription drugs, study finds',
  itemBody:
    'Pen State is where academic excellent meets vibrant campus life. Join our diversity community to innovate, connect and create unforgettable memories that defin...',
  itemIcon: {
    icon: 'locationPin',
    iconBody: 'State College - PA'
  },
  itemDate: 1694491200000,
  itemTo: 'https://www.google.com/'
};