/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from '@psu-flex/core-ui';
import {
  ctaText,
  ctaTo,
  secondaryCtaText,
  secondaryCtaTo,
} from './example-data';

export default {
  title: 'Data Display/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
    ctaTo: {
      control: {
        type: null,
      },
    },

    secondaryCtaTo: {
      control: {
        type: null,
      },
    },

    buttonGroupVariant: {
      control: {
        type: 'select',
      },
      options: ['link', 'white', 'linkLight'],
    },
    ctaSize: {
      control: {
        type: 'select',
      },
    },
    extraSx: {
      control: {
        type: null,
      },
    },
    hocId: {
      control: {
        type: null,
      },
    },
  },
} as Meta<typeof ButtonGroup>;

const exampleButtonGroupData = {
  ctaTo,
  secondaryCtaTo,
};

const Static: Story<ButtonGroupProps> = (args) => (
  <div
    sx={{
      p: 8,
      borderRadius: 'sm',
      backgroundColor:
        args.buttonGroupVariant !== 'link' ? 'nittanyNavy' : 'transparent',
    }}
  >
    <ButtonGroup {...args} {...exampleButtonGroupData} />
  </div>
);

export const Default = Static.bind({});
Default.args = {
  buttonGroupVariant: 'link',
  ctaText: ctaText,
  secondaryCtaText: secondaryCtaText,
};
