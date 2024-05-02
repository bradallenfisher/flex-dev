import { useEffect, useState } from 'react';
import { DrupalParagraph } from "next-drupal"
import { NewsCardGroup, NewsCardsItemInterface } from "@psu-flex/psu-global-ui"
import { absoluteUrl } from 'lib/utils';
import { stripHtml } from 'string-strip-html';

export interface ParagraphArticleListingProps extends DrupalParagraph {
  field_title: string
  field_tags: Array<{ resourceIdObjMeta: { drupal_internal__target_id: number }}>
}

type RelatedArticle = {
  title: string;
  path: { alias: string; };
  changed: string;
  field_hero_component: DrupalParagraph;
  field_components: Array<{ body: { value: string; } }>
}

const mapResponseToNewsCard = (item: RelatedArticle): NewsCardsItemInterface => {
  const thumbnail = item?.field_hero_component?.field_media?.field_image?.uri?.url
    ? absoluteUrl(item.field_hero_component.field_media.field_image.uri.url)
    : '/images/fallback.jpg';
  const body = item.field_components.reduce((a, b) => a + b.body.value, '');
  return {
    itemHeading: item.title,
    itemBody: stripHtml(body).result,
    itemImage: thumbnail,
    imageWidth: 316,
    imageHeight: 177,
    itemTo: item.path.alias,
    itemDateTitle: 'Date Posted:',
    itemDatePosted: new Date(item.changed),
  };
};

export function ParagraphArticleListing({ field_title, field_tags }: ParagraphArticleListingProps) {
  const [items, setItems] = useState<NewsCardsItemInterface[]>([]);

  useEffect(() => {
    const tids = field_tags
      .map(({ resourceIdObjMeta }) => resourceIdObjMeta.drupal_internal__target_id)
      .sort();
    fetch(`/api/related-articles/${tids.join('/')}`)
      .then(response => response.json())
      .then(({ results }) => Promise.resolve(results.map(mapResponseToNewsCard)))
      .then(setItems)
      .catch(console.error);
  }, [field_tags]);

  return (
    <NewsCardGroup
      columnSpan={1}
      initialCardCount={12}
      cards={items}
      groupHeading={field_title}
    />
  )
}
