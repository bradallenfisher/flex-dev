/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { useComboBoxState } from 'react-stately';
import { useComboBox, useFilter, useButton } from 'react-aria';
import { ComboBoxProps } from './ComboBoxTypes';
import { ListBox } from './ListBox';
import { Popover } from './Popover';
import { Icon } from '../../data-display/Icon/Icon';
import {
  formFieldSizeObj,
  getButtonSx,
  getFieldBorderSx,
  getFieldSx,
} from './ComboBoxStyles';
import { FormLabel } from '../FormLabel/FormLabel';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { Flex } from '../../layout/Flex/Flex';
export { Item, Section } from 'react-stately';

export function ComboBox({
  fieldSize = 'sm',
  label,
  description,
  ...props
}: ComboBoxProps | any) {
  let { contains } = useFilter({ sensitivity: 'base' });
  let state = useComboBoxState({ ...props, defaultFilter: contains });

  let buttonRef = React.useRef(null);
  let inputRef = React.useRef(null);
  let listBoxRef = React.useRef(null);
  let popoverRef = React.useRef(null);

  let {
    buttonProps: triggerProps,
    inputProps,
    listBoxProps,
    labelProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  let isInputFocused = false;

  let { buttonProps } = useButton(triggerProps, buttonRef);
  //styling
  const fieldSx = getFieldSx(fieldSize, props);
  const fieldBorderSx = getFieldBorderSx(props, isInputFocused);

  //merge styling
  const inputSx = {
    ...formFieldSizeObj[fieldSize],
    ...fieldBorderSx,
    ...fieldSx,
  };
  return (
    <Flex direction="column" gap={1} className="inline-flex flex-col relative">
      <FormLabel {...labelProps}> {label}</FormLabel>
      <Flex className="relative">
        <input
          {...inputProps}
          ref={inputRef}
          className="outline-none w-full"
          sx={{ ...inputSx }}
        />
        <button
          className="flex items-center pointer"
          sx={{ ...getButtonSx() }}
          {...buttonProps}
          ref={buttonRef}
        >
          <Icon
            color="coalyGray"
            size={16}
            icon="expand"
            aria-hidden="true"
            extraSx={{
              '& > svg': {
                transform: state.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              },
            }}
          />
        </button>
        {state.isOpen && (
          <Popover
            popoverRef={popoverRef}
            triggerRef={inputRef}
            state={state}
            isNonModal
            placement="bottom start"
          >
            <ListBox
              size={fieldSize}
              {...listBoxProps}
              listBoxRef={listBoxRef}
              state={state}
            />
          </Popover>
        )}
      </Flex>
      {description && (
        <FormFieldDescription descriptionProps={''}>
          {description}
        </FormFieldDescription>
      )}
    </Flex>
  );
}
