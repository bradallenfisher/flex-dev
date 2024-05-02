import { BackgroundColorVariants, ImageCardsCardGroup } from "@psu-flex/psu-global-ui"
import { absoluteUrl, getLink } from "lib/utils"
import { DrupalMedia, DrupalParagraph } from "next-drupal"

export interface ParagraphCardGroupImageCardProps extends DrupalParagraph {
  field_title: string
  field_link: {
    uri: string
  }
  body: {
    value: string
  }
  field_media: DrupalMedia
}

export interface ParagraphCardGroupImageCardsProps extends DrupalParagraph {
  field_card_group_color: BackgroundColorVariants
  field_components: ParagraphCardGroupImageCardProps[]
}

export function ParagraphCardGroupImageCards(paragraph: ParagraphCardGroupImageCardsProps) {
  const iconCardsData = paragraph.field_components.map((item) => ({
    itemHeading: item.field_title,
    itemBody: item.body.value,
    itemImage: item?.field_media?.field_image?.uri?.url && absoluteUrl(item.field_media.field_image.uri.url),
    imageWidth: 600,
    imageHeight: 200,
    itemTo: getLink(item.field_link),
  }));

  return <ImageCardsCardGroup
    cards={iconCardsData}
    backgroundColor={paragraph.field_card_group_color}
  />
}
