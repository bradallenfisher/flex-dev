import React from 'react';
import { jsx, ThemeProvider, HeroEventListing, HeroEventListingProps } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Global/HeroEventListing',
  component: HeroEventListing,
} as Meta;

const Template: Story<HeroEventListingProps> = (args) => (
  <ThemeProvider>
    <HeroEventListing {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Welcoming 2024 Students',
  content: 'Join us in a grand celebration as we extend a warm welcome to Penn State University\'s Class of 2024! Our event, "Lion\'s Roar: Welcoming the Class of 2024," promises a spirited evening of camaraderie, marking the start of an incredible academic journey. Embrace the Penn State spirit, meet fellow students, and discover the vibrant traditions that make our community special. Let\'s kickstart your academic adventure with pride and enthusiasm!',
  eventDate: 'September 12, Tuesday',
  eventLocation: 'All Penn State Campuses',
  link: {
    text: 'Read more about this event',
    url: 'https://www.psu.edu'
  }
};