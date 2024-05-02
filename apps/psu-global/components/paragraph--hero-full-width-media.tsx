import React from "react";
import { HeroFullWidthImage, HeroFullWidthVideo } from "@psu-flex/psu-global-ui";
import { setImgSrc } from "lib/utils";
import { DrupalMedia, DrupalParagraph } from "next-drupal"
import { stripHtml } from "string-strip-html";

export interface ParagraphHeroFullWidthMediaProps extends DrupalParagraph {
  field_title: string
  body?: { value: string }
  field_cta_title?: string
  field_cta_subtitle?: string
  field_media: DrupalMedia
}

export function ParagraphHeroFullWidthMedia(paragraph: ParagraphHeroFullWidthMediaProps) {
  const { field_media: media } = paragraph;
  if (media.type === 'media--image') {
    return <HeroFullWidthImage
      title={paragraph.field_title}
      image={setImgSrc(media.field_image.uri.url)}
      body={stripHtml(paragraph?.body?.value ?? '').result}
      ctaTitle={paragraph.field_cta_title}
      ctaBody={paragraph.field_cta_subtitle}
    />
  }
  if (media.type === 'media--video') {
    return <HeroFullWidthVideo
      title={paragraph.field_title}
      video={media.field_source as string}
      videoCaption={stripHtml(paragraph?.body?.value ?? '').result}
      ctaTitle={paragraph.field_cta_title}
      ctaSubCopy={paragraph.field_cta_subtitle}
    />
  }
  return null
}
