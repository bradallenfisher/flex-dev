/** @jsxImportSource theme-ui */
import React, { useState, useRef } from 'react';
import { FormLabel, useToggle } from '@psu-flex/core-ui';
import { Icon } from '@psu-flex/core-ui';
import { MultiSelectButton } from './MultiSelectButton/MultiSelectButton';
import { MultiSelectProps } from './MultiSelectTypes';
import { FormFieldDescription } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/core-ui';
import { MultiSelectPopover } from './MultiSelectPopover/MultiSelectPopover';
import { MultiSelectList } from './MultiSelectList/MultiSelectList';

/** MultiSelect components are used for collecting user provided information or filtering from a list of options.

```jsx
let options = [...];
...
    <MultiSelect items={options} label="Select">
      {(item) => (
        <Item key={item}>
          {item}
        </Item>
      )}
    </MultiSelect>
```
*/

export const MultiSelect = ({
  defaultPlaceholder = 'Select an option',
  size = 'sm',
  errors,
  description,
  onSelectionChange,
  selectedKeys,
  items,
  selectedKeyStyle = 'truncate',
  ...props
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useToggle(false);
  const openState = { isOpen, setIsOpen };
  const buttonRef = useRef(null);
  const { label } = props;
  return (
    <Flex className="relative" gap={1} direction="column">
      {/* conditional label */}
      {label && (
        <FormLabel required={props.required} id="Form">
          {label}
        </FormLabel>
      )}
      <Flex className="relative">
        <MultiSelectButton
          size={size}
          className="flex justify-between items-center relative"
          buttonRef={buttonRef}
          onClick={setIsOpen}
        >
          <Flex
            wrap
            className={`text-left ${
              selectedKeyStyle === 'truncate' ? 'truncate' : ''
            }`}
            gap={1}
            extraSx={{
              pr: 5,
              display: selectedKeyStyle === 'truncate' ? 'block' : 'flex',
            }}
          >
            {selectedKeyStyle === 'chip'
              ? //chip style
                selectedKeys.size === 0
                ? defaultPlaceholder
                : Array.from(selectedKeys).map((item: any) => (
                    <span
                      sx={{
                        py: 1,
                        px: 2,
                        backgroundColor: 'limestoneLight',
                        borderRadius: 'rounded',
                      }}
                    >
                      {item}
                    </span>
                  ))
              : //truncate style
              selectedKeys.size === 0
              ? defaultPlaceholder
              : [...selectedKeys].join(', ')}
          </Flex>
          <Icon
            extraSx={{
              '& > svg': {
                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              },
            }}
            size={12}
            icon="expand"
            color={props.isDisabled ? 'limestoneGray' : 'coalyGray'}
            aria-hidden="true"
          />
        </MultiSelectButton>
        {isOpen && (
          <MultiSelectPopover state={openState} triggerRef={buttonRef}>
            <MultiSelectList
              size={size}
              selectionMode="multiple"
              selectedKeys={selectedKeys}
              items={items}
              onSelectionChange={onSelectionChange}
            >
              {props.children}
            </MultiSelectList>
          </MultiSelectPopover>
        )}
      </Flex>
      {/* conditional description message */}
      {description && (
        <FormFieldDescription descriptionProps={'descriptionProps'}>
          {description}
        </FormFieldDescription>
      )}
    </Flex>
  );
};
