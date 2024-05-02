/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Item } from 'react-stately';
import {
  QuickNavCard,
  QuickNavCardProps,
  useComponentIntro,
} from '@psu-flex/core-ui';
import { ParentCardGroupProps } from './CardGroupTypes';
import { CardGroup } from './CardGroup';
import { useCardGroup } from './useCardGroup';

export function QuickNavCardGroup({
  ...props
}: ParentCardGroupProps<QuickNavCardProps>) {
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);
  //grab any card group props that are passed in
  const cardGroupProps = useCardGroup(props);
  return (
    <CardGroup {...cardGroupProps} {...componentIntroProps}>
      {(item: any) => (
        <Item key={item.heading}>
          <QuickNavCard heading={item.heading} body={item.body} to={item.to} />
        </Item>
      )}
    </CardGroup>
  );
}
