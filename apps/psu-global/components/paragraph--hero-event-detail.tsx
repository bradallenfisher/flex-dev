import { DrupalMedia, DrupalParagraph } from 'next-drupal';
import { HeroEventDetail } from '@psu-flex/psu-global-ui';
import { absoluteUrl } from 'lib/utils';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

export interface ParagraphHeroEventDetailProps extends DrupalParagraph {
  field_title?: string;
  field_media: DrupalMedia;
  field_link?: {
    uri: string;
    title: string;
  };
  eventDate?: string;
  eventLocation?: string;
}
const setImgSrc = (uri: string = ''): string | undefined =>
  uri ? absoluteUrl(uri) : undefined;

export function ParagraphHeroEventDetail(
  paragraph: ParagraphHeroEventDetailProps
) {
  let formattedDate, formattedTime;
  if (paragraph?.eventDate) {
    formattedDate = dayjs.utc(paragraph.eventDate).format('MMMM D, YYYY');
    formattedTime = dayjs.utc(paragraph.eventDate).format('h:mm A');
  }
  const heroProps = {
    title: paragraph?.field_title ?? '',
    badges: [],
    externalLink: paragraph.field_link
      ? {
          label: paragraph.field_link.title,
          url: paragraph.field_link.uri,
        }
      : undefined,
    eventDate: formattedDate,
    eventTime: formattedTime,
    image: setImgSrc(paragraph?.field_media?.field_image?.uri?.url),
    eventLocation: paragraph?.eventLocation,
  };
  return <HeroEventDetail {...heroProps} />;
}
