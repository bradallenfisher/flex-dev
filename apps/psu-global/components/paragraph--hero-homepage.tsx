import { DrupalMedia, DrupalParagraph } from "next-drupal"
import { HeroHomepage } from "@psu-flex/psu-global-ui"
import { absoluteUrl } from "lib/utils"
import { stripHtml } from "string-strip-html"

export interface ParagraphHeroHomepageProps extends DrupalParagraph {
  field_title: string
  field_media: DrupalMedia
  body?: {
    value: string
  }
}

export function ParagraphHeroHomepage(node: ParagraphHeroHomepageProps) {
  const heroProps = {
    title: node.field_title,
    image: node?.field_media?.field_image?.uri?.url,
    subText: stripHtml(node?.body?.value ?? '').result,
  }
  if (heroProps.image) {
    heroProps.image = absoluteUrl(heroProps.image);
  }
  return <HeroHomepage {...heroProps} />
}
