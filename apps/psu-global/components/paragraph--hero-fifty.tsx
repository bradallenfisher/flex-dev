import { DrupalMedia, DrupalParagraph } from 'next-drupal';
import { HeroFifty } from '@psu-flex/psu-global-ui';
import { absoluteUrl } from 'lib/utils';
import { stripHtml } from 'string-strip-html';

export interface ParagraphHeroFiftyProps extends DrupalParagraph {
  field_title: string;
  field_eyebrow?: string;
  field_link?: {
    uri: string;
    title: string;
  };
  field_media: DrupalMedia;
  body?: {
    value: string;
  };
}

export function ParagraphHeroFifty(paragraph: ParagraphHeroFiftyProps) {
  const heroProps = {
    title: paragraph.field_title,
    image: paragraph?.field_media?.field_image?.uri?.url,
    description: stripHtml(paragraph?.body?.value ?? '').result,
    subHeading: paragraph?.field_eyebrow,
    link: paragraph?.field_link?.title
      ? {
          text: paragraph.field_link.title,
          url: paragraph?.field_link?.uri ?? '#',
        }
      : undefined,
  };
  if (heroProps.image) {
    heroProps.image = absoluteUrl(heroProps.image);
  }
  return <HeroFifty {...heroProps} />;
}
