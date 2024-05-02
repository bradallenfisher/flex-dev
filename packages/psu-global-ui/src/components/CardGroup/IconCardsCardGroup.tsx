import * as React from 'react';
import { Item } from 'react-stately';
import { CardGroup } from './CardGroup';
import { IconCard, IconCardProps, useComponentIntro } from '@psu-flex/core-ui';
import { useCardGroup } from './useCardGroup';
import { ParentCardGroupProps } from '../..';
export const IconCardsCardGroup = ({
  ...props
}: ParentCardGroupProps<IconCardProps>) => {
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);
  //grab any card group props that are passed in
  let cardGroupProps = useCardGroup(props);
  return (
    <CardGroup {...cardGroupProps} {...componentIntroProps}>
      {(item: any) => (
        <Item key={item.itemHeading}>
          <IconCard
            itemHeading={item.itemHeading}
            itemBody={item.itemBody}
            itemIcon={item.itemIcon}
            itemTo={item.itemTo}
          />
        </Item>
      )}
    </CardGroup>
  );
};
