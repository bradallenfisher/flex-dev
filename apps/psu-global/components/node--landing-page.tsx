import { DrupalNode, DrupalParagraph } from 'next-drupal';
import { getComponent } from 'lib/component-factory';
import { BackgroundWrapper } from '@psu-flex/psu-global-ui';

export interface LandingPageProps extends DrupalNode {
  field_hero_component?: DrupalParagraph;
  field_components?: DrupalParagraph[];
}

export function LandingPage({
  title,
  field_components,
  field_hero_component,
}: LandingPageProps) {
  return (
    <BackgroundWrapper variant="white">
      {field_hero_component &&
        getComponent({
          ...field_hero_component,
          field_title: title,
        })}

      {Array.isArray(field_components) && field_components.map(getComponent)}
    </BackgroundWrapper>
  );
}
