/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useListState } from 'react-stately';
import { mergeProps, useFocusRing, useListBox, useOption } from 'react-aria';
import React from 'react';
import { ListBoxProps } from './ListBoxTypes';
import { useFlex, Flex } from '../../layout/index';

export function ListItem({ item, state }: any) {
  // Get props for the option element
  let ref = React.useRef(null);
  let { optionProps } = useOption({ key: item.key }, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      sx={{
        display: 'list-item',
        '&:focus': { border: '1px solid #fff' },
      }}
      data-focus-visible={isFocusVisible}
    >
      {item.rendered}
    </li>
  );
}

/**A ListBox displays a list of options as ListItems. ListItems will wrap all Component needed. Note: ListBox only handles the list parent itself. Any array of elements can be passed into the list and will automatically be wrapped with an li that has props needed for accessibility. ListBox inherits behavior from Flex, meaning any props on Flex can be passed into ListBox.
 *
 * ```jsx
 * const options = [...];
 * ...
 * <ListBox
      gap={4}
      direction='column'
      gutterY={4}
      items={options}
      >
        {(item) => (
          <Item key={item}>
              {item.name}
          </Item>
        )}
      </ListBox>
 * ```
*/

export function ListBox({ listStyle = 'none', ...props }: ListBoxProps | any) {
  // Create state based on the incoming props
  let state = useListState(props);

  // Get props for the listbox element
  let ref = React.useRef(null);
  let { labelProps } = useListBox(props, state, ref);

  // Get any flexProps that are passed in
  let flexProps = useFlex(props);
  const { tag, ...restFlexProps } = flexProps;
  return (
    <Flex
      className={props.className}
      ref={ref}
      {...restFlexProps}
      tag={tag || 'ul'}
      extraSx={{
        listStyle: props.tag === 'ol' ? 'auto' : 'none',
        width: 'fit-content',
        ...props.extraSx,
      }}
    >
      {[...state.collection].map((item) => (
        <ListItem key={item.key} item={item} state={state} />
      ))}
    </Flex>
  );
}
