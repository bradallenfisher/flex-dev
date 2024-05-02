/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Link, Heading, Body, Divider, DividerProps } from '@psu-flex/core-ui';

export default {
  title: 'Data Display/Divider',
  component: Divider,
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
    },
    dividerStyle: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    thickness: {
      control: {
        type: 'select',
      },
    },
    align: {
      control: {
        type: 'select',
      },
    },
    tag: {
      control: {
        type: 'select',
      },
    },
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

const Template: Story<DividerProps> = (args) => (
  <div className="h-full">
    {args.orientation && args.orientation === 'horizontal' && (
      <div className="flex-col" sx={{ minWidth: '45vw' }}>
        <Heading variant={32} extraSx={{ mb: 3 }}>
          Heading text
        </Heading>
        <Divider {...args} />
        <Body variant={16} extraSx={{ mt: 6 }}>
          Body text
        </Body>
      </div>
    )}
    {args.orientation && args.orientation === 'vertical' && (
      <div className="flex-row h-full">
        <Link
          variant={24}
          to="https://www.google.com/"
          extraSx={{ m: 0, p: 2 }}
        >
          Menu Item
        </Link>
        <Divider {...args} />
        <Link
          variant={24}
          to="https://www.google.com/"
          extraSx={{ m: 0, p: 2 }}
        >
          Menu Item
        </Link>
      </div>
    )}
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  orientation: 'horizontal',
  color: 'potentialMidnight',
};
