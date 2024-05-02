/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FormFieldErrorMessageProps } from './FormFieldErrorMessageTypes';
import { Body, Icon } from '../../data-display';
import { Flex } from '../../layout';
import { WithChildren } from '@psu-flex/common-ui'; /** Use FormFieldErrorMessage to add error message when field is not valid*/

export const FormFieldErrorMessage = ({
  errorMessageProps,
  ...props
}: WithChildren<FormFieldErrorMessageProps>) => {
  return (
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
        {props.children}
      </Body>
    </Flex>
  );
};
