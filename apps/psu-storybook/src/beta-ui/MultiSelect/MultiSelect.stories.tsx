import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { MultiSelect, MultiSelectProps } from '@psu-flex/beta-ui';
import { Item, Section } from 'react-stately';

export default {
  title: 'Beta/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#fff' }],
    },
  },
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<MultiSelectProps> = () => {
  let options = [
    { name: 'Academics' },
    { name: 'Impact' },
    { name: 'Global Programs' },
    { name: 'Community Engagement' },
    { name: 'Technology' },
    { name: 'Innovation' },
    { name: 'Healthcare' },
    { name: 'Environment' },
    { name: 'Art and Culture' },
    { name: 'Business Development' },
    { name: 'Education' },
    { name: 'Sustainability' },
    { name: 'Research' },
    { name: 'Entrepreneurship' },
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([]));

  return (
    <MultiSelect
      label="Select label"
      items={options}
      selectedKeys={selectedKeys}
      onSelectionChange={(selected) => setSelectedKeys(selected)}
    >
      {(item) => (
        <Item textValue={item.name} key={item.name}>
          {item.name}
        </Item>
      )}
    </MultiSelect>
  );
};

export const Default = Template.bind({});
Default.args = {};

const Template2: Story<MultiSelectProps> = () => {
  let options2 = [
    {
      name: 'Athletics',
      children: [
        { name: 'Football' },
        { name: 'Basketball' },
        { name: 'Wrestling' },
      ],
    },
    {
      name: 'Academic Colleges',
      children: [
        { name: 'College of Engineering' },
        { name: 'College of Liberal Arts' },
        { name: 'College of Health and Human Development' },
      ],
    },
    {
      name: 'Student Life',
      children: [
        { name: 'Clubs and Organizations' },
        { name: 'Residence Life' },
        { name: 'Student Government' },
      ],
    },
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([]));

  return (
    <MultiSelect
      label="Select label"
      items={options2}
      selectedKeys={selectedKeys}
      onSelectionChange={(selected) => setSelectedKeys(selected)}
    >
      {(item) => (
        <Section key={item.name} items={item.children} title={item.name}>
          {(item: any) => <Item key={item.name}>{item.name}</Item>}
        </Section>
      )}
    </MultiSelect>
  );
};

export const WithSections = Template2.bind({});
WithSections.args = {};

const Template3: Story<MultiSelectProps> = () => {
  let options = [
    { name: 'Academics' },
    { name: 'Impact' },
    { name: 'Global Programs' },
    { name: 'Community Engagement' },
    { name: 'Technology' },
    { name: 'Innovation' },
    { name: 'Healthcare' },
    { name: 'Environment' },
    { name: 'Art and Culture' },
    { name: 'Business Development' },
    { name: 'Education' },
    { name: 'Sustainability' },
    { name: 'Research' },
    { name: 'Entrepreneurship' },
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<any>(new Set([]));

  return (
    <MultiSelect
      label="Select label"
      items={options}
      selectedKeys={selectedKeys}
      selectedKeyStyle="chip"
      onSelectionChange={(selected) => setSelectedKeys(selected)}
    >
      {(item) => (
        <Item textValue={item.name} key={item.name}>
          {item.name}
        </Item>
      )}
    </MultiSelect>
  );
};

export const ChipStyle = Template3.bind({});
ChipStyle.args = {};
