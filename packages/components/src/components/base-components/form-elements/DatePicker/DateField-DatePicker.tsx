/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useDateFieldState } from 'react-stately';
import { useDateField, useDateSegment, useLocale } from 'react-aria';
import { createCalendar } from '@internationalized/date';
import React, { useRef } from 'react';
import { Flex } from '@psu-flex/core-ui';

function DateSegment({ segment, state }) {
  let ref = useRef(null);
  let { segmentProps } = useDateSegment(segment, state, ref);

  const segmentSx = {
    '&:focus': {
      background: 'limestoneMaxLight',
      outline: 'none'
    }
  };

  return (
    <div
      {...segmentProps}
      ref={ref}
      className="flex items-center"
      sx={{
        boxSizing: 'content-box',
        ...segmentProps.style,
        fontVariantNumeric: 'tabular-nums',
        ...segmentSx,
        color: segment.isPlaceholder
          ? 'coalyGray'
          : !segment.isEditable
          ? 'coalyGray'
          : 'endlessPotential',
        p: 0
      }}
    >
      {segment.text}
    </div>
  );
}

export function DateField(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  let ref = React.useRef(null);
  let { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <Flex variant="col" className="items-start">
      <div
        {...fieldProps}
        ref={ref}
        sx={{
          height: 'fit-content',
          display: 'inline-flex',
          fontSize: 18,
          px: 4,
          py: 4,
          fontFamily: 'sans',
          fontWeight: 'regular'
        }}
      >
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        {/* {state.isInvalid && (
          <span sx={{ pl: 5 }} className="flex items-center" aria-hidden="true">
            🚫
          </span>
        )} */}
      </div>
    </Flex>
  );
}
