/** @jsxImportSource theme-ui */
import { Icon } from '@psu-flex/core-ui';
import React from 'react';
import { hoverSx, listItemSizeObj } from '../MultiSelectStyles';
import { useListBoxSection } from 'react-aria';
import { useListState } from 'react-stately';
import { useListBox, useOption } from 'react-aria';
function ListBoxSection({ size, section, state }) {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <li sx={{ pt: 4 }} {...itemProps}>
      {section.rendered && (
        <span
          sx={{
            px: 4,
            fontSize: 14,
            fontWeight: 'bold',
            color: 'limestoneGray',
            letterSpacing: '.1px',
          }}
          {...headingProps}
          className="uppercase w-full"
        >
          {section.rendered}
        </span>
      )}
      <ul {...groupProps} sx={{ pt: 2 }}>
        {[...section.childNodes].map((node) => (
          <Option size={size} key={node.key} item={node} state={state} />
        ))}
      </ul>
    </li>
  );
}

export function MultiSelectList(props: any) {
  // Create state based on the incoming props
  // Get props for the listbox element
  let state = useListState(props);
  // Get props for the listbox element
  let ref = React.useRef(null);
  let { listBoxProps } = useListBox(props, state, ref);
  return (
    <ul
      className="w-full overflow-auto outline-none"
      {...listBoxProps}
      ref={ref}
    >
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <ListBoxSection
            size={props.size}
            key={item.key}
            section={item}
            state={state}
          />
        ) : (
          <Option size={props.size} key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
}

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
      className="flex justify-between items-center w-full"
      {...optionProps}
      sx={{
        px: 4,
        py: listItemSizeObj[props.size].py,
        borderWidth: 'xs',
        borderStyle: 'solid',
        borderColor: optionProps['aria-selected']
          ? 'limestoneMaxLight'
          : 'transparent',
        backgroundColor: optionProps['aria-selected']
          ? 'limestoneMaxLight'
          : 'transparent',
        variant: `text.bodyStyle.full.${listItemSizeObj[props.size].fontSize}`,
        ...(isFocused &&
          optionProps['aria-selected'] && {
            backgroundColor: 'limestoneMaxLight',
          }),
        '&:hover': {
          ...hoverSx,
        },
        '&:focus-visible': { outline: 'none' },
        color: isDisabled ? 'limestoneGray' : 'coalyGray',
        cursor: !isDisabled ? 'pointer' : 'default',
      }}
    >
      {item.rendered}
      {optionProps['aria-selected'] && (
        <Icon color="coalyGray" icon="check" size={16} aria-hidden="true" />
      )}
    </li>
  );
};
