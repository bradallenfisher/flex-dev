import { GroupedLinks } from "@psu-flex/psu-global-ui"
import { absoluteUrl, getLink } from "lib/utils"
import { DrupalMedia, DrupalParagraph } from "next-drupal"

export interface ParagraphGroupLinkProps extends DrupalParagraph {
  field_title: string
  field_link?: {
    uri: string
    title: string
  }
  body: {
    value: string
  }
  field_media: DrupalMedia
}

export interface ParagraphGroupLinksProps extends DrupalParagraph {
  field_components: ParagraphGroupLinkProps[]
}

export function ParagraphGroupLinks({ field_components }: ParagraphGroupLinksProps) {
  const cards = field_components.map(({ id, field_title, body, field_media, field_link }) => ({
    title: field_title,
    description: body.value,
    link: field_link?.uri && field_link?.title ? {
      text: field_link.title,
      url: getLink(field_link) || '',
    } : undefined,
    image: absoluteUrl(field_media.field_image.uri.url),
    id: id,
  }))
  return (
    <GroupedLinks cards={cards} />
  )
}
