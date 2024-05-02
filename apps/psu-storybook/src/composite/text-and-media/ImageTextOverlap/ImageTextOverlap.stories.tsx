/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { ImageTextOverlap, ImageTextOverlapProps } from '@psu-flex/core-ui';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
import bgImg from './test-assets/example-picture.png';

export default {
  title: 'Core Composite/TextAndMedia/ImageTextOverlap',
  component: ImageTextOverlap,
  argTypes: {
    introParagraph: { control: 'text' },
  },
} as Meta;

const Template1: Story<ImageTextOverlapProps> = (args) => (
  <div sx={{ my: '48px' }}>
    <ImageTextOverlap {...args} {...useIntroArgs(args)} />
  </div>
);

export const Default = Template1.bind({});
Default.args = {
  heading: 'Keep It Simple',
  body: 'It’s not a single person, place, or thing but often the simple, everyday acts that define the collective power of ‘We Are’. Join the Nittany Lion and friends as they reflect on what makes Penn State special.',
  ctaButtonText: 'Learn More',
  ctaButtonTo: 'https://www.google.com/',
  imgSrc: bgImg,
  imgAlt: 'img-alt',
  subHeading: 'END-OF-YEAR VIDEO',
};
