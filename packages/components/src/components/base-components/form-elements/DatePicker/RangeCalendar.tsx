/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useRef } from 'react';
import { useRangeCalendarState } from 'react-stately';
import { useRangeCalendar, useLocale } from 'react-aria';
import { createCalendar } from '@internationalized/date';
import { CalendarGrid, CalendarIconButton } from './Calendar-DatePicker';
import { Flex } from '@psu-flex/core-ui';
import { Body } from '@psu-flex/core-ui';

export function RangeCalendar(props) {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 1 },
    locale,
    createCalendar,
  });

  let ref = useRef();
  let { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref as any);

  return (
    <div {...calendarProps} ref={ref as any}>
      <Flex variant="spaceBetween" className="items-center">
        <CalendarIconButton icon="chevronLeft" {...prevButtonProps} />
        <Body extraSx={{ color: 'potentialMidnight' }} variant={16}>
          {title}
        </Body>
        <CalendarIconButton icon="chevronRight" {...nextButtonProps} />
      </Flex>
      <CalendarGrid isDateRangePicker state={state} />
    </div>
  );
}
