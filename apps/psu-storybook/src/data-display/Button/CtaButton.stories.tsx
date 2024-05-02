/** @jsxRuntime classic */
/** @jsx jsx */
/** @jsxFrag React.Fragment **/
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  CtaButton,
  Wrapper,
  Container,
  CtaButtonProps,
  Box,
} from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Button/CtaButton',
  component: CtaButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    endIcon: {
      control: {
        type: 'boolean',
      },
    },
    extraSx: {
      control: {
        type: null,
      },
    },
    size: {
      control: {
        type: 'select',
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
  },
} as Meta<typeof CtaButton>;

const Static: Story<CtaButtonProps> = (args) => (
  <Box
    extraSx={{
      p: 12,
      borderRadius: 'sm',
      backgroundColor:
        args.variant === 'primaryOutlined'
          ? 'transparent'
          : args.variant === 'primaryFilled'
          ? 'transparent'
          : 'nittanyNavy',
    }}
  >
    <CtaButton
      size={args.size}
      variant={args.variant}
      endIcon={args.endIcon ? 'chevronRight' : undefined}
      to={'https://www.google.com/'}
    >
      Cta Button
    </CtaButton>
  </Box>
);

export const CtaButtons = Static.bind({});
CtaButtons.args = {
  variant: 'primaryFilled',
  size: 'sm',
  endIcon: false,
};
