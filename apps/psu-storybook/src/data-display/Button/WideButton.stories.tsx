/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Box, WideButton, WideButtonProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Button/WideButton',
  component: WideButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    extraSx: {
      control: {
        type: null,
      },
    },
    sx: {
      table: {
        disable: true,
      },
    },
    variantSizeObj: {
      table: {
        disable: true,
      },
    },
    buttonVariants: {
      table: {
        disable: true,
      },
    },
    hocId: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    buttonRef: {
      table: {
        disable: true,
      },
    },
    hoverEndIcon: {
      table: {
        disable: true,
      },
    },
    endIcon: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<typeof WideButton>;

const exampleHocId = 'ExampleHigherOrderComponent';

const Default: Story<WideButtonProps> = (args) => (
  <Box
    extraSx={{
      p: 12,
      borderRadius: 'sm',
      backgroundColor:
        args.variant === 'beaverBlueSquared'
          ? 'transparent'
          : args.variant === 'beaverBlueRounded'
          ? 'transparent'
          : 'nittanyNavy',
    }}
  >
    <WideButton
      hocId={exampleHocId}
      variant={args.variant}
      to={'https://www.google.com/'}
      size={args.size}
    >
      Wide Button
    </WideButton>
  </Box>
);

export const WideButtons = Default.bind({});
WideButtons.args = {
  variant: 'beaverBlueRounded',
};
