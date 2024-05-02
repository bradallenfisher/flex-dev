import { DrupalParagraph } from 'next-drupal';
import { QuickNavCardGroup } from '@psu-flex/psu-global-ui';
import { getLink } from 'lib/utils';

export interface ParagraphQuickNavCardProps extends DrupalParagraph {
  field_title: string;
  field_link: {
    uri: string;
  };
  body: {
    value: string;
  };
}

export interface ParagraphQuickNavCardsProps extends DrupalParagraph {
  field_components: ParagraphQuickNavCardProps[];
}

export function ParagraphQuickNavCards(paragraph: ParagraphQuickNavCardsProps) {
  const items = paragraph.field_components.map((item) => ({
    heading: item.field_title,
    body: item.body.value,
    to: getLink(item.field_link),
  }));
  return <QuickNavCardGroup cards={items} />;
}
