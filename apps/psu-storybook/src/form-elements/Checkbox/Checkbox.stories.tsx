/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta } from '@storybook/react';
import {
  CheckboxItem,
  CheckboxGroup,
  Body,
  CtaButton,
  Flex,
} from '@psu-flex/core-ui';
import { useForm } from 'react-hook-form';

export default {
  title: 'Form Elements/CheckboxGroup',
  component: CheckboxGroup,
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

const checkboxGroupData = [
  {
    text: '10',
  },
  {
    text: '20',
  },
  {
    text: '30',
  },
  {
    text: '40',
  },
  {
    text: '50',
  },
  {
    text: '60',
  },
  {
    text: '70',
  },
];

const errors = {};
const register = () => {
  return;
};

const exampleHocId = 'ExampleHigherOrderComponent';

const Template = () => (
  <CheckboxGroup
    errors={errors}
    register={register}
    label="Checkbox Group Label"
    defaultValue={['soccer', 'baseball']}
  >
    <CheckboxItem value="soccer">Soccer</CheckboxItem>
    <CheckboxItem value="baseball">Baseball</CheckboxItem>
    <CheckboxItem value="basketball">Basketball</CheckboxItem>
  </CheckboxGroup>
);
const Template2 = () => (
  <CheckboxGroup
    errors={errors}
    register={register}
    label="Checkbox Group Label"
    defaultValue={['soccer', 'baseball']}
  >
    {checkboxGroupData.map((item) => {
      return <CheckboxItem value={item.text}>{item.text}</CheckboxItem>;
    })}
  </CheckboxGroup>
);

const Template3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    alert('Successful submission of ' + 'selected: ' + data.checkbox);
  };
  return (
    <Flex gap={8} direction="column">
      <Body>Click submit to see validation</Body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} direction="column">
          <CheckboxGroup
            required
            errors={errors}
            register={register}
            label="Checkbox Group Label"
            description="Select your favorite sports."
          >
            <CheckboxItem value="soccer">Soccer</CheckboxItem>
            <CheckboxItem value="baseball">Baseball</CheckboxItem>
            <CheckboxItem value="basketball">Basketball</CheckboxItem>
          </CheckboxGroup>
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
const Template4 = () => (
  <CheckboxGroup
    errors={errors}
    register={register}
    label="Checkbox Group Label"
  >
    <CheckboxItem disabled value="soccer">
      Soccer
    </CheckboxItem>
    <CheckboxItem value="baseball">Baseball</CheckboxItem>
    <CheckboxItem value="basketball">Basketball</CheckboxItem>
  </CheckboxGroup>
);
const Template5 = () => (
  <CheckboxGroup
    errors={errors}
    register={register}
    label="Checkbox Group Label"
    description="Select your favorite sports."
  >
    <CheckboxItem value="soccer">Soccer</CheckboxItem>
    <CheckboxItem value="baseball">Baseball</CheckboxItem>
    <CheckboxItem value="basketball">Basketball</CheckboxItem>
  </CheckboxGroup>
);

const Template6 = () => (
  <CheckboxGroup
    errors={errors}
    register={register}
    label="Checkbox Group Label"
    description="Select your favorite sports."
  >
    <CheckboxItem checked value="soccer">
      Soccer
    </CheckboxItem>
    <CheckboxItem checked value="baseball">
      Baseball
    </CheckboxItem>
    <CheckboxItem value="basketball">Basketball</CheckboxItem>
  </CheckboxGroup>
);

export const StaticExample = Template.bind({});
StaticExample.args = {};
export const ArrayOfChoices = Template2.bind({});
ArrayOfChoices.args = {};
export const Validation = Template3.bind({});
Validation.args = {};
export const DisabledChoices = Template4.bind({});
DisabledChoices.args = {};
export const Description = Template5.bind({});
Description.args = {};
export const DefaultChoices = Template6.bind({});
Description.args = {};
