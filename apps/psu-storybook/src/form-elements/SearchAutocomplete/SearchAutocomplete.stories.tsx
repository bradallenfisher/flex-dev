/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { SearchAutocomplete, SearchAutocompleteProps } from '@psu-flex/core-ui';
import { Item, Section } from 'react-stately';
import { useFilter } from 'react-aria';

export default {
  title: 'Form Elements/SearchAutocomplete',
  component: SearchAutocomplete,
  argTypes: {
    sx: {
      table: {
        disable: true,
      },
    },

    extraSx: {
      control: {
        type: null,
      },
    },
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'white',
      values: [{ name: 'white', value: '#fff' }],
    },
  },
} as Meta;

const Template: Story<SearchAutocompleteProps> = () => {
  const pennStateItems = [
    { name: 'Nittany Lions' },
    { name: 'Beaver Stadium' },
    { name: 'Joe Paterno' },
    { name: 'Happy Valley' },
    { name: 'We Are' },
    { name: 'Blue and White' },
    { name: 'Old Main' },
    { name: 'Creamery' },
    { name: 'Nittany Lion Shrine' },
    { name: 'State College' },
    { name: 'Pennsylvania' },
    { name: 'Mount Nittany' },
    { name: 'THON' },
    { name: 'PSU' },
    { name: 'White Out' },
    { name: 'Penn State Football' },
    { name: 'Bryce Jordan Center' },
    { name: 'Nittany Valley' },
    { name: 'Blue Band' },
    { name: 'Schreyer Honors College' },
  ];

  let { startsWith } = useFilter({ sensitivity: 'base' });
  let [filterValue, setFilterValue] = React.useState('');
  let filteredItems = React.useMemo(
    () => pennStateItems.filter((item) => startsWith(item.name, filterValue)),
    [pennStateItems, filterValue]
  );

  return (
    <SearchAutocomplete
      placeholder="Search by keyword..."
      label="Filter by category"
      description="This is a helpful hint"
      onInputChange={setFilterValue}
      items={filteredItems}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </SearchAutocomplete>
  );
};

export const StaticExample = Template.bind({});
StaticExample.args = {};

const Template2: Story<SearchAutocompleteProps> = () => {
  return (
    <SearchAutocomplete
      placeholder="Search by keyword..."
      label="Filter by category"
      description="This is a helpful hint"
    >
      <Section title="School Pride">
        <Item>Nittany Lions</Item>
        <Item>Joe Paterno</Item>
        <Item>Happy Valley</Item>
        <Item>We Are</Item>
        <Item>Blue and White</Item>
      </Section>
      <Section title="Landmarks">
        <Item>Beaver Stadium</Item>
        <Item>Old Main</Item>
        <Item>Creamery</Item>
        <Item>Nittany Lion Shrine</Item>
        <Item>State College</Item>
        <Item>Pennsylvania</Item>
        <Item>Mount Nittany</Item>
      </Section>
      <Section title="Community">
        <Item>THON</Item>
        <Item>PSU</Item>
        <Item>White Out</Item>
        <Item>Penn State Football</Item>
        <Item>Bryce Jordan Center</Item>
        <Item>Nittany Valley</Item>
        <Item>Blue Band</Item>
        <Item>Schreyer Honors College</Item>
      </Section>
    </SearchAutocomplete>
  );
};

export const ListSections = Template2.bind({});
ListSections.args = {};
