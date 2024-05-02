/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import {
  Wrapper,
  Container,
  Grid,
  ComboBox,
  ComboBoxProps,
} from '@psu-flex/core-ui';
import { Item, Section } from 'react-stately';
import { useFilter } from 'react-aria';

export default {
  title: 'Form Elements/ComboBox',
  component: ComboBox,
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

const Template: Story<ComboBoxProps> = (args) => {
  return (
    <ComboBox label="Favorite Animal" description="This is a helpful hint">
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="dog">Dog</Item>
      <Item key="aardvark">Aardvark</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="snake">Snake</Item>
    </ComboBox>
  );
};

export const StaticExample = Template.bind({});
StaticExample.args = {};

const Template2: Story<ComboBoxProps> = (args) => {
  return (
    <ComboBox label="Favorite by category" description="This is a helpful hint">
      <Section title="Academics">
        <Item key="1">Engineering</Item>
        <Item key="2">Agricultural sciences</Item>
        <Item key="3">Business school</Item>
        <Item key="4">Liberal arts</Item>
      </Section>
      <Section title="Campus Life">
        <Item key="5">THON</Item>
        <Item key="6">Sports</Item>
        <Item key="7">Student organizations</Item>
      </Section>
      <Section title="Culture and Tradition">
        <Item key="8">Nittany Lion</Item>
        <Item key="9">Creamery</Item>
        <Item key="10">Alma Mater</Item>
        <Item key="11">White Out</Item>
      </Section>
    </ComboBox>
  );
};

export const ListSections = Template2.bind({});
ListSections.args = {};

const Template3: Story<ComboBoxProps> = (args) => {
  return (
    <ComboBox
      label="Filter by category"
      description="This is a helpful hint"
      disabledKeys={['3', '5', '6']}
    >
      <Item key="1">Engineering</Item>
      <Item key="2">Agricultural sciences</Item>
      <Item key="3">Business school</Item>
      <Item key="4">Liberal arts</Item>
      <Item key="5">THON</Item>
      <Item key="6">Sports</Item>
      <Item key="7">Student organizations</Item>
      <Item key="8">Nittany Lion</Item>
      <Item key="9">Creamery</Item>
      <Item key="10">Alma Mater</Item>
      <Item key="11">White Out</Item>
    </ComboBox>
  );
};

export const DisabledKeys = Template3.bind({});
DisabledKeys.args = {};

const Template4: Story<ComboBoxProps> = (args) => {
  return (
    <ComboBox
      placeholder="Search by keyword..."
      label="Filter by category"
      description="This is a helpful hint"
      disabledKeys={['3', '5', '6']}
    >
      <Item key="1">Engineering</Item>
      <Item key="2">Agricultural sciences</Item>
      <Item key="3">Business school</Item>
      <Item key="4">Liberal arts</Item>
      <Item key="5">THON</Item>
      <Item key="6">Sports</Item>
      <Item key="7">Student organizations</Item>
      <Item key="8">Nittany Lion</Item>
      <Item key="9">Creamery</Item>
      <Item key="10">Alma Mater</Item>
      <Item key="11">White Out</Item>
    </ComboBox>
  );
};

export const CustomPlaceholder = Template4.bind({});
CustomPlaceholder.args = {};

const Template5: Story<ComboBoxProps> = (args) => {
  let optionList = [
    { name: 'Creamery', id: '1' },
    { name: 'Nittany Lion', id: '2' },
    { name: 'THON', id: '3' },
    { name: 'Engineering', id: '4' },
    { name: 'White Out', id: '5' },
    { name: 'Liberal arts', id: '6' },
  ];

  // Store ComboBox input value, selected option, open state, and items
  // in a state tracker.
  // Store a default value in the input field
  let [fieldState, setFieldState] = React.useState<any>({
    selectedKey: '1',
    inputValue: 'Creamery',
    items: optionList,
  });

  // Implement custom filtering logic and control what items are
  // available to the ComboBox.
  let { startsWith } = useFilter({ sensitivity: 'base' });

  // Specify how each of the ComboBox values should change when an
  // option is selected from the list box
  let onSelectionChange = (key) => {
    setFieldState((prevState) => {
      let selectedItem = prevState.items.find((option) => option.id === key);
      return {
        inputValue: selectedItem?.name ?? '',
        selectedKey: key,
        items: optionList.filter((item) =>
          startsWith(item.name, selectedItem?.name ?? '')
        ),
      };
    });
  };

  // Specify how each of the ComboBox values should change when the input
  // field is altered by the user
  let onInputChange = (value) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === '' ? null : prevState.selectedKey,
      items: optionList.filter((item) => startsWith(item.name, value)),
    }));
  };

  // Show entire list if user opens the menu manually
  let onOpenChange = (isOpen, menuTrigger) => {
    if (menuTrigger === 'manual' && isOpen) {
      setFieldState((prevState) => ({
        inputValue: prevState.inputValue,
        selectedKey: prevState.selectedKey,
        items: optionList,
      }));
    }
  };

  // Pass each controlled prop to useComboBox along with their
  // change handlers

  return (
    <ComboBox
      label="Filter by category"
      items={fieldState.items}
      selectedKey={fieldState.selectedKey}
      inputValue={fieldState.inputValue}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
      onInputChange={onInputChange}
    >
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
  );
};

export const FullyControlled = Template5.bind({});
FullyControlled.args = {};
