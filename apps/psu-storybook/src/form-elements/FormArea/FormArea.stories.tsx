/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Meta, Story } from '@storybook/react';
import { Flex } from '@psu-flex/core-ui';
import { Body, CtaButton, FormArea } from '@psu-flex/core-ui';
import { useForm } from 'react-hook-form';
import { FormAreaProps } from '@psu-flex/core-ui';

export default {
  title: 'Form Elements/FormArea',
  component: FormArea,
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

const exampleHocId = 'ExampleHigherOrderComponent';

const Template: Story<FormAreaProps> = () => (
  <FormArea
    name="Message"
    errors={errors}
    register={register}
    rows={5}
    label="Message"
  />
);

export const StaticExample = Template.bind({});
StaticExample.args = {};

const Template2: Story<FormAreaProps> = () => (
  <FormArea
    name="Message"
    errors={errors}
    register={register}
    description="This is hint text to help the user."
    label="Message"
  />
);

export const Description = Template2.bind({});
Description.args = {};

const Template3: Story<FormAreaProps> = () => (
  <FormArea
    defaultValue="Default message"
    name="Message"
    errors={errors}
    label="Message"
    rows={5}
    register={register}
  />
);

export const DefaultValue = Template3.bind({});
DefaultValue.args = {};

const Template4: Story<FormAreaProps> = () => (
  <Flex gap={8} direction="column">
    <FormArea
      areaSize="sm"
      name="Message"
      errors={errors}
      label="sm size"
      rows={5}
      register={register}
    />
    <FormArea
      areaSize="md"
      name="Message"
      errors={errors}
      label="md size"
      rows={5}
      register={register}
    />
  </Flex>
);

export const SizeOptions = Template4.bind({});
SizeOptions.args = {};

const Template5: Story<FormAreaProps> = () => (
  <FormArea
    name="Message"
    errors={errors}
    label="Message"
    rows={5}
    required
    register={register}
  />
);

export const RequiredFields = Template5.bind({});
RequiredFields.args = {};

const Template6: Story<FormAreaProps> = () => (
  <FormArea
    name="Message"
    errors={errors}
    label="Message"
    rows={5}
    placeholder="Your message"
    register={register}
  />
);

export const PlaceholderText = Template6.bind({});
PlaceholderText.args = {};

const Template7: Story<FormAreaProps> = () => (
  <FormArea
    name="Message"
    errors={errors}
    label="Message"
    rows={15}
    register={register}
  />
);

export const ChangeRowSize = Template7.bind({});
PlaceholderText.args = {};

const Template8: Story<FormAreaProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    alert('Successful submission of Message: ' + data.Message);
  };
  return (
    <Flex gap={8} direction="column">
      <Body>Click submit to see validation</Body>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={4} direction="column">
          <FormArea
            name="Message"
            errors={errors}
            label="Message"
            rows={5}
            placeholder="Your message"
            required
            register={register}
            description="Maximum 600 characters"
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
export const Validation = Template8.bind({});
Validation.args = {};
