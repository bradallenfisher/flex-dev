import { DrupalNode, DrupalParagraph } from 'next-drupal';
import { getComponent } from 'lib/component-factory';
import { Flex, Section, Select, Wrapper, Heading } from '@psu-flex/psu-global-ui';
import { useEffect, useMemo, useState } from 'react';
import { Item } from 'react-stately';

interface CampusContentProps extends DrupalParagraph {
  body: { value: string; };
  field_campus: { name: string; };
  field_title: string;
}

export interface DetailPageProps extends DrupalNode {
  field_hero_component: DrupalParagraph;
  field_components?: DrupalParagraph[];
  field_card_group_quick_nav_cards: DrupalParagraph;
  field_campus_content_list: {
    field_components: CampusContentProps[];
    field_enable_filter: boolean;
  }
}

export function DetailPage({ title, field_components, field_hero_component, field_card_group_quick_nav_cards, field_campus_content_list }: DetailPageProps) {
  const { field_components: campus_content_data, field_enable_filter } = field_campus_content_list;
  const [campusContentData, campuses] = useMemo(() => {
    const campusContent: CampusContentProps[] = [];
    const campuses: string[] = [];
    campus_content_data.forEach((item: CampusContentProps) => {
      campusContent.push({
        ...item,
        type: 'paragraph--text',
        titleExtraSx: { color: 'beaverBlue' },
      });
      const campus = item.field_campus?.name ?? ''
      if (field_enable_filter && campus && !campuses.includes(campus)) {
        campuses.push(campus);
      }
    });
    campuses.sort();
    return [campusContent, campuses];
  }, [campus_content_data, field_enable_filter]);

  const [filter, setFilter] = useState<string | null>(campuses?.[0] ?? null);
  const [campusContent, setCampusContent] = useState<CampusContentProps[]>([])

  useEffect(() => {
    let content = campusContentData;
    if (filter) {
      content = content.filter(item => (item.field_campus.name) === filter)
    }
    setCampusContent(content)
  }, [filter, campusContentData]);

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
          getComponent({
            ...field_hero_component,
            field_title: title,
          })
        )}
        {campuses.length !== 0 && field_enable_filter && (
          <Wrapper>
            <Heading
              extraSx={{
                mb: 2,
                color: 'beaverBlue',
              }}
              variant={20}
            >
              Select Your Campus
            </Heading>
            <form onSubmit={(e) => e.preventDefault()}>
              <Select
                errors={{}}
                defaultPlaceholder="Campus"
                name="campus"
                items={campuses.map((name) => ({ name }))}
                onSelectionChange={setFilter}
                selectedKey={filter}
                selectClassName={{ width: 'max-content' }}
              >
                {(item: any) => (
                  <Item textValue={item.name} key={item.name}>
                    {item.name}
                  </Item>
                )}
              </Select>
            </form>
          </Wrapper>
        )}
        {campusContent.length !== 0 && campusContent.map(getComponent)}
        {Array.isArray(field_components) && field_components.map(getComponent)}
        {field_card_group_quick_nav_cards && getComponent(field_card_group_quick_nav_cards)}
      </Flex>
    </Section>
  );
}
