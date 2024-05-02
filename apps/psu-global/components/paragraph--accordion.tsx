import { DrupalParagraph } from 'next-drupal';
import { Accordion } from '@psu-flex/psu-global-ui';
import { stripHtml } from 'string-strip-html';

export interface ParagraphAccordionProps extends DrupalParagraph {
  field_accordion_item: DrupalParagraph[];
  field_title?: string;
  body?: {
    value: string;
  };
}

export function ParagraphAccordion(paragraph: ParagraphAccordionProps) {
  const accordionItems = paragraph.field_accordion_item.map((item) => ({
    question: item?.field_title,
    answer: item?.body?.value ?? '',
  }));
  return (
    <Accordion
      data={accordionItems}
      heading={paragraph?.field_title ?? ''}
      body={stripHtml(paragraph?.body?.value ?? '').result}
    />
  );
}
