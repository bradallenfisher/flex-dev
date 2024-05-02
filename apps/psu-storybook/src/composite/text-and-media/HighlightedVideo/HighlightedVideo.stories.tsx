/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { HighlightedVideo, HighlightedVideoProps } from '@psu-flex/core-ui';
// import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';

export default {
  title: 'Core Composite/TextAndMedia/HighlightedVideo',
  component: HighlightedVideo,
  argTypes: {
    backgroundColor: {
      options: ['limestoneMaxLight', 'nittanyNavy'],
      control: { type: 'select' },
    },
    imgSrc: {
      table: {
        disable: true,
      },
    },
    imgAlt: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<HighlightedVideoProps> = (args) => (
  <div sx={{ my: '48px' }}>
    <HighlightedVideo {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  subHeading: 'END-OF-YEAR VIDEO',
  heading: 'Keep It Simple',
  body: 'It’s not a single person, place, or thing but often the simple, everyday acts that define the collective power of ‘We Are’. Join the Nittany Lion and friends as they reflect on what makes Penn State special.',
  videoUrl: 'https://youtu.be/yi7e0E73nT0?si=5TFelbzHPtu64MNw',
  backgroundColor: 'nittanyNavy',
};
