import React from 'react';
import { jsx, ThemeProvider } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import {
  CareerListingGroup,
  CareerListingGroupProps,
} from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/CareerListingGroup',
  component: CareerListingGroup,
} as Meta;

const careerListingCards = [
  {
    id: 1,
    itemHeading: 'Mid PHP Developer',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 2,
    itemHeading: 'Junior Graphic Designer',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 3,
    itemHeading: 'Junior SEO Analyst',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },

  {
    id: 4,
    itemHeading: 'Janitor',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 5,
    itemHeading: 'Programmer',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 6,
    itemHeading: 'Security Guard',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 7,
    itemHeading: 'Junior Scrum Master',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 8,
    itemHeading: 'Senior Graphic Designer',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 9,
    itemHeading: 'Mid Full Stack Developer',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 10,
    itemHeading: 'Content Developer',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 11,
    itemHeading: 'Junior Content Manager',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 12,
    itemHeading: 'Program Manager',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 13,
    itemHeading: 'Junior Frontend Developer',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
  {
    id: 14,
    itemHeading: 'Senior Project Manager',
    itemLocation: 'State College Campus',
    itemType: 'Individual Unit',
    itemBody:
      'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
    itemTo: 'https://www.google.com',
    itemToBody: 'Go To Listing',
  },
];

const Template: Story<CareerListingGroupProps> = (args) => (
  <ThemeProvider>
    <CareerListingGroup
      items={careerListingCards}
      careersType="Student Positions"
    />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
