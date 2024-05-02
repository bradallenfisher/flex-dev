import * as React from 'react';
import { Item } from 'react-stately';
import { CardGroup } from '../CardGroup/CardGroup';
import {
  ImageCard,
  ImageCardProps,
  useComponentIntro,
} from '@psu-flex/core-ui';
import { useCardGroup } from './useCardGroup';
import { ParentCardGroupProps } from './CardGroupTypes';

export const ImageCardsCardGroup = ({
  ...props
}: ParentCardGroupProps<ImageCardProps>) => {
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);
  //grab any card group props that are passed in
  let cardGroupProps = useCardGroup(props);
  return (
    <CardGroup {...cardGroupProps} {...componentIntroProps}>
      {(item: any) => (
        <Item key={item.key}>
          <ImageCard
            itemHeading={item.itemHeading}
            itemBody={item.itemBody}
            itemImage={item.itemImage}
            imageWidth={item.imageWidth}
            imageHeight={item.imageHeight}
            itemTo={item.itemTo}
          />
        </Item>
      )}
    </CardGroup>
  );
};
