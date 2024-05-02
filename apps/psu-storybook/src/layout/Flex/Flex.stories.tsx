import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@psu-flex/core-ui';
import { Meta, Story } from '@storybook/react';
import { Flex } from '@psu-flex/core-ui';
import { Heading } from '@psu-flex/core-ui';
import { FormLabel } from '@psu-flex/core-ui';
export default {
  title: 'Layout/Flex',
  component: Flex,
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

const Template: Story = (args) => (
  <div className="flex-col items-center">
    <div sx={{ border: '2px dotted gray', p: 4 }}>Top Element</div>
    <div className="flex-row items-center">
      <div sx={{ border: '2px dotted gray', p: 4 }}>Left Element</div>
      <Flex {...args}>
        <div sx={{ backgroundColor: 'limestoneLight', p: 4 }}>
          <Heading variant={24}>Flex Item 1</Heading>
        </div>
        <div sx={{ backgroundColor: 'limestoneLight', p: 4 }}>
          <Heading variant={24}>Flex Item 2</Heading>
        </div>
      </Flex>
      <div sx={{ border: '2px dotted gray', p: 4 }}>Right Element</div>
    </div>
    <div sx={{ border: '2px dotted gray', p: 4 }}>Bottom Element</div>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'responsive',
  gutterX: 10,
  gutterY: 10,
  gap: 4,
};

const Template2: Story = () => (
  <Flex extraSx={{ minWidth: '23vw' }} direction="column" gap={8}>
    <div>
      <FormLabel>row</FormLabel>
      <Flex extraSx={{ mt: 2 }} gap={4}>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 1</Heading>
        </div>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 2</Heading>
        </div>
      </Flex>
    </div>
    <div>
      <FormLabel>column</FormLabel>
      <Flex className="w-fit" direction="column" extraSx={{ mt: 2 }} gap={4}>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 1</Heading>
        </div>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 2</Heading>
        </div>
      </Flex>
    </div>
    <div>
      <FormLabel>responsive variant</FormLabel>
      <Flex variant="responsive" extraSx={{ mt: 2 }} gap={4}>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 1</Heading>
        </div>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 2</Heading>
        </div>
      </Flex>
    </div>
    <div>
      <FormLabel>justifyContent & alignItems</FormLabel>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        extraSx={{ mt: 2 }}
        gap={4}
      >
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 1</Heading>
        </div>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 2</Heading>
        </div>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 3</Heading>
        </div>
      </Flex>
    </div>
    <div>
      <FormLabel>center variant</FormLabel>
      <Flex variant="center" extraSx={{ mt: 2 }} gap={4}>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 1</Heading>
        </div>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 2</Heading>
        </div>
        <div sx={{ border: '1px dashed gray', p: 2 }}>
          <Heading variant={24}>item 3</Heading>
        </div>
      </Flex>
    </div>
  </Flex>
);

export const StaticExamples = Template2.bind({});
StaticExamples.args = {};
