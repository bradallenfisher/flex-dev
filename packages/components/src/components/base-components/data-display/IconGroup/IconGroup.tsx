/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { Item } from 'react-stately';
import { jsx } from 'theme-ui';
import { IconButton, ListBox } from '../index';
import { IconGroupProps } from './IconGroupTypes';
import { useFlex } from '../../layout/Flex/useFlex';
/** Icon group displays a list of IconButtons */

export const IconGroup = ({
  iconGroupData,
  size,
  iconButtonVariant,
  type,
  ...props
}: IconGroupProps) => {
  let flexProps = useFlex(props);
  const { extraSx, ...rest } = props;
  return (
    <ListBox
      {...flexProps}
      extraSx={{ ...extraSx }}
      items={iconGroupData}
      {...rest}
    >
      {(item) => (
        <Item key={item}>
          <IconButton
            hocId={props.hocId}
            type={type}
            variant={iconButtonVariant}
            icon={item.icon}
            size={size}
            key={item.icon}
            to={item.to}
          />
        </Item>
      )}
    </ListBox>
  );
};
