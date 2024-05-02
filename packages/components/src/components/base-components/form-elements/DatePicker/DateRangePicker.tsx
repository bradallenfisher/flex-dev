/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useRef } from 'react';
import { useDateRangePickerState } from 'react-stately';
import { useDateRangePicker } from 'react-aria';
import { Button } from './Button-DatePicker';
import { RangeCalendar } from './RangeCalendar';
import { DateField } from './DateField-DatePicker';
import { Popover } from './Popover-DatePicker';
import { Dialog } from './Dialog-DatePicker';
import { FormLabel } from '@psu-flex/core-ui';
import { BaseProps } from '@psu-flex/common-ui';
import { Flex } from '@psu-flex/core-ui';
export interface DateRangePicker extends BaseProps {}

export function DateRangePicker(props) {
  let state = useDateRangePickerState({
    ...props,
    shouldCloseOnSelect: false,
  });
  let ref = useRef();
  let {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref);

  return (
    <Flex gap={1} className="relative" variant="col">
      <FormLabel {...labelProps}>{props.label}</FormLabel>
      <div className="flex items-center" {...groupProps} ref={ref}>
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
          <DateField {...startFieldProps} />
          <div aria-hidden="true">–</div>
          <DateField {...endFieldProps} />
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
        <Button {...buttonProps} isPressed={state.isOpen}>
          Pick Dates
        </Button>
      </div>
      {state.isOpen && (
        <Popover triggerRef={ref} state={state} placement="bottom start">
          <Dialog {...dialogProps}>
            <RangeCalendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </Flex>
  );
}
