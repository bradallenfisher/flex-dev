import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { NewsFeature } from '@psu-flex/core-ui';
import bgImg from '@psu-flex/core-ui/assets/images/oldMain.png';

export default {
  title: 'Core Composite/TextAndMedia/NewsFeature',
  component: NewsFeature,
} as Meta;

const imageSrc = bgImg;

const Template = (args) => (
  <NewsFeature
    heading="Recent News"
    headline="Undergraduate applications open for summer and fall 2024 admission"
    image={imageSrc}
    to="https://www.psu.edu/news/admissions/story/undergraduate-applications-open-summer-and-fall-2024-admission/"
  />
);

export const Default = Template.bind({});
Default.args = {};
