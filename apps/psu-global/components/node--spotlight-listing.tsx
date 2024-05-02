import { DrupalNode, DrupalParagraph } from "next-drupal"
import { getComponent } from "lib/component-factory"
import { Flex, Section, Wrapper } from "@psu-flex/psu-global-ui";

export interface SpotlightListingPageProps extends DrupalNode {
  field_hero_component: DrupalParagraph;
  field_article_listing_component: DrupalParagraph;
  field_components: DrupalParagraph[];
}

export function SpotlightListingPage(props: SpotlightListingPageProps) {
  const { field_hero_component, field_components, title, field_article_listing_component } = props;
  return (
    <Section>
      <Flex
        direction="column"
        extraSx={{
          mt: [12, 15, 18, 20],
          mb: [16, 24, 24, 24],
          gap: [8, 8, 9, 9],
        }}
      >
        {field_hero_component && (
          <Wrapper>
            {getComponent({
              ...field_hero_component,
              field_title: title,
            })}
          </Wrapper>
        )}
        {field_article_listing_component && getComponent(field_article_listing_component)}
        {Array.isArray(field_components) && field_components.map(getComponent)}
      </Flex>
    </Section>
  )
}
