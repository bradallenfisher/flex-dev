/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { Item } from "react-stately";
import { useComponentIntro } from "@psu-flex/core-ui";
import { ThreeUpTextOnImageCard } from "../../cards/ThreeUpTextOnImageCard/ThreeUpTextOnImageCard";
import { ThreeUpTextOnImageCardProps } from "../../cards/ThreeUpTextOnImageCard/ThreeUpTextOnImageCardTypes";
import { ParentCardGroupProps } from "@psu-flex/psu-global-ui";
import { CardGroup } from "../../../../../../psu-global-ui/src/components/CardGroup/CardGroup";
import { useCardGroup } from "../../../../../../psu-global-ui/src/components/CardGroup/useCardGroup";

export function ThreeUpTextOnImageCards({
  ...props
}: ParentCardGroupProps<ThreeUpTextOnImageCardProps>) {
  //grab any intro props that are passed in
  let componentIntroProps = useComponentIntro(props);
  const cardGroupProps = useCardGroup(props);
  const hasItemRichText = props.cards.some(
    (item) => item.itemRichText !== undefined && item.itemRichText !== null
  );
  return (
    <CardGroup
      {...cardGroupProps}
      {...componentIntroProps}
      gapSize={hasItemRichText ? "md" : "sm"}
    >
      {(item: any) => (
        <Item key={item.heading}>
          <ThreeUpTextOnImageCard
            itemHeading={item.itemHeading}
            to={item.to}
            itemImage={item.itemImage}
            imageWidth={item.imageWidth}
            imageHeight={item.imageHeight}
            itemRichText={item.itemRichText}
          />
        </Item>
      )}
    </CardGroup>
  );
}
