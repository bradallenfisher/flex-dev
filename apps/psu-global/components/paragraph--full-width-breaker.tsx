import { DrupalMedia, DrupalParagraph } from "next-drupal"
import { stripHtml } from 'string-strip-html'
import { FullWithBreakerPromoBanner, FullWidthBreakerPromoBannerWithVideo, FullWithBreakerPromoBannerProps } from "@psu-flex/psu-global-ui"
import { absoluteUrl, getLink } from "lib/utils"

export interface ParagraphFullWidthBreakerProps extends DrupalParagraph {
  field_title: string
  field_link: {
    uri: string
    title: string
  }
  field_media: DrupalMedia
  body: {
    value: string
  }
}

type PropsOf<T> = T extends React.ComponentType<infer Props> ? Props : never
const setImgSrc = (uri: string = ''): string | undefined =>
  uri ? absoluteUrl(uri) : undefined;

export function ParagraphFullWidthBreaker(paragraph: ParagraphFullWidthBreakerProps) {
  const { field_media: media } = paragraph;
  const PromoBreaker = media.type === 'media--image'
    ? FullWithBreakerPromoBanner
    : FullWidthBreakerPromoBannerWithVideo;
  const bannerProps:  PropsOf<typeof PromoBreaker> = {
    title: paragraph.field_title,
    content: stripHtml(paragraph?.body?.value ?? '').result,
    buttonLabel: paragraph?.field_link?.title,
    buttonUrl: getLink(paragraph?.field_link),
    image: media.type === 'media--image' && setImgSrc(media?.field_image?.uri?.url),
    video: media.type === 'media--video' && media.field_source,
  };
  return <PromoBreaker {...bannerProps} />
}
