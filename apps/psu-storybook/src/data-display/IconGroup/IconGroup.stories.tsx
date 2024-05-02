/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta } from '@storybook/react';
import { IconGroup } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/core-ui';
import { Heading } from '@psu-flex/core-ui';

const iconButtonData2 = [
  {
    icon: 'person',
    to: 'https://www.google.com/',
  },
  { icon: 'email', to: 'https://www.google.com/' },
  { icon: 'home', to: 'https://www.google.com/' },
];
const iconButtonData3 = [
  {
    icon: 'facebook',
    to: 'https://www.google.com/',
  },
  { icon: 'twitter', to: 'https://www.google.com/' },
  { icon: 'linkedIn', to: 'https://www.google.com/' },
  { icon: 'instagram', to: 'https://www.google.com/' },
  { icon: 'email', to: 'https://www.google.com/' },
];

export default {
  title: 'Data Display/IconGroup',
  component: IconGroup,
  argTypes: {
    extraSx: {
      control: false,
    },
    iconGroupData: {
      control: {
        type: null,
      },
    },
    //size & iconButtonVariant controls are disabled because in order for these props to update, a state change is required to update the state collection. This needs developed within the story
    size: {
      control: {
        type: 'select',
      },
    },
    type: {
      control: {
        type: 'select',
      },
    },
    iconButtonVariant: {
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

const hocIdExample = 'ExampleHigherOrderComponent';

export const StaticExamples = () => {
  return (
    <Flex gap={10} direction="column" alignItems="flex-start">
      <Flex direction="column" gap={4}>
        <Heading variant={24}>Unfilled group example</Heading>
        <IconGroup
          hocId={hocIdExample}
          gap={2}
          type="unfilled"
          iconButtonVariant="nittanyNavy"
          size="md"
          iconGroupData={iconButtonData2}
        />
      </Flex>
      <Flex direction="column" gap={4}>
        <Heading variant={24}>Filled Row group example</Heading>
        <IconGroup
          hocId={hocIdExample}
          gap={2}
          iconButtonVariant="link"
          size="md"
          iconGroupData={iconButtonData2}
        />
      </Flex>
      <Flex direction="column" gap={4}>
        <Heading variant={24}>Filled Column group example</Heading>
        <IconGroup
          hocId={hocIdExample}
          direction="column"
          gap={2}
          iconButtonVariant="link"
          size="md"
          iconGroupData={iconButtonData2}
        />
      </Flex>
    </Flex>
  );
};

export const SocialIconGroupExample = () => {
  return (
    <Flex gap={4} direction="column">
      <IconGroup
        hocId={hocIdExample}
        gap={2}
        iconButtonVariant="beaverBlue"
        size="md"
        iconGroupData={iconButtonData3}
      />
      <IconGroup
        hocId={hocIdExample}
        gap={2}
        type="unfilled"
        iconButtonVariant="beaverBlue"
        size="md"
        iconGroupData={iconButtonData3}
      />
    </Flex>
  );
};
