/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { useSelectState } from 'react-stately';
import { HiddenSelect, useSelect, useListBox, useOption } from 'react-aria';
import { FormLabel } from '../FormLabel/FormLabel';
import { Icon } from '../../data-display';
import { SelectButton } from './SelectButton/SelectButton';
import { FormSelectProps } from './SelectTypes';
import { FormFieldErrorMessage } from '../FormFieldErrorMessage/FormFieldErrorMessage';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { Flex } from '../../layout';
import { hoverSx, listItemSizeObj, surfaceSx } from './SelectStyles';
import { SelectPopover } from './SelectPopover/SelectPopover';

const SelectList = (props) => {
  let ref = React.useRef(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      className="w-full outline-none list-none"
      {...listBoxProps}
      ref={listBoxRef}
      sx={{
        maxHeight: '275px',
        margin: 0,
        overflow: 'auto',
        ...surfaceSx,
      }}
    >
      {[...state.collection].map((item) => (
        <Option size={props.size} key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
};

const Option = ({ item, state, ...props }) => {
  let ref = React.useRef(null);
  let { optionProps, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      ref={ref}
      className="flex justify-between"
      {...optionProps}
      sx={{
        minWidth: '320px',
        width: '100%',
        px: 4,
        py: listItemSizeObj[props.size].py,
        borderWidth: 'xs',
        borderStyle: 'solid',
        borderColor: 'white',
        variant: `text.bodyStyle.full.${listItemSizeObj[props.size].fontSize}`,
        ...(isFocused && {
          ...hoverSx,
        }),
        color: isDisabled ? 'limestoneGray' : 'coalyGray',
        cursor: !isDisabled ? 'pointer' : 'default',
      }}
    >
      {item.rendered}
    </li>
  );
};

/** Select components are used for collecting user provided information or filtering from a list of options.

```jsx
let options = [...];
...
    <Select items={options} label="Select" name="navSelect">
      {(item) => (
        <Item key={item}>
          {item}
        </Item>
      )}
    </Select>
```
*/

export const Select = ({
  defaultPlaceholder = 'Select an option',
  size = 'sm',
  errors,
  description,
  setValidationBehavior,
  selectClassName = {},
  buttonClassName = {},
  ...props
}: FormSelectProps | any) => {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = useRef(null);
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect(props, state, ref);

  //if select is required & setter exists then pass validation behavior to form
  if (props.required && setValidationBehavior) {
    setValidationBehavior('required');
  }

  const { name, label } = props;
  return (
    <Flex gap={1} direction="column" extraSx={{ ...selectClassName }}>
      {label && (
        <FormLabel required={props.required} {...labelProps} id="Form">
          {label}
        </FormLabel>
      )}
      <HiddenSelect
        isDisabled={props.isDisabled}
        state={state}
        triggerRef={ref}
        label={label}
        name={name}
      />
      {/**button */}
      <SelectButton
        errors={errors && errors}
        isDisabled={props.isDisabled}
        size={size}
        className="flex justify-between items-center relative"
        buttonClassName={buttonClassName}
        {...triggerProps}
        buttonRef={ref}
      >
        <span {...valueProps} className="flex">
          {state.selectedItem
            ? state.selectedItem.rendered
            : defaultPlaceholder}
        </span>
        <Icon
          extraSx={{
            '& > svg': {
              transform: state.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            },
          }}
          size={12}
          icon="expand"
          color={props.isDisabled ? 'limestoneGray' : 'coalyGray'}
          aria-hidden="true"
        />
        {/**menu */}
        {state.isOpen && (
          <SelectPopover state={state} triggerRef={ref}>
            <SelectList size={size} {...menuProps} state={state} />
          </SelectPopover>
        )}
      </SelectButton>

      {/* conditional description message */}
      {description && (
        <FormFieldDescription descriptionProps={descriptionProps}>
          {description}
        </FormFieldDescription>
      )}
      {/* conditional error message */}
      {errors && errors['select'] && (
        <FormFieldErrorMessage errorMessageProps={errorMessageProps}>
          {errors['select'].message}
        </FormFieldErrorMessage>
      )}
    </Flex>
  );
};
