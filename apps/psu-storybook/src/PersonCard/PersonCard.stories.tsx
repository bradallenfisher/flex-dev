import React from 'react';
import {
  jsx,
  ThemeProvider,
  EventCard,
  PersonCard,
  PersonCardProps,
} from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import { Container, Wrapper } from '@psu-flex/core-ui';
import profilePicture from './assets/profile.svg';
export default {
  title: 'Global/PersonCard',
  component: PersonCard,
} as Meta;

const Template: Story<PersonCardProps> = (args) => (
  <ThemeProvider>
    <Container>
      <Wrapper>
        <PersonCard {...args} />
      </Wrapper>
    </Container>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  personHeading: 'Brian Brubaker',
  personImage: profilePicture,
  personIsMale: true,
  personBody:
    'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
  personTo: 'https://www.google.com/',
  personPosition: 'Assistant Vice Provost for Global Learning',
  personLocation: 'Suite 415 Boucke',
  personCellphone: '(814) 863-4030',
  personEmail: 'rnb5238@psu.edu',
};
