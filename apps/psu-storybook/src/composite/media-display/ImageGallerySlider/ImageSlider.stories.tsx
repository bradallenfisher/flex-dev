/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { ImageSlider } from '@psu-flex/components/src/components/composite/media-display/ImageSlider/ImageSlider';
import { noCaptionData, withCaptionData } from './example-data';
import { useIntroArgs } from '../../../example-content/component-intro-utility/component-intro-utility';
import React, { useEffect } from 'react';
export default {
  title: 'Core Composite/MediaDisplay/ImageSlider',
  component: ImageSlider,
  argTypes: {
    introParagraph: { control: 'text' },
    sx: {
      table: {
        disable: true,
      },
    },
    withCaptions: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<any> = (args) => {
  useEffect(() => {}, [args.withCaptions]);
  return (
    <ImageSlider
      sliderData={!args.withCaptions ? noCaptionData : withCaptionData}
      {...useIntroArgs(args)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  withCaptions: true,
};
