/** @jsxRuntime classic */
/** @jsx jsx */
import React, { createContext, useContext } from 'react';
import { jsx } from 'theme-ui';
import { useCheckboxGroupState } from 'react-stately';
import { useCheckboxGroup } from 'react-aria';
import { FormLabel } from '../FormLabel/FormLabel';
import { Flex } from '../../layout';
import { FormFieldErrorMessage } from '../FormFieldErrorMessage/FormFieldErrorMessage';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';

let CheckboxGroupContext = createContext(null);

export function CheckboxGroup(props) {
  let { children, label, description } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps, labelProps, descriptionProps, errorMessageProps } =
    useCheckboxGroup(props, state);

  const required = props?.required;
  const register = props?.register;
  return (
    <Flex id="checkbox-group" gap={1} direction="column" {...groupProps}>
      <FormLabel required={required} {...labelProps}>
        {label}
      </FormLabel>
      <CheckboxGroupContext.Provider
        value={{ required, register, state } as any}
      >
        {children}
      </CheckboxGroupContext.Provider>
      {/* conditional description message */}
      {description && (
        <FormFieldDescription descriptionProps={descriptionProps}>
          {description}
        </FormFieldDescription>
      )}
      {/* conditional error message */}
      {props?.errors?.checkbox && (
        <FormFieldErrorMessage errorMessageProps={errorMessageProps}>
          {props?.errorMessage
            ? props?.errorMessage
            : 'Choosing an option is required'}
        </FormFieldErrorMessage>
      )}
    </Flex>
  );
}

export function CheckboxItem(props) {
  const context = useContext(CheckboxGroupContext);
  const required = (context as any)?.required;
  const register = (context as any)?.register;

  const { children, name, ...rest } = props;
  const identifier = name || 'checkbox';

  return (
    <FormLabel
      color={props.disabled ? 'limestoneGray' : 'inherit'}
      className="block"
    >
      <input
        sx={{ mr: 2 }}
        id="checkbox"
        {...(required
          ? {
              ...register(identifier, {
                required: required,
              }),
            }
          : { ...register(identifier) })}
        type="checkbox"
        value={children}
        {...rest}
      />
      {children}
    </FormLabel>
  );
}
