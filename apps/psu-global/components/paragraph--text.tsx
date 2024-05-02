import { Heading, RichTextContent, Wrapper } from '@psu-flex/psu-global-ui';
import { DrupalParagraph } from 'next-drupal';

export interface ParagraphTextProps extends DrupalParagraph {
  field_title?: string;
  body?: {
    value: string;
  };
  titleExtraSx?: object;
  wrapperExtraSx?: object;
}

export function ParagraphText(paragraph: ParagraphTextProps) {
  const title = paragraph?.field_title;
  const richText = paragraph?.body?.value;
  const titleExtraSx = paragraph?.titleExtraSx;
  const wrapperExtraSx = paragraph?.wrapperExtraSx || {};

  return !(title || richText) ? null : (
    <Wrapper extraSx={{ ...wrapperExtraSx }}>
      {title && (
        <Heading variant={32} extraSx={{ ...titleExtraSx }}>
          {title}
        </Heading>
      )}
      {richText && <RichTextContent richTextRaw={richText} />}
    </Wrapper>
  );
}
