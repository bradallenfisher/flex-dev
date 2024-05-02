import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { NewsCards } from '@psu-flex/psu-global-ui';
import {
  Container,
  Wrapper,
  BackgroundWrapper
} from '@psu-flex/core-ui';
import demoImage from './assets/🎛 Fixed Aspect Ratio Spacer (Variants).png';
export default {
  title: 'Global/NewsCard',
  component: NewsCards,
  argTypes: {
    variant: {
      options: ['limestoneMaxLight', 'slateMaxLight', 'white'],
      control: { type: 'select' }
    }
  }
} as Meta;
const items = [
  {
    itemHeading: 'News Title Placeholder ',
    itemBody:
      'Penn State is where academic excellence meets vibrant campus life. Join our diverse community to innovate, connect, and create unforgettable memories that define the Penn State experience. Welcome to a future full of possibilities.',
    itemImage: demoImage,
    imageWidth: 316,
    imageHeight: 177,
    itemTo: 'https://www.google.com/',
    itemDateTitle: 'Date Posted:',
    itemDatePosted: 'September 12, 2022'
  }
];
const Template: Story<typeof NewsCards> = args => (
  <BackgroundWrapper variant="white" {...args}>
    <Container>
      <Wrapper>
        <NewsCards newsCardsData={items} />
      </Wrapper>
    </Container>
  </BackgroundWrapper>
);
export const Default = Template.bind({});
Default.args = {};
