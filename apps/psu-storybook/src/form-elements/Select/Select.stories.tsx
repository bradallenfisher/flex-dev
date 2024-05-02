import React, { useId, useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Meta } from '@storybook/react';
import { fade } from './SelectStoryStyle';
import {
  Card,
  Container,
  Grid,
  Heading,
  Select,
  Wrapper,
} from '@psu-flex/core-ui';
import { Item, useAsyncList } from 'react-stately';
import { Flex } from '@psu-flex/core-ui';
import { Body, CtaButton } from '@psu-flex/core-ui';
import { useForm } from 'react-hook-form';

export default {
  title: 'Form Elements/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
};

let options = [
  { id: 1, name: 'Penn State News' },
  { id: 2, name: 'All Penn State' },
  {
    id: 3,
    name: 'News Archive',
  },
];

const exampleHocId = 'ExampleHigherOrderComponent';

const Template = () => {
  const errors = {};
  return (
    <Select
      errors={errors}
      defaultPlaceholder="Dropdown option"
      label="Select label"
      name="navSelect"
      items={options}
    >
      {(item) => (
        <Item textValue={item.name} key={item.name}>
          {item.name}
        </Item>
      )}
    </Select>
  );
};

export const StaticExample = Template.bind({});
StaticExample.args = {};

const Template2 = () => {
  let options = [
    { name: 'Academics' },
    { name: 'Impact' },
    { name: 'Global Programs' },
  ];
  let [category, setCategory] = React.useState('Impact');
  const errors = {};
  return (
    <Select
      errors={errors}
      label="Select label"
      name="navSelect"
      items={options}
      selectedKey={category}
      onSelectionChange={(selected) => setCategory(selected)}
    >
      {(item) => (
        <Item textValue={item.name} key={item.name}>
          {item.name}
        </Item>
      )}
    </Select>
  );
};

export const DefaultOption = Template2.bind({});
DefaultOption.args = {};

const Template3 = () => {
  let list = useAsyncList({
    async load({ signal, filterText }) {
      let res = await fetch(`https://pokeapi.co/api/v2/pokemon`, { signal });
      let json = await res.json();

      return {
        items: json.results,
      };
    },
  });

  const errors = {};
  return (
    <Select
      errors={errors}
      label="Select an option"
      items={list.items}
      selectionMode="single"
    >
      {(item) => (
        <Item textValue={item.name} key={item.name}>
          {item.name}
        </Item>
      )}
    </Select>
  );
};

export const AsynchronousLoading = Template3.bind({});
AsynchronousLoading.args = {};

const Template4 = () => {
  const errors = {};
  return (
    <Select errors={errors} label="Choose frequency" isDisabled>
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Select>
  );
};

export const DisabledSelect = Template4.bind({});
DisabledSelect.args = {};

const Template5 = () => {
  const errors = {};
  return (
    <Select
      errors={errors}
      label="Favorite Animal"
      disabledKeys={['dog', 'kangaroo', 'red panda']}
    >
      <Item key="red panda">Red Panda</Item>
      <Item key="cat">Cat</Item>
      <Item key="kangaroo">Kangaroo</Item>
      <Item key="dog">Dog</Item>
    </Select>
  );
};

export const DisabledOptions = Template5.bind({});
DisabledOptions.args = {};

const Template6 = () => {
  let [open, setOpen] = React.useState(true);
  const errors = {};
  return (
    <Select
      errors={errors}
      label="Choose frequency"
      isOpen={open}
      onOpenChange={setOpen}
    >
      <Item key="rarely">Rarely</Item>
      <Item key="sometimes">Sometimes</Item>
      <Item key="always">Always</Item>
    </Select>
  );
};

export const DefaultOpenState = Template6.bind({});
DefaultOpenState.args = {};

const Template7 = () => {
  const errors = {};
  return (
    <Flex gap={8} direction="column">
      <Select errors={errors} label="'sm' size">
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Select>
      <Select errors={errors} size="md" label="'md' size">
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Select>
      <Select errors={errors} size="lg" label="'lg' size">
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Select>
    </Flex>
  );
};

export const SizeOptions = Template7.bind({});
SizeOptions.args = {};

const Template8 = () => {
  const [selectItem, setSelectItem] = useState();
  const [selectValidationBehavior, setSelectValidationBehavior] = useState();

  const {
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    if (handleValidateSelect() === false) {
      console.log('error');
      return;
    } else {
      console.log('success');
    }
  };

  const handleValidateSelect = () => {
    if (!selectItem && selectValidationBehavior === 'required') {
      setError('select', {
        type: 'required',
        message: 'Please choose an option',
      });
      return false;
    }
  };

  const handleSelectionChange = (selected) => {
    setSelectItem(selected);
    errors['select'] && clearErrors('select');
  };

  console.log(errors);

  return (
    <Flex gap={8} direction="column">
      <Body>Click submit to see validation</Body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} direction="column">
          <Select
            required
            errors={errors}
            label="Select an option"
            description="This is a helpful hint"
            selectedKey={selectItem}
            setValidationBehavior={setSelectValidationBehavior}
            onSelectionChange={(selected) => handleSelectionChange(selected)}
          >
            <Item key="rarely">Rarely</Item>
            <Item key="sometimes">Sometimes</Item>
            <Item key="always">Always</Item>
          </Select>
          <CtaButton
            hocId={exampleHocId}
            variant="primaryFilled"
            size="sm"
            type="submit"
          >
            Submit
          </CtaButton>
        </Flex>
      </form>
    </Flex>
  );
};

export const Validation = Template8.bind({});
Validation.args = {};

const Template9 = () => {
  let options = [
    { name: 'Koala' },
    { name: 'Kangaroo' },
    { name: 'Platypus' },
    { name: 'Bald Eagle' },
    { name: 'Bison' },
    { name: 'Skunk' },
    { name: 'Lion' },
    { name: 'Tiger' },
  ];
  let [animal, setAnimal] = React.useState('Bison');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    alert('Successful submission of Animal: ' + animal);
  };
  return (
    <Flex gap={8} direction="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} direction="column">
          <Select
            errors={errors}
            label="Pick an animal (controlled)"
            items={options}
            selectedKey={animal}
            onSelectionChange={(selected) => setAnimal(selected)}
          >
            {(item) => <Item key={item.name}>{item.name}</Item>}
          </Select>
        </Flex>
      </form>
    </Flex>
  );
};

export const ControlledSelection = Template9.bind({});
ControlledSelection.args = {};

const Template10 = () => {
  let [type, setType] = React.useState(null);
  let [location, setLocation] = React.useState(null);
  let options = [
    { name: 'Koala', location: 'Pittsburgh', type: 'Mammal' },
    { name: 'Kangaroo', location: 'Pittsburgh', type: 'Mammal' },
    { name: 'Platypus', location: 'Pittsburgh', type: 'Mammal' },
    { name: 'Bald Eagle', location: 'State College', type: 'Bird' },
    { name: 'Bison', location: 'Philadelphia', type: 'Mammal' },
    { name: 'Skunk', location: 'State College', type: 'Mammal' },
  ];

  // Create an object to store unique locations and unique types
  let uniqueLocationsMap = {};
  let uniqueTypeMap = {};

  // Loop over the options array to extract unique locations and unique types
  options.forEach((option) => {
    uniqueLocationsMap[option.location] = {
      location: option.location,
    };
    uniqueTypeMap[option.type] = {
      type: option.type,
    };
  });

  // Extract the values of the uniqueLocationsMap object to get unique locations with IDs
  let uniqueLocationsArray = Object.values(uniqueLocationsMap);
  let uniqueTypeArray = Object.values(uniqueTypeMap);
  console.log(uniqueTypeArray);

  let filteredOptions = options.filter((option) => {
    // Check if type is provided and if option type matches
    const typeMatch = type === null || option.type === type;
    // Check if location is provided and if option location matches
    const locationMatch = location === null || option.location === location;
    // Return true if both type and location match, or if either is not provided
    return typeMatch && locationMatch;
  });

  return (
    <Container>
      <Wrapper>
        <Grid>
          <Flex
            extraSx={{
              gridColumn: ['1/5', '2/8', '3/11', '3/11'],
              height: '400px',
            }}
            direction="column"
            gap={8}
          >
            <Body variant={20}>Select a filter from the dropdowns</Body>
            <Flex className="w-fit" gap={4}>
              <Select
                label="Type"
                items={uniqueTypeArray}
                selectedKey={type}
                onSelectionChange={(selected) => setType(selected)}
              >
                {(item) => <Item key={item.type}>{item.type}</Item>}
              </Select>
              <Select
                label="Location"
                items={uniqueLocationsArray}
                selectedKey={location}
                onSelectionChange={(selected) => setLocation(selected)}
              >
                {(item) => <Item key={item.location}>{item.location}</Item>}
              </Select>
            </Flex>
            <Flex wrap gap={4}>
              {filteredOptions.map((option, i) => {
                return (
                  <Card
                    extraSx={{
                      animationName: `${fade}`,
                      animationDuration: '.4s',
                    }}
                    key={i}
                    px={6}
                    py={6}
                    backgroundColor="white"
                    dropShadow="sm-1"
                  >
                    <Heading color="beaverBlue" extraSx={{ mb: 2 }}>
                      {option.name}
                    </Heading>
                    <Body>Type: {option.type}</Body>
                    <Body>Location: {option.location}</Body>
                  </Card>
                );
              })}
            </Flex>
          </Flex>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export const FilterSelectNotInForm = Template10.bind({});
ControlledSelection.args = {};
