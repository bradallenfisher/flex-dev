/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { FormField } from '@psu-flex/core-ui';
import { FormFieldProps } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/core-ui';
import { Body, CtaButton } from '@psu-flex/core-ui';
import { useForm } from 'react-hook-form';

export default {
  title: 'Form Elements/FormField',
  component: FormField,
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

const errors = {};
const register = () => {
  return;
};
const control = {};

const exampleHocId = 'ExampleHigherOrderComponent';

const Template: Story<FormFieldProps> = () => (
  <FormField
    control={control}
    errors={errors}
    register={register}
    fieldSize="sm"
    label="Email"
    type="email"
  />
);

export const StaticExample = Template.bind({});
StaticExample.args = {};

const Template2: Story<FormFieldProps> = () => (
  <FormField
    control={control}
    errors={errors}
    register={register}
    description="This is hint text to help the user."
    fieldSize="md"
    label="Email"
    type="email"
  />
);

export const Description = Template2.bind({});
Description.args = {};

const Template3: Story<FormFieldProps> = () => (
  <FormField
    control={control}
    errors={errors}
    register={register}
    defaultValue="example.email@email.com"
    fieldSize="md"
    label="Email"
    type="email"
  />
);

export const DefaultValue = Template3.bind({});
DefaultValue.args = {};

const Template4: Story<FormFieldProps> = () => (
  <Flex gap={8} direction="column">
    <FormField
      control={control}
      errors={errors}
      register={register}
      fieldSize="sm"
      label="sm size"
      type="text"
    />
    <FormField
      control={control}
      errors={errors}
      register={register}
      fieldSize="md"
      label="md size"
      type="text"
    />
  </Flex>
);

export const SizeOptions = Template4.bind({});
SizeOptions.args = {};

const Template5: Story<FormFieldProps> = () => (
  <Flex gap={8} direction="column">
    <FormField
      control={control}
      type="email"
      errors={errors}
      register={register}
      required
      fieldSize="sm"
      label="Email"
    />
  </Flex>
);

export const RequiredFields = Template5.bind({});
RequiredFields.args = {};

const Template6: Story<FormFieldProps> = () => {
  return (
    <Flex gap={8} direction="column">
      <FormField
        control={control}
        placeholder="your.email.@email.com"
        isRequired
        errors={errors}
        type="email"
        register={register}
        fieldSize="md"
        label="Email"
      />
    </Flex>
  );
};

export const PlaceholderText = Template6.bind({});
PlaceholderText.args = {};

const Template7: Story<FormFieldProps> = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    alert(
      'Successful submission of ' +
        'Name:' +
        data.Name +
        ', ' +
        'Email:' +
        data.Email +
        ', ' +
        'Phone number:' +
        data['Phone number']
    );
  };
  return (
    <Flex gap={8} direction="column">
      <Body>Click submit to see validation</Body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} direction="column">
          <FormField
            control={control}
            placeholder="Name"
            errors={errors}
            register={register}
            required
            fieldSize="sm"
            label="Name"
            name="name"
            type="text"
          />
          <FormField
            control={control}
            placeholder="your.email.@email.com"
            errors={errors}
            register={register}
            required
            fieldSize="sm"
            label="Email"
            name="email"
            type="email"
          />
          <FormField
            control={control}
            placeholder="+1 (234) 567 8901"
            errors={errors}
            register={register}
            required
            fieldSize="sm"
            label="Phone number"
            name="phone number"
            type="tel"
          />
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
export const Validation = Template7.bind({});
Validation.args = {};
