import React from 'react';
import { jsx, ThemeProvider } from '@psu-flex/psu-global-ui';
import { Meta, Story } from '@storybook/react';
import {
  PersonCardGroup,
  PersonCardGroupProps,
  PersonDirectoryCard,
} from '@psu-flex/psu-global-ui';
import profilePicture1 from './assets/profile1.svg';
import profilePicture2 from './assets/profile2.svg';
import profilePicture3 from './assets/profile3.svg';

export default {
  title: 'Global/PersonCardGroup',
  component: PersonCardGroup,
} as Meta;

const personCards: PersonDirectoryCard[] = [
  {
    personHeading: 'Brian Brubaker',
    personImage: profilePicture1,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5231@psu.edu',
    directoryGroup: 'Administration',
    directorySubgroup: 'Management',
  },
  {
    personHeading: 'Melissa Brun',
    personImage: profilePicture2,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5232@psu.edu',
    directoryGroup: 'Administration',
    directorySubgroup: 'Management',
  },
  {
    personHeading: 'Brian Brubaker',
    personImage: profilePicture1,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5228@psu.edu',
    directoryGroup: 'Administration',
    directorySubgroup: 'Management',
  },
  {
    personHeading: 'Dana Brem',
    personImage: profilePicture3,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5233@psu.edu',
    directoryGroup: 'Administration',
    directorySubgroup: 'Management',
  },
  {
    personHeading: 'Brian Brubaker',
    personImage: profilePicture1,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5234@psu.edu',
    directoryGroup: 'Administration',
    directorySubgroup: 'Operations',
  },
  {
    personHeading: 'Melissa Brun',
    personImage: profilePicture2,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5235@psu.edu',
    directoryGroup: 'Administration',
    directorySubgroup: 'Operations',
  },
  {
    personHeading: 'Dana Brem',
    personImage: profilePicture3,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5236@psu.edu',
    directoryGroup: 'Administration',
    directorySubgroup: 'Operations',
  },
  {
    personHeading: 'Brian Brubaker',
    personImage: profilePicture1,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5237@psu.edu',
    directoryGroup: 'Financial',
    directorySubgroup: 'Management',
  },
  {
    personHeading: 'Melissa Brun',
    personImage: profilePicture2,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5238@psu.edu',
    directoryGroup: 'Financial',
    directorySubgroup: 'Management',
  },
  {
    personHeading: 'Dana Brem',
    personImage: profilePicture3,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb5239@psu.edu',
    directoryGroup: 'Financial',
    directorySubgroup: 'Management',
  },
  {
    personHeading: 'Brian Brubaker',
    personImage: profilePicture1,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb52310@psu.edu',
    directoryGroup: 'Financial',
    directorySubgroup: 'Operations',
  },
  {
    personHeading: 'Melissa Brun',
    personImage: profilePicture2,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb52311@psu.edu',
    directoryGroup: 'Financial',
    directorySubgroup: 'Operations',
  },
  {
    personHeading: 'Dana Brem',
    personImage: profilePicture3,
    personIsMale: true,
    personBody:
      'Lorem ipsum dolor sit amet consectetur. Amet consequat facilisis volutpat quam morbi nec.',
    personTo: 'https://www.google.com/',
    personPosition: 'Assistant Vice Provost for Global Learning',
    personLocation: 'Suite 415 Boucke',
    personCellphone: '(814) 863-4030',
    personEmail: 'rnb52312@psu.edu',
    directoryGroup: 'Financial',
    directorySubgroup: 'Operations',
  },
];

const Template: Story<PersonCardGroupProps> = (args) => (
  <ThemeProvider>
    <PersonCardGroup items={personCards} />
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};
