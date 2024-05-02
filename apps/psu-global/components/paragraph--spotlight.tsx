import { DrupalMedia, DrupalParagraph } from "next-drupal"
import { StudentSpotlight, StudentSpotlightProps } from "@psu-flex/psu-global-ui"
import { absoluteUrl } from "lib/utils"

export interface ParagraphSpotlightItemProps extends DrupalParagraph {
  field_title: string
  field_media: DrupalMedia
  body?: {
    value: string
  }
}

export interface ParagraphSpotlightProps extends DrupalParagraph {
  field_eyebrow?: string
  field_title: string
  field_media: DrupalMedia
  body?: {
    value: string
  }
  field_components: ParagraphSpotlightItemProps[]
  field_cta_title: string
  field_link?: {
    uri: string
    title: string
  }
}

const setImgSrc = (uri: string = ''): string | undefined =>
  uri ? absoluteUrl(uri) : undefined;

export function ParagraphSpotlight(paragraph: ParagraphSpotlightProps) {
  const spotlightProps: StudentSpotlightProps = {
    title: paragraph.field_title,
    description: paragraph.body?.value,
    buttonText: paragraph.field_cta_title,
    subHeading: paragraph.field_eyebrow,
    bottomUrl: {
      text: paragraph.field_link?.title,
      url: paragraph.field_link?.uri,
    },
    image: setImgSrc(paragraph?.field_media?.field_image?.uri?.url),
    carouselImages: paragraph.field_components.map((item) => ({
      src: setImgSrc(item?.field_media?.field_image?.uri?.url) || '',
      title: item.field_title,
      description: item.body?.value ?? '',
    })).filter(({ src }) => src),
  }

  return (
    <StudentSpotlight {...spotlightProps} />
  )
}
