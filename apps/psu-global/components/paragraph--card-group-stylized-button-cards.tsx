import { DrupalParagraph } from 'next-drupal';
import { StylizedButtonCards } from '@psu-flex/psu-global-ui';
import { getLink } from 'lib/utils';

export interface ParagraphCardGroupStylizedButtonCardsProps
  extends DrupalParagraph {
  field_title?: string;
  field_stylized_button_links: {
    uri: string;
    title: string;
  }[];
}

export function ParagraphCardGroupStylizedButtonCards(
  paragraph: ParagraphCardGroupStylizedButtonCardsProps
) {
  const items = paragraph.field_stylized_button_links.map((item) => ({
    itemHeading: item.title,
    itemTo: getLink(item),
  }));

  return (
    <StylizedButtonCards introHeading={paragraph?.field_title} cards={items} />
  );
}
