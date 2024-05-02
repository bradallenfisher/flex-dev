import {
  GetStaticPathsContext,
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import Head from 'next/head';
import { DrupalMenuLinkContent, DrupalNode } from 'next-drupal';
import { drupal } from 'lib/drupal';
import { Layout } from 'components/layout';
import { getComponent } from 'lib/component-factory';
import { getNewsArticles } from 'lib/recent-news';
import {
  getContentfulBrandBarApi,
  getContentfulBrandFooterApi,
} from '@psu-flex/apis';
import {
  BrandBarLinkCollection,
  BrandFooterLinkCollection,
} from '@psu-flex/psu-global-ui';
import dayjs from 'dayjs';
import { getMenuByName } from 'lib/utils';

const RESOURCE_TYPES = [
  'node--informational_landing',
  'node--storytelling_landing',
  'node--event',
];

interface NodePageProps {
  resource: DrupalNode;
  menus: Record<string, DrupalMenuLinkContent[]>;
  brandBar: Record<string, BrandBarLinkCollection>;
  brandFooter: BrandFooterLinkCollection;
}

export default function NodePage({
  resource,
  menus,
  brandBar,
  brandFooter,
}: NodePageProps) {
  if (!resource) return null;

  return (
    <Layout menus={menus} brandBar={brandBar} brandFooter={brandFooter}>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {getComponent(resource)}
    </Layout>
  );
}

export async function getStaticPaths(
  context: GetStaticPathsContext
): Promise<GetStaticPathsResult> {
  return {
    paths: await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context),
    fallback: 'blocking',
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<NodePageProps>> {
  const slugParams = context?.params?.slug ?? '';
  const slug = Array.isArray(slugParams) ? slugParams.join('/') : slugParams;
  const getParamsByType = (
    type: string | undefined,
    context: GetStaticPropsContext
  ): Record<string, any> => {
    let params: Record<string, any> = {};
    switch (type) {
      case 'node--homepage':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_hero_component,field_components`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_minimalist]': `field_link,field_media`,
          'fields[paragraph--hero_text_only]': `body`,
          'fields[paragraph--hero_50_50_image]': `body,field_eyebrow,field_link,field_media`,
          'fields[paragraph--hero_homepage]': `field_media,body`,
          'fields[paragraph--hero_full_width_media]': `field_cta_title,field_cta_subtitle,field_media,body`,
          'fields[paragraph--accordion]': `field_title,field_accordion_item,body`,
          'fields[paragraph--accordion_item]': `field_title,body`,
          'fields[paragraph--card_group_button_cards]': `field_title,field_stylized_button_links`,
          'fields[paragraph--recent_news]': `field_title`,
          'fields[paragraph--stats]': `field_components,body,field_title,field_link`,
          'fields[paragraph--stats_item]': `field_title,field_text`,
          'fields[paragraph--upcoming_events]': `field_title,field_event_type`,
          'fields[paragraph--card_group_icon_cards]': `field_components`,
          'fields[paragraph--icon_card]': `field_title,field_link,body,field_icon`,
          'fields[paragraph--1_up_breaker]': `body,field_link,field_title,field_media`,
          'fields[paragraph--full_width_breaker]': `field_title,field_link,body,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--social_media_icons]': `field_social_media_icons`,
          'fields[taxonomy_term--social_media]': `field_social_media_platform,field_url`,
          'fields[paragraph--card_group_image_cards]': `field_card_group_color,field_components`,
          'fields[paragraph--image_card]': `body,field_link,field_title,field_media`,
          'fields[paragraph--spotlight]': `body,field_cta_title,field_link,field_eyebrow,field_title,field_components,field_media`,
          'fields[paragraph--spotlight_item]': `body,field_title,field_media`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--group_links]': `field_components`,
          'fields[paragraph--group_link]': `field_title,field_link,body,field_media`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[paragraph--link_farm]':
            'field_link_farm_items,field_media,field_link_farm_color',
          include: [
            `field_components`,
            `field_components.field_accordion_item`,
            `field_components.field_components`,
            `field_components.field_components.field_media.field_image`,
            `field_components.field_media.field_image`,
            `field_components.field_social_media_icons`,
            `field_hero_component`,
            `field_hero_component.field_media.field_image`,
            `field_components.field_link_farm_items`,
            `field_components.field_link_farm_items.field_media.field_image`,
          ].join(','),
        };
        break;

      case 'node--informational_landing':
      case 'node--storytelling_landing':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_hero_component,field_components`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_minimalist]': `field_link,field_media`,
          'fields[paragraph--hero_text_only]': `body`,
          'fields[paragraph--hero_50_50_image]': `body,field_eyebrow,field_link,field_media`,
          'fields[paragraph--hero_homepage]': `field_media,body`,
          'fields[paragraph--hero_full_width_media]': `field_cta_title,field_cta_subtitle,field_media,body`,
          'fields[paragraph--accordion]': `field_title,field_accordion_item,body`,
          'fields[paragraph--accordion_item]': `field_title,body`,
          'fields[paragraph--card_group_button_cards]': `field_title,field_stylized_button_links`,
          'fields[paragraph--recent_news]': `field_title`,
          'fields[paragraph--stats]': `field_components,body,field_title,field_link`,
          'fields[paragraph--stats_item]': `field_title,field_text`,
          'fields[paragraph--upcoming_events]': `field_title,field_event_type`,
          'fields[paragraph--card_group_icon_cards]': `field_components`,
          'fields[paragraph--icon_card]': `field_title,field_link,body,field_icon`,
          'fields[paragraph--1_up_breaker]': `body,field_link,field_title,field_media`,
          'fields[paragraph--full_width_breaker]': `field_title,field_link,body,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--social_media_icons]': `field_social_media_icons`,
          'fields[taxonomy_term--social_media]': `field_social_media_platform,field_url`,
          'fields[paragraph--card_group_image_cards]': `field_card_group_color,field_components`,
          'fields[paragraph--image_card]': `body,field_link,field_title,field_media`,
          'fields[paragraph--spotlight]': `body,field_cta_title,field_link,field_eyebrow,field_title,field_components,field_media`,
          'fields[paragraph--spotlight_item]': `body,field_title,field_media`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--group_links]': `field_components`,
          'fields[paragraph--group_link]': `field_title,field_link,body,field_media`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[paragraph--link_farm]': 'field_link_farm_items, field_media',
          'fields[paragraph--form]': `field_title,field_webform`,
          include: [
            `field_components`,
            `field_components.field_accordion_item`,
            `field_components.field_components`,
            `field_components.field_components.field_media.field_image`,
            `field_components.field_media.field_image`,
            `field_components.field_social_media_icons`,
            `field_components.field_webform`,
            `field_hero_component`,
            `field_hero_component.field_media.field_image`,
            `field_components.field_link_farm_items`,
            `field_components.field_link_farm_items.field_media.field_image`,
          ].join(','),
        };
        break;

      case 'node--detail_page':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_hero_component,field_components,field_campus_content_list,field_card_group_quick_nav_cards`,
          'fields[paragraph--hero_text_only]': `body`,
          'fields[paragraph--accordion]': `field_title,field_accordion_item,body`,
          'fields[paragraph--accordion_item]': `field_title,body`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[taxonomy_term--campus]': 'name',
          'fields[paragraph--campus_content]': `field_title,body,field_campus`,
          'fields[paragraph--campus_content_list]': `field_components,field_enable_filter`,
          include: [
            `field_components`,
            `field_hero_component`,
            `field_campus_content_list`,
            `field_campus_content_list.field_components`,
            'field_campus_content_list.field_components.field_campus',
            'field_card_group_quick_nav_cards',
            'field_card_group_quick_nav_cards.field_components',
          ].join(','),
        };
        break;

      case 'node--person_listing':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_hero_component`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_full_width_media]': `field_cta_title,field_cta_subtitle,field_media,body`,
          include: [
            `field_hero_component`,
            `field_hero_component.field_media.field_image`,
          ].join(','),
        };
        break;

      case 'node--person':
        params = {
          [`fields[${type}]`]: `title,field_email,field_person_location,field_person_title,field_phone_number,metatag,field_department_office,field_media`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[taxonomy_term--departments]': 'name,parent',
          include: [
            'field_department_office',
            'field_department_office.parent',
            'field_media.field_image',
          ].join(','),
        };
        break;

      case 'node--spotlight_listing':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_hero_component,field_components,field_article_listing_component`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_minimalist]': `field_link,field_media`,
          'fields[paragraph--hero_text_only]': `body`,
          'fields[paragraph--hero_50_50_image]': `body,field_eyebrow,field_link,field_media`,
          'fields[paragraph--hero_homepage]': `field_media,body`,
          'fields[paragraph--hero_full_width_media]': `body,field_cta_subtitle,field_cta_title,field_media`,
          'fields[paragraph--card_group_button_cards]': `field_title,field_stylized_button_links`,
          'fields[paragraph--recent_news]': `field_title`,
          'fields[paragraph--stats]': `field_components,body,field_title,field_link`,
          'fields[paragraph--stats_item]': `field_title,field_text`,
          'fields[paragraph--upcoming_events]': `field_title,field_event_type`,
          'fields[paragraph--card_group_icon_cards]': `field_components`,
          'fields[paragraph--icon_card]': `field_title,field_link,body,field_icon`,
          'fields[paragraph--1_up_breaker]': `body,field_link,field_title,field_media`,
          'fields[paragraph--full_width_breaker]': `field_title,field_link,body,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--social_media_icons]': `field_social_media_icons`,
          'fields[taxonomy_term--social_media]': `field_social_media_platform,field_url`,
          'fields[paragraph--card_group_image_cards]': `field_card_group_color,field_components`,
          'fields[paragraph--image_card]': `body,field_link,field_title,field_media`,
          'fields[paragraph--spotlight]': `body,field_cta_title,field_link,field_eyebrow,field_title,field_components,field_media`,
          'fields[paragraph--spotlight_item]': `body,field_title,field_media`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--group_links]': `field_components`,
          'fields[paragraph--group_link]': `field_title,field_link,body,field_media`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[paragraph--article_listing]': `field_title,field_tags`,
          'fields[paragraph--form]': `field_title,field_webform`,
          include: [
            `field_components`,
            `field_components.field_components`,
            `field_components.field_components.field_media.field_image`,
            `field_components.field_media.field_image`,
            `field_hero_component`,
            `field_hero_component.field_media.field_image`,
            `field_article_listing_component`,
          ].join(','),
        };
        break;

      case 'node--event_listing':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_hero_component,field_components`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_event_listing]': `body,field_event,field_media`,
          'fields[paragraph--card_group_button_cards]': `field_title,field_stylized_button_links`,
          'fields[paragraph--recent_news]': `field_title`,
          'fields[paragraph--stats]': `field_components,body,field_title,field_link`,
          'fields[paragraph--stats_item]': `field_title,field_text`,
          'fields[paragraph--upcoming_events]': `field_title,field_event_type`,
          'fields[paragraph--card_group_icon_cards]': `field_components`,
          'fields[paragraph--icon_card]': `field_title,field_link,body,field_icon`,
          'fields[paragraph--1_up_breaker]': `body,field_link,field_title,field_media`,
          'fields[paragraph--full_width_breaker]': `field_title,field_link,body,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--social_media_icons]': `field_social_media_icons`,
          'fields[taxonomy_term--social_media]': `field_social_media_platform,field_url`,
          'fields[paragraph--card_group_image_cards]': `field_card_group_color,field_components`,
          'fields[paragraph--image_card]': `body,field_link,field_title,field_media`,
          'fields[paragraph--spotlight]': `body,field_cta_title,field_link,field_eyebrow,field_title,field_components,field_media`,
          'fields[paragraph--spotlight_item]': `body,field_title,field_media`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--group_links]': `field_components`,
          'fields[paragraph--group_link]': `field_title,field_link,body,field_media`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[paragraph--link_farm]':
            'field_link_farm_items,field_media,field_link_farm_color',
          include: [
            `field_components`,
            `field_components.field_components`,
            `field_components.field_components.field_media.field_image`,
            `field_components.field_media.field_image`,
            `field_hero_component`,
            `field_hero_component.field_media.field_image`,
            `field_hero_component.field_event`,
            `field_hero_component.field_event.field_hero_component`,
            `field_hero_component.field_event.field_hero_component.field_media.field_image`,
          ].join(','),
        };
        break;

      case 'node--news_listing':
        params = {
          [`fields[${type}]`]: `status,changed,title,path,field_components`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--card_group_button_cards]': `field_title,field_stylized_button_links`,
          'fields[paragraph--recent_news]': `field_title`,
          'fields[paragraph--stats]': `field_components,body,field_title,field_link`,
          'fields[paragraph--stats_item]': `field_title,field_text`,
          'fields[paragraph--upcoming_events]': `field_title,field_event_type`,
          'fields[paragraph--card_group_icon_cards]': `field_components`,
          'fields[paragraph--icon_card]': `field_title,field_link,body,field_icon`,
          'fields[paragraph--1_up_breaker]': `body,field_link,field_title,field_media`,
          'fields[paragraph--full_width_breaker]': `field_title,field_link,body,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--card_group_image_cards]': `field_card_group_color,field_components`,
          'fields[paragraph--image_card]': `body,field_link,field_title,field_media`,
          'fields[paragraph--spotlight]': `body,field_cta_title,field_link,field_eyebrow,field_title,field_components,field_media`,
          'fields[paragraph--spotlight_item]': `body,field_title,field_media`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--group_links]': `field_components`,
          'fields[paragraph--group_link]': `field_title,field_link,body,field_media`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[paragraph--link_farm]':
            'field_link_farm_items,field_media,field_link_farm_color',
          include: [
            `field_components`,
            `field_components.field_components`,
            `field_components.field_components.field_media.field_image`,
          ].join(','),
        };
        break;

      case 'node--article':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_components,field_hero_component,field_tags,field_author`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_article]': `field_subtitle,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[taxonomy_term--tags]': `name,path`,
          'fields[paragraph--text]': `body,field_title`,
          include: [
            `field_components`,
            `field_hero_component`,
            `field_tags`,
            `field_hero_component.field_media.field_image`,
          ].join(','),
        };
        break;

      case 'node--event':
        params = {
          [`fields[${type}]`]: `status,title,path,field_hero_component,field_components,field_dates,field_summary,field_event_location,metatag,field_event_type`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_event_detail]': `field_link,field_media`,
          'fields[paragraph--card_group_button_cards]': `field_title,field_stylized_button_links`,
          'fields[paragraph--recent_news]': `field_title`,
          'fields[paragraph--stats]': `field_components,body,field_title,field_link`,
          'fields[paragraph--stats_item]': `field_title,field_text`,
          'fields[paragraph--upcoming_events]': `field_title,field_event_type`,
          'fields[paragraph--card_group_icon_cards]': `field_components`,
          'fields[paragraph--icon_card]': `field_title,field_link,body,field_icon`,
          'fields[paragraph--1_up_breaker]': `body,field_link,field_title,field_media`,
          'fields[paragraph--full_width_breaker]': `field_title,field_link,body,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--card_group_image_cards]': `field_card_group_color,field_components`,
          'fields[paragraph--image_card]': `body,field_link,field_title,field_media`,
          'fields[paragraph--spotlight]': `body,field_cta_title,field_link,field_eyebrow,field_title,field_components,field_media`,
          'fields[paragraph--spotlight_item]': `body,field_title,field_media`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--group_links]': `field_components`,
          'fields[paragraph--group_link]': `field_title,field_link,body,field_media`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[taxonomy_term--event_type]': `name`,
          include: [
            `field_components`,
            `field_hero_component`,
            `field_hero_component.field_media.field_image`,
            `field_event_type`,
          ].join(','),
        };
        break;

      case 'node--career_listing':
        params = {
          [`fields[${type}]`]: `title,changed,field_hero_component,field_components`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--hero_career_listing]': `field_eyebrow,field_media`,
          'fields[paragraph--accordion]': `field_title,field_accordion_item,body`,
          'fields[paragraph--accordion_item]': `field_title,body`,
          'fields[paragraph--card_group_button_cards]': `field_title,field_stylized_button_links`,
          'fields[paragraph--recent_news]': `field_title`,
          'fields[paragraph--stats]': `field_components,body,field_title,field_link`,
          'fields[paragraph--stats_item]': `field_title,field_text`,
          'fields[paragraph--upcoming_events]': `field_title,field_event_type`,
          'fields[paragraph--card_group_icon_cards]': `field_components`,
          'fields[paragraph--icon_card]': `field_title,field_link,body,field_icon`,
          'fields[paragraph--1_up_breaker]': `body,field_link,field_title,field_media`,
          'fields[paragraph--full_width_breaker]': `field_title,field_link,body,field_media`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[paragraph--table]': `field_title,field_link,body,field_enable_filter`,
          'fields[paragraph--social_media_icons]': `field_social_media_icons`,
          'fields[taxonomy_term--social_media]': `field_social_media_platform,field_url`,
          'fields[paragraph--card_group_image_cards]': `field_card_group_color,field_components`,
          'fields[paragraph--image_card]': `body,field_link,field_title,field_media`,
          'fields[paragraph--spotlight]': `body,field_cta_title,field_link,field_eyebrow,field_title,field_components,field_media`,
          'fields[paragraph--spotlight_item]': `body,field_title,field_media`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--group_links]': `field_components`,
          'fields[paragraph--group_link]': `field_title,field_link,body,field_media`,
          'fields[paragraph--card_group_quick_nav_cards]': `field_title,field_components`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          'fields[paragraph--form]': `field_title,field_webform`,
          'fields[paragraph--link_farm]':
            'field_link_farm_items,field_media,field_link_farm_color',
          include: [
            `field_components`,
            `field_components.field_accordion_item`,
            `field_components.field_components`,
            `field_components.field_components.field_media.field_image`,
            `field_components.field_media.field_image`,
            `field_components.field_social_media_icons`,
            `field_components.field_webform`,
            `field_hero_component`,
            `field_hero_component.field_media.field_image`,
          ].join(','),
        };
        break;

      case 'node--process_landing':
        params = {
          [`fields[${type}]`]: `status,title,changed,path,field_process_steps,field_hero_component,field_author,field_card_group_quick_nav_cards`,
          'fields[file--file]': `uri,links`,
          'fields[media--image]': `field_image`,
          'fields[media--video]': `field_source`,
          'fields[paragraph--quote]': `body,field_author,field_author_title`,
          'fields[taxonomy_term--tags]': `name,path`,
          'fields[paragraph--text]': `body,field_title`,
          'fields[paragraph--hero_text_only]': `body`,
          'fields[paragraph--quick_nav_card]': `field_title,field_link,body`,
          include: [
            `field_process_steps`,
            `field_hero_component`,
            `field_card_group_quick_nav_cards`,
            `field_card_group_quick_nav_cards.field_components`,
          ].join(','),
        };
        break;

      case 'node--job':
        params = {
          [`fields[${type}]`]: `title,changed,body,field_job_location,field_job_position_type,field_link`,
          sort: '-changed',
        };
        break;
    }
    if (!context.preview) {
      params['filter[status]'] = 1;
    }
    return params;
  };

  let resource,
    type,
    path = null;
  // Cache page resource for 2 hours by default.
  let revalidate: number | boolean = 2 * 60 * 60;
  const staticPaths = new Map<string, string>([
    ['', 'node--homepage'],
    ['news', 'node--news_listing'],
    ['careers', 'node--career_listing'],
    ['events', 'node--event_listing'],
    ['directory', 'node--person_listing'],
  ]);
  if (staticPaths.has(slug)) {
    type = staticPaths.get(slug) as string;
    let params = getParamsByType(type, context);
    params['sort'] = '-changed';
    params['page[limit]'] = 1;
    const collection = await drupal.getResourceCollectionFromContext<
      DrupalNode[]
    >(type, context, {
      params,
    });
    if (collection.length === 0) {
      return {
        notFound: true,
      };
    }
    resource = collection.shift();
  } else {
    path = await drupal.translatePathFromContext(context);

    if (!path) {
      return {
        notFound: true,
      };
    }

    type = path.jsonapi?.resourceName;

    let params = getParamsByType(type, context);
    resource = await drupal.getResourceFromContext<DrupalNode>(path, context, {
      params,
    });
  }

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path?.jsonapi?.individual}`);
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    };
  }

  if (type === 'node--news_listing') {
    resource.recentNews = await getNewsArticles();
  } else if (type === 'node--career_listing') {
    resource.postings = await drupal.getResourceCollectionFromContext<
      DrupalNode[]
    >('node--job', context, {
      params: {
        ...getParamsByType('node--job', context),
        'filter[status]': 1,
      },
    });
  } else if (type === 'node--event_listing') {
    // Cache event listings for 24 hours.
    revalidate = 24 * 60 * 60;
    const eventInclusionThreshold = dayjs().format('YYYY-MM-DDT00:00:00');
    resource.events = await drupal.getResourceCollectionFromContext<
      DrupalNode[]
    >('node--event', context, {
      params: {
        ...getParamsByType('node--event', context),
        'filter[status]': 1,
        // Sort the events so that the ones that are closest to expiring will
        // be listed first.
        sort: 'field_dates.end_value',
        // Filter out events whose end date occurred prior to today.
        'filter[datefilter][condition][path]': 'field_dates.end_value',
        'filter[datefilter][condition][operator]': '>=',
        'filter[datefilter][condition][value]': eventInclusionThreshold,
      },
    });
  } else if (type === 'node--person_listing') {
    // Permanently cache the Person Listing page and only revalidate via the CMS.
    revalidate = false;
    resource.people = await drupal.getResourceCollectionFromContext<
      DrupalNode[]
    >('node--person', context, {
      params: getParamsByType('node--person', context),
    });
  }

  const menus: Record<string, DrupalMenuLinkContent[]> = {
    header: await getMenuByName('main'),
    footer: await getMenuByName('footer'),
  };
  const brandBar = await getContentfulBrandBarApi();
  const brandFooter = await getContentfulBrandFooterApi();

  return {
    props: {
      resource,
      menus,
      brandBar,
      brandFooter,
    },
    revalidate,
  };
}
