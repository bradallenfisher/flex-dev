/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { BaseProps } from '@psu-flex/common-ui';
import React from 'react';
import { useDatePicker } from 'react-aria';
import { useDatePickerState } from 'react-stately';
import { Button } from './Button-DatePicker';
import { DateField } from './DateField-DatePicker';
import { Popover } from './Popover-DatePicker';
import { Dialog } from './Dialog-DatePicker';
import { Calendar } from './Calendar-DatePicker';
import { Flex } from '@psu-flex/core-ui';
import { FormLabel } from '@psu-flex/core-ui';
export interface DatePicker extends BaseProps {}

/** Description */

export function DatePicker(props) {
  let state = useDatePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });
  let ref = React.useRef(null);
  let {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  return (
    <Flex gap={1} variant="col">
      {props.label && <FormLabel {...labelProps}>{props.label}</FormLabel>}
      <div {...groupProps} ref={ref} style={{ display: 'flex' }}>
        <div
          className="flex items-center"
          sx={{
            backgroundColor: 'white',
            borderRadius: '4px 0px 0px 4px',
            border: '1px solid',
            borderColor: 'limestoneGray',
            '&:focus-within': {
              borderColor: 'link',
            },
          }}
        >
          <DateField {...fieldProps} />
          {state.isInvalid && (
            <span
              sx={{ pr: 3 }}
              className="flex items-center"
              aria-hidden="true"
            >
              🚫
            </span>
          )}
        </div>
        <Button {...buttonProps}>Pick a Date</Button>
      </div>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <Dialog {...dialogProps}>
            <Calendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </Flex>
  );
}
