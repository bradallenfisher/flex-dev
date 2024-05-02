import React from 'react';
import {
  jsx,
  ThemeProvider,
  CareerListingCard,
  CareerListingCardProps,
} from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import { Container, Wrapper } from '@psu-flex/core-ui';

export default {
  title: 'Global/CareerListingCard',
  component: CareerListingCard,
} as Meta;

const Template: Story<CareerListingCardProps> = (args) => (
  <ThemeProvider>
    <Container>
      <Wrapper>
        <CareerListingCard {...args} />
      </Wrapper>
    </Container>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  itemHeading: 'Marketing Temp',
  itemLocation: 'State College Campus',
  itemType: 'Individual Unit',
  itemBody:
    'Lorem ipsum dolor sit amet consectetur. Ullamcorper adipiscing sodales sem pharetra in sed. Nulla sed eu sed ullamcorper. Natoque eu netus gravida non diam et. Blandit a ac in sed. Integer sollicitudin maecenas integer aliquam imperdiet. Urna gravida sed nam mollis tellus ac enim.',
  itemTo: 'https://www.google.com',
  itemToBody: 'Go To Listing',
};
