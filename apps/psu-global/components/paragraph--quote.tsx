import { DrupalParagraph } from "next-drupal"
import { Flex, Quote, QuoteProps } from "@psu-flex/psu-global-ui"

export interface ParagraphQuoteProps extends DrupalParagraph {
  body: {
    value: string
  }
  field_author: string
  field_author_title?: boolean
}

export function ParagraphQuote(paragraph: ParagraphQuoteProps) {
  const props: QuoteProps = {
    body: paragraph.body.value,
    author: [
      paragraph?.field_author,
      paragraph?.field_author_title
    ].filter(Boolean).join(', '),
  }
  return (
    <Flex extraSx={{ backgroundColor: 'nittanyNavy' }}>
      <Quote {...props} />
    </Flex>
  )
}
