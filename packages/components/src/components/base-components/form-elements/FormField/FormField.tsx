/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { useTextField } from 'react-aria';
import { useToggle } from '@psu-flex/utility-hooks';
import { Flex } from '../../layout';
import { FormLabel } from '../index';
import { FormFieldProps } from './FormFieldTypes';
import {
  formFieldSizeObj,
  getFieldSx,
  getFieldBorderSx,
} from './FormFieldStyles';
import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';
import { useFormField } from './useFormField';
import { getFormFieldValidation } from './validation';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { FormFieldErrorMessage } from '../FormFieldErrorMessage/FormFieldErrorMessage';

/** FormFields allow users to enter text into a UI. */

export const FormField = ({
  label,
  required,
  description,
  fieldSize = 'sm',
  errors,
  register,
  control,
  name,
  ...props
}: FormFieldProps) => {
  const [isInputFocused, toggleIsInputFocused] = useToggle(false);
  const identifier = name || label;

  let ref = useRef(null);
  let { labelProps, descriptionProps, errorMessageProps } = useTextField(
    props,
    ref
  );
  //grab maxLength for validation & to prevent input from blocking characters
  let { maxLength, ...restFormFieldProps } = useFormField(props);

  //validation
  const formFieldValidationObj = getFormFieldValidation(label, maxLength);

  //styling
  const fieldSx = getFieldSx(fieldSize, props);
  const fieldBorderSx = getFieldBorderSx(props, errors, label, isInputFocused);

  //merge styling
  const inputSx = {
    ...formFieldSizeObj[fieldSize],
    ...fieldBorderSx,
    ...fieldSx,
  };

  if (props?.type === 'email') {
    formFieldValidationObj[props?.type as any]?.errorMessage;
  }

  const transformedErrorMessage = errors[identifier]?.message.replaceAll(
    new RegExp(`\\b${identifier}\\b`, 'g'),
    `${label}`
  );

  return (
    <Flex gap={1} direction="column">
      {/* label */}
      {label && (
        <FormLabel
          required={required}
          htmlFor="form-field-input"
          {...labelProps}
        >
          {label}
        </FormLabel>
      )}
      {/* telephone type input case */}
      {props.type === 'tel' ? (
        <Controller
          control={control}
          name={identifier}
          defaultValue=""
          rules={{
            required: formFieldValidationObj['tel'].errorMessage,
          }}
          render={({ field: { onChange, name, value } }) => (
            <PatternFormat
              format="+1 (###) ### ####"
              name={name}
              value={value}
              onChange={onChange}
              placeholder={props.placeholder}
              sx={{
                ...inputSx,
              }}
              onFocus={toggleIsInputFocused}
              onBlur={toggleIsInputFocused}
            />
          )}
        />
      ) : (
        <input
          {...(required
            ? {
                ...register(identifier, {
                  required:
                    formFieldValidationObj[props?.type as any]?.errorMessage,
                  ...formFieldValidationObj[props?.type as any]?.rules,
                }),
              }
            : maxLength
            ? {
                ...register(identifier, {
                  maxLength:
                    formFieldValidationObj[props?.type as any]?.errorMessage,
                  ...formFieldValidationObj[props?.type as any]?.rules,
                }),
              }
            : { ...register(identifier) })}
          //condition aria-invalid if errors is not empty
          aria-invalid={errors[identifier] ? 'true' : 'false'}
          aria-labelledby={`${identifier}-form-field`}
          sx={{
            ...inputSx,
          }}
          onFocus={toggleIsInputFocused}
          onBlur={toggleIsInputFocused}
          {...restFormFieldProps}
        />
      )}
      {/* conditional description message */}
      {description && (
        <FormFieldDescription descriptionProps={descriptionProps}>
          {description}
        </FormFieldDescription>
      )}
      {/* conditional error message */}
      {errors[identifier]?.message && (
        <FormFieldErrorMessage errorMessageProps={errorMessageProps}>
          {identifier !== label
            ? transformedErrorMessage
            : errors[identifier]?.message}
        </FormFieldErrorMessage>
      )}
    </Flex>
  );
};
