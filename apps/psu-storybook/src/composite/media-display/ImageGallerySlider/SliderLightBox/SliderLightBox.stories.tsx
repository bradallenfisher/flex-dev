/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { SliderLightBox } from '@psu-flex/components/src/components/composite/media-display/ImageSlider/SliderLightBox/SliderLightBox';
import img1 from '../test-assets/img1.png';
import img2 from '../test-assets/img2.png';
import img3 from '../test-assets/img3.png';
import img4 from '../test-assets/img4.png';
import img5 from '../test-assets/img5.png';
import img6 from '../test-assets/img6.png';
import { SliderLightBoxProps } from '@psu-flex/components/src/components/composite/media-display/ImageSlider/SliderLightBox/SliderLightBoxTypes';
export default {
  title: 'Core Composite/MediaDisplay/SliderLightBox',
  component: SliderLightBox,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

const data = [
  {
    src: img1,
  },
  {
    src: img2,
  },
  {
    src: img3,
  },
  {
    src: img4,
  },
  {
    src: img5,
  },
  {
    src: img6,
  },
];

const Template: Story<SliderLightBoxProps> = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openLightBox = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div
        sx={{
          height: '250px',
          width: '200px',
          backgroundColor: 'limestoneLight',
          border: '1px solid lightgray',
          borderRadius: 'sm',
          color: 'potentialMidnight',
          fontWeight: 'bold',
        }}
        className="pointer flex items-center justify-center"
        onClick={openLightBox}
      >
        Click to Open
      </div>
      {isOpen && (
        <SliderLightBox
          setIsOpen={setIsOpen}
          selectedIndex={0}
          sliderData={data}
        />
      )}
    </>
  );
};
export const Default = Template.bind({});
Default.args = {};
