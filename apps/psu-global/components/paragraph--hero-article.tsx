/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import { HeroArticle } from "@psu-flex/psu-global-ui";
import { absoluteUrl } from "lib/utils";
import { DrupalMedia, DrupalParagraph, DrupalTaxonomyTerm } from "next-drupal"

export interface ParagraphHeroArticleProps extends DrupalParagraph {
  field_title: string;
  field_subtitle: string;
  field_tags?: DrupalTaxonomyTerm[]
  field_media: DrupalMedia;
}

const setImgSrc = (uri: string = ''): string | undefined =>
  uri ? absoluteUrl(uri) : undefined;

export function ParagraphHeroArticle(paragraph: ParagraphHeroArticleProps) {
  const { field_title, field_subtitle, field_tags, field_media } = paragraph
  const tags = (field_tags ?? []).slice(0, 2);
  const [leftButton, rightButton] = tags.map(tag => tag.name)
  const heroProps = {
    title: field_title,
    subHeading: field_subtitle,
    leftButtonLabel: leftButton,
    rightButtonLabel: rightButton,
    image: setImgSrc(field_media?.field_image?.uri?.url),
  }

  return (
    <HeroArticle {...heroProps} />
  );
}
