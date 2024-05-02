import {
  DrupalMedia,
  DrupalNode,
  DrupalParagraph,
  DrupalTaxonomyTerm,
} from 'next-drupal';
import { getComponent } from 'lib/component-factory';
import {
  PersonCardGroup,
  PersonDirectoryCard,
  Wrapper,
} from '@psu-flex/psu-global-ui';
import { absoluteUrl } from 'lib/utils';

interface PersonNodeProps extends DrupalNode {
  field_email: string;
  field_person_title?: string;
  field_person_location?: string;
  field_phone_number?: string;
  field_department_office: Array<DrupalTaxonomyTerm & {}>;
  field_media?: DrupalMedia;
}

export interface PersonListingPageProps extends DrupalNode {
  field_hero_component: DrupalParagraph;
  people: PersonNodeProps[];
}

export function PersonListingPage(props: PersonListingPageProps) {
  const { field_hero_component, title, people } = props;
  const items: PersonDirectoryCard[] = [];
  people.forEach((person) => {
    const thumbnail = person?.field_media?.field_image?.uri?.url
      ? absoluteUrl(person.field_media.field_image.uri.url)
      : undefined;
    person.field_department_office.forEach((subgroup) => {
      items.push({
        personHeading: person.title,
        personImage: thumbnail,
        personIsMale: true,
        personBody: '',
        personTo: '',
        personPosition: person?.field_person_title ?? '',
        personLocation: person?.field_person_location ?? '',
        personCellphone: person?.field_phone_number ?? '',
        personEmail: person.field_email,
        directoryGroup: subgroup.parent[0].name,
        directorySubgroup: subgroup.name,
      });
    });
  });

  return (
    <>
      {field_hero_component &&
        getComponent({
          ...field_hero_component,
          field_title: title,
        })}

      <Wrapper>
        <PersonCardGroup items={items} />
      </Wrapper>
    </>
  );
}
