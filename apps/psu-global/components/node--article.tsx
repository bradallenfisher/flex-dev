import { DrupalNode, DrupalParagraph, DrupalTaxonomyTerm } from "next-drupal"
import { getComponent } from "lib/component-factory"
import { BackgroundWrapper, Body, Flex, Wrapper } from "@psu-flex/psu-global-ui"
import { ParagraphHeroArticleProps } from "./paragraph--hero-article"
import dayjs from 'dayjs';
import dynamic from "next/dynamic";

export type ArticleProps = DrupalNode & {
  field_author: string
  changed: string
  field_hero_component: ParagraphHeroArticleProps
  field_components: DrupalParagraph[]
  field_tags: DrupalTaxonomyTerm[]
}

export function Article({ changed, title, field_hero_component, field_components, field_tags, field_author }: ArticleProps) {
  const SocialShare = dynamic(() => import('@psu-flex/psu-global-ui').then(({ SocialShare }) => SocialShare), { ssr: false });
  return (
    <>
      {field_hero_component && getComponent({
        ...field_hero_component,
        // Pass the field_tags from the article into the hero component.
        field_tags: field_tags,
        field_title: title,
      })}
      <BackgroundWrapper variant="slateMaxLight">
        <Wrapper>
          <Flex
            variant="stretch"
            alignItems={'center'}
            dir="row"
            gap={4}
          >
            <Body>By {field_author}</Body>
            <Body>{dayjs(changed).format('MMMM D, YYYY')}</Body>
            <SocialShare
              title={field_hero_component.field_title}
              size="xs"
            />
          </Flex>
        </Wrapper>
      </BackgroundWrapper>
      {field_components && field_components.map(getComponent)}
    </>
  )
}
