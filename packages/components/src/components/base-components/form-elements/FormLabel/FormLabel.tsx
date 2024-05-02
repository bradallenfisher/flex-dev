/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithChildren } from '@psu-flex/common-ui';
import { FormLabelProps } from './FormLabelTypes';

/**
 * The FormLabel defines a label for several elements
 */

export const FormLabel = ({
  variant = 16,
  color = 'coalyGray',
  required,
  ...props
}: WithChildren<FormLabelProps>) => {
  const { children, extraSx, ...rest } = props;
  return (
    <label
      id="Form"
      sx={{
        display: 'flex',
        width: 'fit-content',
        color: color,
        variant: `text.bodyStyle.full.${variant}`,
        ...extraSx,
      }}
      {...rest}
    >
      {children}
      {required && (
        <span
          sx={{
            ml: 1,
            color: 'original87Pink',
            fontSize: variant,
          }}
        >
          *
        </span>
      )}
    </label>
  );
};
