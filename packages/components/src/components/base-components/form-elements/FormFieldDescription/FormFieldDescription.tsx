/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FormFieldDescriptionProps } from './FormFieldDescriptionTypes';
import { Body, Icon } from '../../data-display';
import { Flex } from '../../layout';
import { WithChildren } from '@psu-flex/common-ui'; /** Use FormFieldDescription to add help text to form field*/

export const FormFieldDescription = ({
  descriptionProps,
  ...props
}: WithChildren<FormFieldDescriptionProps>) => {
  return (
    <Flex className="items-center" gap={2}>
      <Icon className="flex" size={16} color="coalyGray" icon="help" />
      <Body {...descriptionProps} role="alert" variant={16}>
        {props.children}
      </Body>
    </Flex>
  );
};
