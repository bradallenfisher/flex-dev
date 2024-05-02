import { DrupalParagraph } from "next-drupal"
import { HeroTextOnly } from "@psu-flex/psu-global-ui"
import { stripHtml } from "string-strip-html"

export interface ParagraphHeroTextOnlyProps extends DrupalParagraph {
  field_title: string
  body?: {
    value: string
  }
}

export function ParagraphHeroTextOnly(paragraph: ParagraphHeroTextOnlyProps) {
  const heroProps = {
    itemHeading: paragraph.field_title,
    itemBody: stripHtml(paragraph?.body?.value ?? '').result,
  }
  return <HeroTextOnly {...heroProps}/>
}
