import { DrupalNode, DrupalParagraph } from 'next-drupal';
import { getComponent } from 'lib/component-factory';
import {
  Flex,
  JumpLink,
  ProcessStep,
  Container,
  BadgeStep,
  Breadcrumbs,
  BreadcrumbItem,
} from '@psu-flex/psu-global-ui';

export interface ProcessLandingPageProps extends DrupalNode {
  field_hero_component?: DrupalParagraph;
  field_components?: DrupalParagraph[];
  field_process_steps?: DrupalParagraph[];
  field_card_group_quick_nav_cards?: DrupalParagraph;
}

export function ProcessLanding({
  title,
  field_hero_component,
  field_process_steps,
  field_card_group_quick_nav_cards,
}: ProcessLandingPageProps) {
  const links = Array.isArray(field_process_steps)
    ? field_process_steps.map((step, index) => {
        return {
          title: 'STEP ' + (index + 1) + ': ' + step.field_title,
          url: '#step-' + index,
        };
      })
    : [];
  console.log('field_process_steps', field_process_steps);
  return (
    <>
      {field_hero_component &&
        getComponent({
          ...field_hero_component,
          field_title: title,
        })}
      {Array.isArray(field_process_steps) && (
        <Flex
          className="process-landing"
          extraSx={{
            ml: '3%',
            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <div>
            <JumpLink links={links} title="On this page" />
          </div>
          <Container>
            {field_process_steps.map((step, index) => (
              <ProcessStep
                key={index}
                id={'step-' + index}
                extraSx={{
                  borderLeft: '1px solid #CCDAE6',
                }}
              >
                <BadgeStep>{'Step ' + (index + 1)}</BadgeStep>
                {getComponent({
                  ...step,
                  wrapperExtraSx: {
                    width: '100% !important',
                  },
                  titleExtraSx: {
                    mt: '.0625rem',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'beaverBlue',
                  },
                })}
              </ProcessStep>
            ))}
          </Container>
        </Flex>
      )}
      {field_card_group_quick_nav_cards &&
        getComponent(field_card_group_quick_nav_cards)}
    </>
  );
}
