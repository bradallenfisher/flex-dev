/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRadioGroupState } from 'react-stately';
import { useRadioGroup } from 'react-aria';
import React, { createContext, useContext } from 'react';
import { FormLabel } from '../index';
import { Flex } from '../../layout';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { FormFieldErrorMessage } from '../FormFieldErrorMessage/FormFieldErrorMessage';

let RadioContext = createContext(null);

export function RadioGroup(props) {
  let { children, label } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);
  let required = props.required;
  let register = props.register;
  return (
    <Flex id="radio-group" gap={1} direction="column" {...radioGroupProps}>
      {label && (
        <FormLabel
          required={required}
          htmlFor="form-field-input"
          {...labelProps}
          id="Form"
        >
          {label}
        </FormLabel>
      )}
      <RadioContext.Provider value={{ register, required } as any}>
        {children}
      </RadioContext.Provider>
      {/* conditional description message */}
      {props?.description && (
        <FormFieldDescription descriptionProps={descriptionProps}>
          {props?.description}
        </FormFieldDescription>
      )}
      {/* conditional error message */}
      {props?.errors?.radio && (
        <FormFieldErrorMessage errorMessageProps={errorMessageProps}>
          {props?.errorMessage
            ? props?.errorMessage
            : 'Choosing an option is required'}
        </FormFieldErrorMessage>
      )}
    </Flex>
  );
}

export function RadioItem(props) {
  const context = useContext(RadioContext);
  const required = (context as any)?.required;
  const register = (context as any)?.register;

  const { children, name, ...rest } = props;
  const identifier = name || 'radio';

  return (
    <FormLabel
      color={props.disabled ? 'limestoneGray' : 'inherit'}
      htmlFor="radio-button"
      className="block"
    >
      <input
        sx={{ mr: 2 }}
        id="radio-button"
        {...(required
          ? {
              ...register(identifier, {
                required: required,
              }),
            }
          : { ...register(identifier) })}
        type="radio"
        value={children}
        {...rest}
      />
      {children}
    </FormLabel>
  );
}
