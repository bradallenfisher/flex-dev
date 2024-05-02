/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FormAreaProps } from './FormAreaTypes';
import { useTextField } from 'react-aria';
import { useToggle } from '@psu-flex/utility-hooks';
import { useRef } from 'react';
import { Flex } from '../../layout';
import { useFormArea } from './useFormArea';
import { FormLabel } from '../index';
import {
  formAreaSizeObj,
  getFieldBorderStyles,
  getFieldAreaStyles,
} from './FormAreaStyles';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { FormFieldErrorMessage } from '../FormFieldErrorMessage/FormFieldErrorMessage';

/** Use TextArea to present your design and content as clearly and efficiently as possible.*/

export const FormArea = ({
  areaSize = 'sm',
  label,
  register,
  required,
  errors,
  description,
  name,
  ...props
}: FormAreaProps) => {
  const [isAreaFocused, toggleIsAreaFocused] = useToggle(false);
  let ref = useRef(null);
  let { labelProps, descriptionProps, errorMessageProps } = useTextField(
    props,
    ref
  );
  let formAreaProps = useFormArea(props);

  const identifier = name || label;

  //styling
  const fieldBorderSx = getFieldBorderStyles({
    label: label,
    errors: errors,
    isAreaFocused: isAreaFocused,
    isDisabled: props.isDisabled,
  });
  const fieldAreaSx = getFieldAreaStyles(
    { placeholder: props.placeholder },
    areaSize
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
      <textarea
        {...(required
          ? {
              ...register(identifier, {
                required: `${label} is required`,
                maxLength: { value: 600, message: 'Too many characters' },
              }),
            }
          : { ...register(identifier) })}
        //condition aria-invalid if errors is not empty
        aria-invalid={errors[name || (label as any)] ? 'true' : 'false'}
        aria-labelledby={`${identifier}-area-field`}
        sx={{
          ...formAreaSizeObj[areaSize],
          ...fieldBorderSx,
          ...fieldAreaSx,
        }}
        onFocus={toggleIsAreaFocused}
        onBlur={toggleIsAreaFocused}
        {...formAreaProps}
        rows={props.rows || 5}
      />
      {/*conditional description */}
      {description && (
        <FormFieldDescription descriptionProps={descriptionProps}>
          {description}
        </FormFieldDescription>
      )}
      {/* conditional error message */}
      {errors[identifier as any]?.message && (
        <FormFieldErrorMessage errorMessageProps={errorMessageProps}>
          {errors[identifier as any]?.message}
        </FormFieldErrorMessage>
      )}
    </Flex>
  );
};
