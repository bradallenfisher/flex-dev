/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { TagGroup } from '@psu-flex/core-ui';
import { Item } from 'react-stately';
import { TagGroupProps } from '@psu-flex/core-ui';

export default {
  title: 'Navigation/TagGroup',
  component: TagGroup,
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['outlined', 'filled'],
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md'],
    },
  },
} as Meta;

const tagItems = [
  { name: 'Academics', href: 'https://www.google.com/' },
  { name: 'Enrollment', href: 'https://www.google.com/' },
  { name: 'News', href: 'https://www.google.com/' },
  { name: 'Impact', href: 'https://www.google.com/' },
];

const Template: Story<TagGroupProps> = (args) => (
  <div
    className="flex justify-center items-center text-center"
    sx={{
      minHeight: '100vh',
    }}
  >
    <TagGroup gap={2} {...(args as object)} items={tagItems}>
      {(item) => (
        <Item key={item.name} href={item.href}>
          {item.name}
        </Item>
      )}
    </TagGroup>
  </div>
);

export const Playground = Template.bind({});
Playground.args = {};
