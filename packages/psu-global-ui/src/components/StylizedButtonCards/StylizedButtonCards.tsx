import { useComponentIntro } from '@psu-flex/core-ui';
import React from 'react';
import { Item } from 'react-stately';
import { ParentCardGroupProps } from '../..';
import { CardGroup } from '../CardGroup/CardGroup';
import { useCardGroup } from '../CardGroup/useCardGroup';
import { StylizedButtonCard } from '../StylizedButtonCard/StylizedButtonCard';
import { StylizedButtonCardProps } from '../StylizedButtonCard/StylizedButtonCardTypes';

export const StylizedButtonCards = ({
  ...props
}: ParentCardGroupProps<StylizedButtonCardProps>) => {
  const defaultColumnSpan = props.cards.length <= 3 ? 4 : [4, 4, 3, 3];
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);
  const cardGroupProps = useCardGroup(props);

  return (
    <CardGroup
      {...cardGroupProps}
      {...componentIntroProps}
      columnSpan={props.columnSpan || defaultColumnSpan}
    >
      {(item: any) => (
        <Item key={item.itemHeading}>
          <StylizedButtonCard
            itemHeading={item.itemHeading}
            itemTo={item.itemTo}
          />
        </Item>
      )}
    </CardGroup>
  );
};
