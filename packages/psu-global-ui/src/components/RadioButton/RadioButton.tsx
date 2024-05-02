/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRadioGroupState } from 'react-stately';
import {
  useRadioGroup,
  useRadio,
  useFocusRing,
  VisuallyHidden,
  AriaRadioGroupProps,
} from 'react-aria';
import React, { createContext, useContext } from 'react';
import { Body, FormLabel, Icon } from '@psu-flex/psu-global-ui';
import { theme } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/psu-global-ui';

let RadioContext = createContext(null);

export interface RadioGroupProps extends AriaRadioGroupProps {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  required?: boolean;
  register?: any;
  errors?: any;
  errorMessage?: string;
  defaultValue?: string;
  labelStyles?: { [key: string]: string };
  extraSx?: { [key: any]: string };
}

export function RadioGroup(props: RadioGroupProps) {
  let { children, label, labelStyles = {}, extraSx = {} } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);
  let required = props.required;
  let register = props.register;

  return (
    <Flex
      id="radio-group"
      gap={1}
      variant="col"
      {...radioGroupProps}
      extraSx={{ ...extraSx }}
    >
      {label && (
        <FormLabel
          required={required}
          htmlFor="form-field-input"
          {...labelProps}
          extraSx={{
            fontWeight: 360,
            ...labelStyles,
          }}
        >
          {label}
        </FormLabel>
      )}
      {/* @ts-expect-error types belongs to external library */}
      <RadioContext.Provider value={{ state, required, register }}>
        {children}
      </RadioContext.Provider>
      {/* conditional description message */}
      {props?.description && (
        <Flex className="items-center" gap={2}>
          <Icon className="flex" size={16} color="coalyGray" icon="help" />
          <Body {...descriptionProps} role="alert" variant={16}>
            {props?.description}
          </Body>
        </Flex>
      )}
      {/* conditional error message */}
      {props?.errors?.radio && (
        <Flex className="items-center" gap={2}>
          <Icon
            className="flex"
            size={16}
            color="original87Pink"
            icon="priorityCircle"
          />
          <Body
            {...errorMessageProps}
            role="alert"
            variant={16}
            color="original87Pink"
          >
            {props?.errorMessage
              ? props?.errorMessage
              : 'Choosing an option is required'}
          </Body>
        </Flex>
      )}
    </Flex>
  );
}

export interface RadioItemProps {
  children: React.ReactNode;
}
/* using any as types belogns to a third party library */
export function RadioItem(props: RadioItemProps | any) {
  let { children } = props;
  let state: any = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps, isSelected, isDisabled } = useRadio(
    props,
    state.state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();
  let strokeWidth = isSelected ? 6 : 1.2;

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        opacity: isDisabled ? 0.4 : 1,
      }}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg width={24} height={24} aria-hidden="true" style={{ marginRight: 4 }}>
        <circle
          cx={12}
          cy={12}
          r={10 - strokeWidth / 2}
          fill="none"
          stroke={isSelected ? theme.colors.beaverBlue : 'black'}
          strokeWidth={strokeWidth}
        />
        {isFocusVisible && (
          <circle
            cx={12}
            cy={12}
            r={11}
            fill="none"
            stroke="black"
            strokeWidth={1.2}
          />
        )}
      </svg>
      <span
        sx={{
          fontWeight: 360,
        }}
      >
        {children}
      </span>
    </label>
  );
}
