/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { HeroEventListing, HeroEventListingProps } from "@psu-flex/psu-global-ui";
import { getCanonical, setImgSrc } from "lib/utils";
import { DrupalMedia, DrupalParagraph } from "next-drupal"
import dayjs from 'dayjs';
import { stripHtml } from 'string-strip-html';

export interface ParagraphHeroEventListingProps extends DrupalParagraph {
  body: { value: string; };
  field_media: DrupalMedia;
  field_event: {
    title: string;
    field_summary: string;
    field_dates: { value: string; }
    path?: { alias: string; }
    field_event_location: string
    field_hero_component?: DrupalParagraph
  }
}

export function ParagraphHeroEventListing(paragraph: ParagraphHeroEventListingProps) {
  const { field_event } = paragraph ?? {};

  let formattedDate = '';
  if (field_event?.field_dates?.value) {
    formattedDate = dayjs(field_event.field_dates.value).format('MMMM D, dddd');
  }

  const link = field_event?.path?.alias ?? getCanonical(field_event) ?? undefined;
  let content = paragraph?.body?.value ?? null
  if (content) {
    content = stripHtml(content).result;
  }
  content ??= field_event?.field_summary;

  const heroProps: HeroEventListingProps = {
    title: field_event?.title,
    image: setImgSrc(
      paragraph?.field_media?.field_image?.uri?.url
      ?? field_event?.field_hero_component?.field_media?.field_image?.uri?.url
    ),
    content,
    eventDate: formattedDate,
    eventLocation: field_event?.field_event_location,
    link: {
      text: 'Read more about this event',
      url: link || '',
    }
  }

  return (
    <HeroEventListing {...heroProps} />
  );
}
