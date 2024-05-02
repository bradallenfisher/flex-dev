/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';
import { useListBox, useListBoxSection, useOption } from 'react-aria';
import { Icon } from '../../data-display/Icon/Icon';
import { hoverSx, listItemSizeObj } from '../Select/SelectStyles';

export function ListBox({ size, ...props }) {
  let ref = React.useRef<HTMLUListElement>(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="w-full overflow-auto outline-none"
    >
      {[...state.collection].map((item) =>
        item.type === 'section' ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option size={size} key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
}

function ListBoxSection({ section, state, size = 'sm', ...props }: any) {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label'],
  });

  return (
    <>
      <li sx={{ pt: 5 }} {...itemProps}>
        {section.rendered && (
          <span
            sx={{
              px: 4,
              width: '100%',
              fontSize: 14,
              fontWeight: 'bold',
              color: 'limestoneGray',
              letterSpacing: '.1px',
            }}
            {...headingProps}
            className="uppercase"
          >
            {section.rendered}
          </span>
        )}
        <ul sx={{ pt: 2 }} {...groupProps}>
          {[...section.childNodes].map((node) => (
            <Option size={size} key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

function Option({ item, state, size = 'sm', ...props }: any) {
  let ref = React.useRef<HTMLLIElement>(null);
  let { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      sx={{
        width: '100%',
        px: 4,
        py: listItemSizeObj[size].py,
        borderWidth: 'xs',
        borderStyle: 'solid',
        borderColor: 'white',
        variant: `text.bodyStyle.full.${listItemSizeObj[size].fontSize}`,
        ...(isFocused && {
          ...hoverSx,
        }),
        color: isDisabled ? 'limestoneGray' : 'coalyGray',
        cursor: !isDisabled ? 'pointer' : 'default',
      }}
      className="flex items-center justify-between"
    >
      {item.rendered}
      {isSelected && (
        <Icon color="coalyGray" icon="check" size={16} aria-hidden="true" />
      )}
    </li>
  );
}
