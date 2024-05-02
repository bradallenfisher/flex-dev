/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  useButton,
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
  useLocale,
} from 'react-aria';
import { useCalendarState } from 'react-stately';
import {
  createCalendar,
  getWeeksInMonth,
  endOfMonth,
} from '@internationalized/date';
import React, { useRef } from 'react';
import { Body, Icon } from '@psu-flex/core-ui';
import { Flex } from '@psu-flex/core-ui';

export function CalendarIconButton(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <button
      className="pointer"
      sx={{
        backgroundColor: 'transparent',
        border: '0px',
        borderRadius: '100%',
        '&:hover': { backgroundColor: 'limestoneMaxLight' },
        '&:active': { transform: 'scale(.935)' },
        p: 2,
      }}
      {...buttonProps}
      ref={ref}
    >
      <Icon
        extraSx={{ cursor: 'pointer' }}
        className="flex"
        size={16}
        icon={props.icon}
      />
    </button>
  );
}

export function Calendar(props) {
  let { locale } = useLocale();
  let state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const { isDateRangePicker = false } = props;

  let { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(
    props,
    state
  );

  return (
    <Flex variant="col" extraSx={{ width: '100%' }} {...calendarProps}>
      <Flex extraSx={{ px: 3 }} variant="spaceBetween">
        <CalendarIconButton icon="chevronLeft" {...prevButtonProps} />
        <Body extraSx={{ color: 'potentialMidnight' }} variant={16}>
          {title}
        </Body>
        <CalendarIconButton icon="chevronRight" {...nextButtonProps} />
      </Flex>
      <CalendarGrid isDateRangePicker={isDateRangePicker} state={state} />
    </Flex>
  );
}

export function CalendarGrid({ state, offset = {}, isDateRangePicker }) {
  let { locale } = useLocale();
  let startDate = state.visibleRange.start.add(offset);
  let endDate: any = endOfMonth(startDate);
  let weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sun', 'sat'];

  let { gridProps, headerProps } = useCalendarGrid(
    {
      startDate,
      endDate,
    },
    state
  );

  // Get the number of weeks in the month so we can render the proper number of rows.
  let weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <table sx={{ borderSpacing: '0px' }} {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th
              className="uppercase"
              sx={{
                minWidth: '40px',
                height: '44px',
                fontSize: 12,
                lineHeight: '150',
                fontWeight: 'regular',
                fontFamily: 'sans',
                color: 'coalyGray',
              }}
              key={index}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex, startDate)
              .map((date, i) =>
                date ? (
                  <CalendarCell
                    isDateRangePicker={isDateRangePicker}
                    key={i}
                    state={state}
                    date={date}
                  />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CalendarCell({ state, date, isDateRangePicker }) {
  let ref = useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  let startRangeDay = state?.highlightedRange?.start?.day;
  let endRangeDay = state?.highlightedRange?.end?.day;

  const selectedSingleCellSx = {
    backgroundColor: 'beaverBlue',
    color: 'white',
    borderRadius: '100%',
  };

  const defaultSelectedRangeCellSx = {
    backgroundColor: 'slateMaxLight',
    color: 'nittanyNavy',
    borderRadius: '0px',
  };

  const minMaxSelectedRangeSharedSx = {
    backgroundColor: 'beaverBlue',
    color: 'white',
  };

  const selectedRangeCellsSx = {
    ...(startRangeDay == formattedDate
      ? {
          ...minMaxSelectedRangeSharedSx,
          borderRadius: '4px 0px 0px 4px',
        }
      : endRangeDay == formattedDate
      ? {
          ...minMaxSelectedRangeSharedSx,
          borderRadius: '0px 4px 4px 0px',
        }
      : {
          ...defaultSelectedRangeCellSx,
        }),
  };

  const disabledSx = {
    color: 'limestoneGray',
    '&:hover': { backgroundColor: 'transparent' },
    pointerEvents: 'none !important' as React.CSSProperties['pointerEvents'],
  };

  const unavailableSx = {
    color: 'discoveryCoral',
  };

  const singleCellSx = {
    ...(isSelected && {
      ...selectedSingleCellSx,
    }),
    '&:hover': {
      backgroundColor: isSelected || isDisabled ? null : 'slateMaxLight',
      borderRadius: '100%',
    },
  };

  const rangeCellSx = {
    ...(isSelected && { ...selectedRangeCellsSx }),
    '&:hover': {
      backgroundColor: isSelected || isDisabled ? null : 'slateMaxLight',
    },
  };

  return (
    <td sx={{ p: 0 }} {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        sx={{
          transition: 'all .1s',
          cursor: isDisabled ? 'default' : 'pointer',
          minWidth: '40px',
          height: '40px',
          ...(!isDateRangePicker
            ? {
                ...singleCellSx,
              }
            : {
                ...rangeCellSx,
              }),
          ...(isDisabled && { ...disabledSx }),
          ...(isUnavailable && { ...unavailableSx }),
        }}
        className="flex items-center justify-center"
      >
        {formattedDate}
      </div>
    </td>
  );
}
