'use client'
import { DrupalNode, DrupalParagraph } from "next-drupal"
import { getComponent } from "lib/component-factory"
import { HeroFifty, NewsCardGroup } from "@psu-flex/psu-global-ui"
import { FeedArticle } from "lib/recent-news";

export interface NewsListingPageProps extends DrupalNode {
  title: string;
  recentNews: FeedArticle[];
  field_components: DrupalParagraph[];
}

export function NewsListingPage({ recentNews, field_components, title }: NewsListingPageProps) {
  const [headerData, ...newsCards] = recentNews ?? [];
  return (
    <>
      {headerData && <HeroFifty
        title={headerData.itemHeading}
        image={headerData.itemImage}
        description={headerData.itemBody}
        link={{ text: 'Read Article', url: headerData.itemTo }}
        subHeading={title}
      />}
      {newsCards.length !== 0 && <NewsCardGroup columnSpan={1} cards={newsCards} initialCardCount={12}/>}
      {Array.isArray(field_components) && field_components.map(getComponent)}
    </>
  )
}
