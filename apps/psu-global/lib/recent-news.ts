import { NewsCardsItem } from '@psu-flex/psu-global-ui';
import { parse } from 'rss-to-json';
import { stripHtml } from 'string-strip-html';

type PropsOf<T> = T extends React.ComponentType<infer Props> ? Props : never
export type FeedArticle = PropsOf<typeof NewsCardsItem>;
type ParsedItem = {
  id: string;
  title: string;
  published: number;
  link: string;
  description: string;
  enclosures: Array<{
    url: string;
    length: number;
    type: string;
  }>
}
const RSS_FEEDS = (process.env?.RSS_FEED_URL ?? '').split(/[\s,]+/).filter(String);
export async function getNewsArticles(): Promise<FeedArticle[]> {
  const articleMap = new Map<string, number>();
  const articles: FeedArticle[] = [];
  for (const feedUrl of RSS_FEEDS) {
    const { items } = await parse(feedUrl);
    if (!items) {
      console.error(`No RSS items found for ${feedUrl}`);
      continue;
    }
    items.forEach((item: ParsedItem) => {
      if (!articleMap.has(item.id)) {
        articleMap.set(item.id, 1);
        articles.push({
          itemHeading: item.title,
          itemBody: stripHtml(item.description).result,
          itemImage: item.enclosures?.[0]?.url ?? '/images/fallback.jpg',
          imageWidth: 316,
          imageHeight: 177,
          itemTo: item.link,
          itemDateTitle: "Date Posted:",
          itemDatePosted: item.published.toString(),
        });
      }
    });
  }
  return articles.sort((a, b) =>
    Number(b.itemDatePosted) - Number(a.itemDatePosted)
  );
}