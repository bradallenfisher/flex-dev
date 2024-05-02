import { IconCardsCardGroup } from '@psu-flex/psu-global-ui';
import { getLink } from 'lib/utils';
import { DrupalParagraph, DrupalTaxonomyTerm } from 'next-drupal';

export interface ParagraphCardGroupIconCardProps extends DrupalParagraph {
  field_title: string;
  field_link: {
    uri: string;
  };
  body: {
    value: string;
  };
  field_term: DrupalTaxonomyTerm;
}

export interface ParagraphCardGroupIconCardsProps extends DrupalParagraph {
  field_components: ParagraphCardGroupIconCardProps[];
}

export function ParagraphCardGroupIconCards(
  paragraph: ParagraphCardGroupIconCardsProps
) {
  const iconCardsData = paragraph.field_components.map((item) => ({
    itemHeading: item.field_title,
    itemBody: item.body.value,
    itemIcon: item.field_icon,
    itemTo: getLink(item.field_link),
  }));
  return <IconCardsCardGroup cards={iconCardsData} />;
}
