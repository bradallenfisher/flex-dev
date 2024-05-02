/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { useComboBoxState, useSearchFieldState } from 'react-stately';
import { useComboBox, useFilter, useButton, useSearchField } from 'react-aria';
import { Icon } from '../../data-display';
import { ListBox } from './ListBox';
import { Popover } from './Popover';
import {
  formFieldSizeObj,
  getFieldBorderSx,
  getFieldSx,
} from './SearchAutocompleteStyles';
import { FormLabel } from '../FormLabel/FormLabel';
import { Flex } from '../../layout/Flex/Flex';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { SearchAutocompleteProps } from './SearchAutocompleteTypes';
export { Item } from 'react-stately';

export function SearchAutocomplete({
  description,
  fieldSize = 'sm',
  label,
  ...props
}: SearchAutocompleteProps | any) {
  let { contains } = useFilter({ sensitivity: 'base' });
  //@ts-ignore
  let state = useComboBoxState({ ...props, defaultFilter: contains });
  console.log(state);
  let inputRef = React.useRef(null);
  let listBoxRef = React.useRef(null);
  let popoverRef = React.useRef(null);

  let { inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...props,
      inputRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  // Get props for the clear button from useSearchField
  let searchProps = {
    label: label,
    value: state.inputValue,
    onChange: (v: string) => state.setInputValue(v),
  };

  let isInputFocused = false;

  let searchState = useSearchFieldState(searchProps);
  let { clearButtonProps } = useSearchField(searchProps, searchState, inputRef);
  let clearButtonRef = React.useRef(null);
  let { buttonProps } = useButton(clearButtonProps, clearButtonRef);
  let outerRef = React.useRef(null);

  //styling
  const fieldSx = getFieldSx(fieldSize, props);
  const fieldBorderSx = getFieldBorderSx(props, isInputFocused);

  const inputSx = {
    ...formFieldSizeObj[fieldSize],
    ...fieldBorderSx,
    ...fieldSx,
  };

  return (
    <Flex direction="column" gap={1} className="inline-flex flex-col relative">
      <FormLabel {...labelProps}> {label}</FormLabel>
      <Flex
        ref={outerRef}
        extraSx={{ ...inputSx, px: 3, py: 1 }}
        className="relative flex inline-flex flex-row items-center"
      >
        <Icon size={18} icon="search" aria-hidden="true" />
        <input
          sx={{
            border: '0px',
            px: 2,
            py: 2,
            fontSize: 16,
            ...(props?.placeholder && {
              '&::placeholder': {
                color: 'limestoneGray',
                fontStyle: 'normal',
              },
            }),
            '&::placeholder': {
              fontStyle: 'normal',
            },
          }}
          {...inputProps}
          ref={inputRef}
          className="w-full outline-none appearance-none"
          placeholder={props.placeholder}
        />
        <button
          className="pointer"
          {...buttonProps}
          ref={clearButtonRef}
          sx={{
            visibility: state.inputValue !== '' ? 'visible' : 'hidden',
            background: 'transparent',
            border: '0px',
          }}
        >
          <Icon size={18} icon="close" aria-hidden="true" />
        </button>
        {state.isOpen && (
          <Popover
            popoverRef={popoverRef}
            triggerRef={outerRef}
            state={state}
            isNonModal
            placement="bottom start"
          >
            <ListBox
              size="sm"
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
