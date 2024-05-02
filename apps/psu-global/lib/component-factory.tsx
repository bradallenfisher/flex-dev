import {
  ParagraphStatsList,
  ParagraphStatsListProps,
} from '@components/paragraph--stats-list';
import {
  ParagraphUpcomingEvents,
  ParagraphUpcomingEventsProps,
} from '@components/paragraph--upcoming-events';
import { LandingPage, LandingPageProps } from '@components/node--landing-page';
import { NullComponent } from '@components/null-component';
import {
  ParagraphAccordion,
  ParagraphAccordionProps,
} from '@components/paragraph--accordion';
import {
  ParagraphCardGroupStylizedButtonCards,
  ParagraphCardGroupStylizedButtonCardsProps,
} from '@components/paragraph--card-group-stylized-button-cards';
import {
  ParagraphHeroFifty,
  ParagraphHeroFiftyProps,
} from '@components/paragraph--hero-fifty';
import {
  ParagraphHeroHomepage,
  ParagraphHeroHomepageProps,
} from '@components/paragraph--hero-homepage';
import { JsonApiResource } from 'next-drupal';
import {
  ParagraphCardGroupIconCards,
  ParagraphCardGroupIconCardsProps,
} from '@components/paragraph--card-group-icon-cards';
import {
  ParagraphOneUpBreaker,
  ParagraphOneUpBreakerProps,
} from '@components/paragraph--one-up-breaker';
import {
  ParagraphFullWidthBreaker,
  ParagraphFullWidthBreakerProps,
} from '@components/paragraph--full-width-breaker';
import {
  ParagraphHeroTextOnly,
  ParagraphHeroTextOnlyProps,
} from '@components/paragraph--hero-text-only';
import {
  ParagraphQuickNavCards,
  ParagraphQuickNavCardsProps,
} from '@components/paragraph--quick-nav-cards';
import {
  ParagraphQuote,
  ParagraphQuoteProps,
} from '@components/paragraph--quote';
import dynamic from 'next/dynamic';
import { ParagraphTableProps } from '@components/paragraph--table';
import {
  ParagraphSocialMediaIcons,
  ParagraphSocialMediaIconsProps,
} from '@components/paragraph--social-media-icons';
import {
  ParagraphCardGroupImageCards,
  ParagraphCardGroupImageCardsProps,
} from '@components/paragraph--card-group-image-cards';
import {
  ParagraphHeroMinimalist,
  ParagraphHeroMinimalistProps,
} from '@components/paragraph--hero-minimalist';
import {
  ParagraphSpotlight,
  ParagraphSpotlightProps,
} from '@components/paragraph--spotlight';
import {
  NewsListingPage,
  NewsListingPageProps,
} from '@components/node--news-listing';
import { ParagraphRecentNewsProps } from '@components/paragraph--recent-news';
import { ParagraphText, ParagraphTextProps } from '@components/paragraph--text';
import {
  ParagraphGroupLinks,
  ParagraphGroupLinksProps,
} from '@components/paragraph--group-links';
import {
  ParagraphHeroArticle,
  ParagraphHeroArticleProps,
} from '@components/paragraph--hero-article';
import { Article, ArticleProps } from '@components/node--article';
import { EventPage, EventPageProps } from '@components/node--event';
import { ParagraphHeroEventDetailProps } from '@components/paragraph--hero-event-detail';
import {
  CareerListingPage,
  CareerListingPageProps,
} from '@components/node--career_listing';
import {
  ProcessLanding,
  ProcessLandingPageProps,
} from '@components/node--process_landing';
import {
  ParagraphHeroEventListing,
  ParagraphHeroEventListingProps,
} from '@components/paragraph--hero-event-listing';
import {
  EventListingPage,
  EventListingPageProps,
} from '@components/node--event-listing';
import {
  ParagraphArticleListing,
  ParagraphArticleListingProps,
} from '@components/paragraph--article-listing';
import {
  SpotlightListingPage,
  SpotlightListingPageProps,
} from '@components/node--spotlight-listing';
import {
  PersonListingPage,
  PersonListingPageProps,
} from '@components/node--person-listing';
import {
  ParagraphHeroFullWidthMedia,
  ParagraphHeroFullWidthMediaProps,
} from '@components/paragraph--hero-full-width-media';
import {
  ParagraphLinkFarm,
  ParagraphLinkFarmsProps,
} from '@components/paragraph--link-farm';
import { ParagraphForm, ParagraphFormProps } from '@components/paragraph--form';
import { DetailPage, DetailPageProps } from '@components/node--detail-page';

const getComponent = (props: JsonApiResource): React.JSX.Element => {
  const { type } = props;
  switch (type) {
    case 'node--homepage':
    case 'node--informational_landing':
    case 'node--storytelling_landing':
      return <LandingPage {...(props as LandingPageProps)} />;

    case 'node--detail_page':
      return <DetailPage {...(props as DetailPageProps)} />;

    case 'node--news_listing':
      return <NewsListingPage {...(props as NewsListingPageProps)} />;

    case 'node--spotlight_listing':
      return <SpotlightListingPage {...(props as SpotlightListingPageProps)} />;

    case 'node--person_listing':
      return <PersonListingPage {...(props as PersonListingPageProps)} />;

    case 'node--event':
      return <EventPage {...(props as EventPageProps)} />;

    case 'node--career_listing':
      return <CareerListingPage {...(props as CareerListingPageProps)} />;

    case 'node--event_listing':
      return <EventListingPage {...(props as EventListingPageProps)} />;

    case 'node--article':
      return <Article {...(props as ArticleProps)} />;

    case 'node--process_landing':
      return <ProcessLanding {...(props as ProcessLandingPageProps)} />;

    case 'paragraph--hero_homepage':
      return (
        <ParagraphHeroHomepage {...(props as ParagraphHeroHomepageProps)} />
      );

    case 'paragraph--form':
      return <ParagraphForm {...(props as ParagraphFormProps)} />

    case 'paragraph--hero_50_50_image':
      return <ParagraphHeroFifty {...(props as ParagraphHeroFiftyProps)} />;

    case 'paragraph--accordion':
      return <ParagraphAccordion {...(props as ParagraphAccordionProps)} />;

    case 'paragraph--stats':
      return <ParagraphStatsList {...(props as ParagraphStatsListProps)} />;

    case 'paragraph--upcoming_events':
      return (
        <ParagraphUpcomingEvents {...(props as ParagraphUpcomingEventsProps)} />
      );

    case 'paragraph--card_group_button_cards':
      return (
        <ParagraphCardGroupStylizedButtonCards
          {...(props as ParagraphCardGroupStylizedButtonCardsProps)}
        />
      );

    case 'paragraph--card_group_icon_cards':
      return (
        <ParagraphCardGroupIconCards
          {...(props as ParagraphCardGroupIconCardsProps)}
        />
      );

    case 'paragraph--1_up_breaker':
      return (
        <ParagraphOneUpBreaker {...(props as ParagraphOneUpBreakerProps)} />
      );

    case 'paragraph--full_width_breaker':
      return (
        <ParagraphFullWidthBreaker
          {...(props as ParagraphFullWidthBreakerProps)}
        />
      );

    case 'paragraph--hero_text_only':
      return (
        <ParagraphHeroTextOnly {...(props as ParagraphHeroTextOnlyProps)} />
      );

    case 'paragraph--card_group_quick_nav_cards':
      return (
        <ParagraphQuickNavCards {...(props as ParagraphQuickNavCardsProps)} />
      );

    case 'paragraph--quote':
      return <ParagraphQuote {...(props as ParagraphQuoteProps)} />;

    case 'paragraph--table':
      const ParagraphTable = dynamic(
        () =>
          import('@components/paragraph--table').then(
            ({ ParagraphTable }) => ParagraphTable
          ),
        { ssr: false }
      );
      return <ParagraphTable {...(props as ParagraphTableProps)} />;

    case 'paragraph--social_media_icons':
      return (
        <ParagraphSocialMediaIcons
          {...(props as ParagraphSocialMediaIconsProps)}
        />
      );

    case 'paragraph--card_group_image_cards':
      return (
        <ParagraphCardGroupImageCards
          {...(props as ParagraphCardGroupImageCardsProps)}
        />
      );

    case 'paragraph--hero_minimalist':
      return (
        <ParagraphHeroMinimalist {...(props as ParagraphHeroMinimalistProps)} />
      );

    case 'paragraph--spotlight':
      return <ParagraphSpotlight {...(props as ParagraphSpotlightProps)} />;

    case 'paragraph--recent_news':
      const ParagraphRecentNews = dynamic(
        () =>
          import('@components/paragraph--recent-news').then(
            ({ ParagraphRecentNews }) => ParagraphRecentNews
          ),
        { ssr: false }
      );
      return <ParagraphRecentNews {...(props as ParagraphRecentNewsProps)} />;

    case 'paragraph--text':
      return <ParagraphText {...(props as ParagraphTextProps)} />;

    case 'paragraph--group_links':
      return <ParagraphGroupLinks {...(props as ParagraphGroupLinksProps)} />;

    case 'paragraph--hero_article':
      return <ParagraphHeroArticle {...(props as ParagraphHeroArticleProps)} />;

    case 'paragraph--hero_event_detail':
      const ParagraphHeroEventDetail = dynamic(
        () =>
          import('@components/paragraph--hero-event-detail').then(
            ({ ParagraphHeroEventDetail }) => ParagraphHeroEventDetail
          ),
        { ssr: false }
      );
      return (
        <ParagraphHeroEventDetail
          {...(props as ParagraphHeroEventDetailProps)}
        />
      );

    case 'paragraph--hero_event_listing':
      return (
        <ParagraphHeroEventListing
          {...(props as ParagraphHeroEventListingProps)}
        />
      );

    case 'paragraph--article_listing':
      return (
        <ParagraphArticleListing {...(props as ParagraphArticleListingProps)} />
      );

    case 'paragraph--hero_full_width_media':
      return (
        <ParagraphHeroFullWidthMedia
          {...(props as ParagraphHeroFullWidthMediaProps)}
        />
      );

    case 'paragraph--link_farm':
      return <ParagraphLinkFarm {...(props as ParagraphLinkFarmsProps)} />;
  }
  return <NullComponent {...props} />;
};

export { getComponent };
