import { MinimalistHero as MinimalistHeroImage, MinimalistHeroVideo } from "@psu-flex/psu-global-ui";
import { absoluteUrl } from "lib/utils";
import { DrupalMedia, DrupalParagraph } from "next-drupal"
import React from "react";

export interface ParagraphHeroMinimalistProps extends DrupalParagraph {
  field_title: string
  field_media: DrupalMedia
  field_link?: {
    uri: string
    title: string
  }
}

type PropsOf<T> = T extends React.ComponentType<infer Props> ? Props : never
const setImgSrc = (uri: string = ''): string | undefined =>
  uri ? absoluteUrl(uri) : undefined;

export function ParagraphHeroMinimalist(paragraph: ParagraphHeroMinimalistProps) {
  const { field_media: media } = paragraph;
  const MinimalistHero = media.type === 'media--image' ? MinimalistHeroImage : MinimalistHeroVideo;
  const heroProps: PropsOf<typeof MinimalistHero> = {
    heading: paragraph.field_title,
    ctaText: paragraph?.field_link?.title ?? undefined,
    ctaTo: paragraph?.field_link?.uri ?? undefined,
    image: media.type === 'media--image' && setImgSrc(media.field_image.uri.url),
    video: media.type === 'media--video' && media.field_source,
  };

  return (
    <MinimalistHero {...heroProps} />
  );
}
