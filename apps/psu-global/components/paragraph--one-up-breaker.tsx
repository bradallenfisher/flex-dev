import { DrupalMedia, DrupalParagraph } from "next-drupal"
import { OneUpBreakerBlueBackground, OneUpBreakerBlueBackgroundProps } from "@psu-flex/psu-global-ui"
import { absoluteUrl } from "lib/utils"
import { stripHtml } from "string-strip-html"

export interface ParagraphOneUpBreakerProps extends DrupalParagraph {
  field_title: string
  body: {
    value: string
  }
  field_media: DrupalMedia
  field_link: {
    title: string
    uri: string
  }
}

export function ParagraphOneUpBreaker(paragraph: ParagraphOneUpBreakerProps) {
  const props: OneUpBreakerBlueBackgroundProps = {
    title: paragraph.field_title,
    description: stripHtml(paragraph.body.value).result,
    link: {
      text: paragraph.field_link.title,
      url: paragraph.field_link.uri,
    },
    image: absoluteUrl(paragraph?.field_media?.field_image?.uri?.url),
  }
  return (
    <OneUpBreakerBlueBackground {...props} />
  )
}
