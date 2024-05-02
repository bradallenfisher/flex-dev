/** @jsxRuntime classic */
/** @jsx jsx */
import React, { createContext, useContext } from "react";
import { jsx } from "theme-ui";
import { UseFormRegister } from "react-hook-form";
import { useCheckboxGroupState, useToggleState } from "react-stately";
import {
  useCheckboxGroup,
  VisuallyHidden,
  useCheckbox,
  useFocusRing,
  mergeProps,
} from "react-aria";
import { Body, FormLabel, Icon } from "@psu-flex/psu-global-ui";
import { Flex } from "@psu-flex/psu-global-ui";

let CheckboxGroupContext = createContext(null);

interface CheckboxGroupProps {
  children: React.ReactNode;
  label: string;
  description?: string;
  required?: boolean;
  register?: UseFormRegister<any> | any;
  errors?: any;
  errorMessage?: string;
  defaultValue?: string[];
}

export function CheckboxGroup(props: CheckboxGroupProps) {
  let { children, label, description } = props;
  let state = useCheckboxGroupState(props);
  let { groupProps, labelProps, descriptionProps, errorMessageProps } =
    useCheckboxGroup(props, state);

  const required = props.required;
  const register = props.register;
  return (
    <Flex id="checkbox-group" gap={1} variant="col" {...groupProps}>
      <FormLabel
        required={required}
        {...labelProps}
        extraSx={{
          fontWeight: "360",
        }}
      >
        {label}
      </FormLabel>
      {/* @ts-expect-error types belongs to external library */}
      <CheckboxGroupContext.Provider value={{ required, register, state }}>
        {children}
      </CheckboxGroupContext.Provider>
      {/* conditional description message */}
      {description && (
        <Flex className="items-center" gap={2}>
          <Icon className="flex" size={16} color="coalyGray" icon="help" />
          <Body {...descriptionProps} role="alert" variant={16}>
            {description}
          </Body>
        </Flex>
      )}
      {/* conditional error message */}
      {props?.errors?.checkbox && (
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
              : "Choosing an option is required"}
          </Body>
        </Flex>
      )}
    </Flex>
  );
}

interface CheckboxItemProps {
  children?: React.ReactNode;
  isIndeterminate?: boolean;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
}

export function CheckboxItem(props: CheckboxItemProps) {
  const context:
    | {
        required?: boolean | any;
        register?: void | any;
        state?: any;
      }
    | any = useContext(CheckboxGroupContext);

  const required = context.required;
  const register = context.register;

  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps } = useCheckbox(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  let isSelected = state.isSelected && !props.isIndeterminate;

  const { children, ...rest } = props;

  return (
    <FormLabel
      color={props.disabled ? "limestoneGray" : "coalyGray"}
      className="block"
    >
      <VisuallyHidden>
        <input
          sx={{ mr: 2 }}
          id="checkbox"
          {...(required
            ? {
                ...register("checkbox", {
                  required: required,
                }),
              }
            : { ...register("checkbox") })}
          {...mergeProps(inputProps, focusProps)}
          type="checkbox"
          value={children}
          {...rest}
          ref={ref}
        />
      </VisuallyHidden>
      <svg
        width="24"
        height="26"
        viewBox="0 0 24 26"
        aria-hidden="true"
        style={{ marginRight: 4 }}
      >
        <rect
          x={isSelected ? 3.5 : 4.5}
          y={isSelected ? 4.5 : 5.5}
          width={isSelected ? 17 : 15}
          height={isSelected ? 17 : 15}
          fill={isSelected ? "#1E407C" : props.disabled ? "#E5E5E5" : "none"}
          stroke={isSelected ? "none" : props.disabled ? "#E5E5E5" : "#262626"}
          rx="1.5"
        />
        {isSelected && (
          <path
            transform="translate(6 6)"
            d="M11.25 3.5C11.25 3.71094 11.1562 3.89844 11.0156 4.03906L5.01562 10.0391C4.875 10.1797 4.6875 10.25 4.5 10.25C4.28906 10.25 4.10156 10.1797 3.96094 10.0391L0.960938 7.03906C0.820312 6.89844 0.75 6.71094 0.75 6.5C0.75 6.07812 1.07812 5.75 1.5 5.75C1.6875 5.75 1.875 5.84375 2.01562 5.98438L4.5 8.44531L9.96094 2.98438C10.1016 2.84375 10.2891 2.75 10.5 2.75C10.8984 2.75 11.25 3.07812 11.25 3.5Z"
            fill="white"
          />
        )}
        {props.isIndeterminate && (
          <rect x={7} y={11} width={10} height={2} fill="gray" />
        )}
        {isFocusVisible && (
          <rect
            x={1}
            y={1}
            width={22}
            height={22}
            fill="none"
            stroke="orange"
            strokeWidth={1.2}
          />
        )}
      </svg>
      <span
        sx={{
          fontWeight: "360",
        }}
      >
        {children}
      </span>
    </FormLabel>
  );
}
