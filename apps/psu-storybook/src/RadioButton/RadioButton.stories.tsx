/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta } from '@storybook/react';
import { RadioItem, RadioGroup } from '@psu-flex/psu-global-ui';
import { useForm } from 'react-hook-form';
import { Body, CtaButton } from '@psu-flex/psu-global-ui';
import { Flex } from '@psu-flex/psu-global-ui';

export default {
  title: 'Global/RadioGroup',
  component: RadioGroup,
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

const radioGroupData = [
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

const Template = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });
  const onSubmit = (data) => {
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup register={register} errors={errors} label="Radio Group Label">
        <RadioItem value="A">A</RadioItem>
        <RadioItem value="B">B</RadioItem>
      </RadioGroup>
    </form>
  );
};
const Template2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });
  const onSubmit = (data) => {
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup
        register={register}
        errors={errors}
        label="Default checked example"
        defaultValue="Yes"
      >
        <RadioItem value="Yes">Yes</RadioItem>
        <RadioItem value="No">No</RadioItem>
      </RadioGroup>
    </form>
  );
};
const Template3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup
        register={register}
        errors={errors}
        label="Label"
        description="Select an option"
      >
        <RadioItem value="One">One</RadioItem>
        <RadioItem value="Two">Two</RadioItem>
      </RadioGroup>
    </form>
  );
};
const Template4 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    alert('Successful submission of ' + 'selected: ' + data.radio);
  };

  const exampleHocId = 'ExampleHigherOrderComponent';

  return (
    <Flex gap={8} direction="column">
      <Body>Click submit to see validation</Body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} direction="column">
          <RadioGroup
            required
            register={register}
            errors={errors}
            label="Label"
          >
            <RadioItem value="Dogs">Dogs</RadioItem>
            <RadioItem value="Cats">Cats</RadioItem>
          </RadioGroup>
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
const Template5 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup register={register} errors={errors} label="Label">
        <RadioItem isDisabled value="Choice 1">
          Choice 1
        </RadioItem>
        <RadioItem value="Choice 2">Choice 2</RadioItem>
      </RadioGroup>
    </form>
  );
};
const Template6 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    return;
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RadioGroup register={register} errors={errors} label="Label">
        {radioGroupData.map((item) => {
          return <RadioItem value={item.text}>{item.text}</RadioItem>;
        })}
      </RadioGroup>
    </form>
  );
};

export const StaticExample = Template.bind({});
StaticExample.args = {};
export const DefaultValue = Template2.bind({});
DefaultValue.args = {};
export const Description = Template3.bind({});
Description.args = {};
export const Validation = Template4.bind({});
Validation.args = {};
export const Disabled = Template5.bind({});
Disabled.args = {};
export const ArrayOfChoices = Template6.bind({});
Disabled.args = {};
