import React from 'react';
import { jsx, ThemeUIProvider } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { StudentSpotlight as StudentSpotlightComponent } from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/StudentSpotlightModal',
  component: StudentSpotlightComponent,
  argTypes: {
    variant: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template = (args) => (
  <div>
    <StudentSpotlightComponent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Meet Ana: Embracing New Horizons at Penn State',
  description:
    "Journey with us through the remarkable story of Ana, an international student at Penn State who has transformed her educational pursuit into a global adventure. Hailing from Brazil, Ana brings a unique perspective to our diverse campus community. From navigating a new culture to engaging in groundbreaking research alongside esteemed professors, Ana's Penn State experience epitomizes the spirit of curiosity and collaboration that defines our institution. Join us in celebrating Ana's journey as she continues to inspire and thrive in her pursuit of knowledge and meaningful connections.",
  buttonText: "Read Ana's Story",
  subHeading: 'Student Spotlight',
  bottomUrl: {
    text: 'See more on Life at Pennstate',
    url: 'https://www.psu.edu/news/',
  },
};
