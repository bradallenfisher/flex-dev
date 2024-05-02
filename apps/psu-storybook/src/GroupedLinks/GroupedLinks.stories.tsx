import React from 'react';
import { jsx, ThemeUIProvider } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { GroupedLinks as GroupedLinksComponent } from '@psu-flex/psu-global-ui';
import cardImage1 from './assets/card-image-1.svg';
import cardImage2 from './assets/card-image-2.svg';
import cardImage3 from './assets/card-image-3.svg';

export default {
  title: 'Global/GroupedLinks',
  component: GroupedLinksComponent,
  argTypes: {
    variant: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = (args) => (
  <div>
    <GroupedLinksComponent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  cards: [
    {
      title: 'Getting Around Campus',
      description:
        'Getting around town is safe and simple. There are many stores, shops, restaurants no more than 10-20 minutes away by bus, taxi, or by bike. Students, faculty and staff and ride the Blue LOOP and the White LOOP (Buses) for free.',
      link: {
        text: 'Read more about transportation in our campuses',
        url: 'https://www.psu.edu/news/',
      },
      image: cardImage1,
      id: 1,
    },
    {
      title: 'Student Clubs and Organizations at Penn State Campuses',
      description:
        'One of the best ways to get involved and make friends at Penn State is by joining a student organization. Explore clubs and organizations available for you to join as a Penn State student.',
      link: {
        text: 'Get to know our student clubs',
        url: 'https://www.psu.edu/news/',
      },
      image: cardImage2,
      id: 2,
    },
    {
      title: 'Find Your Home Away From Home',
      description:
        'Explore your housing options at Penn State. Our modern facilities, welcoming communities and on-campus amenities will help Penn State feel like home while you’re a student.',
      link: {
        text: 'Find detailed information on housing',
        url: 'https://www.psu.edu/news/',
      },
      image: cardImage3,
      id: 3,
    },
  ],
};
