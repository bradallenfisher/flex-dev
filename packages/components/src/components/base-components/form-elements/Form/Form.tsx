/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Flex } from '../../layout';
import {
  FormField,
  FormArea,
  Select,
  RadioGroup,
  RadioItem,
  CheckboxGroup,
  CheckboxItem,
} from '../index';
import { CtaButton } from '../../data-display';
import { SubmitAlert } from '../../feedback';
import { DevTool } from '@hookform/devtools';
import { Item } from 'react-stately';
import { FormProps } from './FormTypes';
import { contentContainerMargins } from '@psu-flex/platform-theme';

const { msm } = contentContainerMargins;

export const Form = ({ data }: FormProps) => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {},
  });

  //for select validation
  const [selectItem, setSelectItem] = useState();
  const [selectValidationBehavior, setSelectValidationBehavior] = useState();

  const [isSuccess, setIsSuccess] = useState(false);
  const [isHideForm, setIsHideForm] = useState(false);

  const onSubmit = (data) => {
    console.log('data', data);
    if (handleValidateSelect() === false) {
      console.log('error');
      return;
    } else {
      setIsSuccess(true);
      setIsHideForm(true);
    }
  };

  //manually setting validation error for select since react-aria ref's conflict with react hook form register
  const handleValidateSelect = () => {
    if (!selectItem && selectValidationBehavior === 'required') {
      setError('select', {
        type: 'required',
        message: 'Please choose an option',
      });
      return false;
    }
  };

  //clearing errors on select
  const handleSelectionChange = (selected) => {
    setSelectItem(selected);
    errors['select'] && clearErrors('select');
  };

  return (
    <Flex
      extraSx={{
        py: [16, 12, 12, 16],
        px: [msm as any, 12, 12, 20],
        width: '100%',
        backgroundColor: 'limestoneMaxLight',
      }}
      direction="column"
    >
      {isSuccess && (
        <SubmitAlert variant="success" alertTitle="Thank you!">
          Your response was successfully submitted.
        </SubmitAlert>
      )}
      {!isHideForm && (
        <form
          id="form"
          className="flex-col"
          onSubmit={handleSubmit(onSubmit, handleValidateSelect)}
        >
          <Flex direction="column" gap={6}>
            <FormField
              maxLength={40}
              name="First Name"
              control={control}
              type="text"
              errors={errors}
              label="First Name"
              placeholder="Your First Name"
              register={register}
            />
            <FormField
              name="Last Name"
              type="text"
              control={control}
              errors={errors}
              label="Last Name"
              placeholder="Your Last Name"
              register={register}
              required
            />
            <FormField
              name="Email"
              type="email"
              control={control}
              errors={errors}
              label="Email"
              placeholder="your.email@domain.com"
              register={register}
              required
            />
            <FormField
              name="Phone number"
              type="tel"
              control={control}
              errors={errors}
              label="Phone number"
              placeholder="+1 (234) 567 8901"
              register={register}
              required
            />
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
            <Select
              required
              errors={errors}
              label="Select an option"
              description="This is a helpful hint"
              selectedKey={selectItem}
              setValidationBehavior={setSelectValidationBehavior}
              onSelectionChange={(selected) => handleSelectionChange(selected)}
            >
              <Item key="United States">United States</Item>
              <Item key="Ireland">Ireland</Item>
              <Item key="Germany">Germany</Item>
            </Select>
            <RadioGroup
              register={register}
              required
              errors={errors}
              label="Radio Group Label"
            >
              <RadioItem>Phone</RadioItem>
              <RadioItem>Email</RadioItem>
            </RadioGroup>
            <CheckboxGroup
              required
              register={register}
              errors={errors}
              label="Do you agree on sharing information?"
            >
              <CheckboxItem>I accept and agree</CheckboxItem>
            </CheckboxGroup>
            <CtaButton
              variant="primaryFilled"
              size="md"
              type="submit"
              extraSx={{ mt: 4 }}
            >
              Submit Form
            </CtaButton>
          </Flex>
        </form>
      )}
      <DevTool control={control} />
    </Flex>
  );
};
