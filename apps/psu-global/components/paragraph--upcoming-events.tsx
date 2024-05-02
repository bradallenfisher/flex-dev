import { useEffect, useState } from 'react';
import { DrupalParagraph } from "next-drupal"
import { EventCard, EventCardGroup } from "@psu-flex/psu-global-ui"
import { getEntityPath } from 'lib/utils';

export interface ParagraphUpcomingEventsProps extends DrupalParagraph {
  field_title: string
  field_event_type: {
    resourceIdObjMeta: {
      drupal_internal__target_id: number
    }
  }[]
}
type PropsOf<T> = T extends React.ComponentType<infer Props> ? Props : never
type EventCardProps = PropsOf<typeof EventCard>

export function ParagraphUpcomingEvents({ id, field_event_type, field_title }: ParagraphUpcomingEventsProps) {
  const [items, setItems] = useState<EventCardProps[]>([]);
  useEffect(() => {
    async function fetchData() {
      const tids = field_event_type
        .map((type) => type.resourceIdObjMeta.drupal_internal__target_id)
        .sort();
      try {
        const res = await fetch(`/api/upcoming-events/${tids.join('/')}`);
        const data = await res.json();
        const items = data.results.filter((item: any) => item.id !== id).slice(0, 4).map((item: any) => {
          return ({
            itemHeading: item.title,
            itemBody: item.field_summary,
            itemIcon: {
              icon: item?.field_event_location ? 'locationPin' : '',
              iconBody: item.field_event_location,
            },
            itemTo: getEntityPath(item) || '',
            itemDate: item.field_dates.value,
          })
        });
        setItems(items);
      } catch {
        setItems([]);
      }
    }
    fetchData();
  }, [id, field_event_type]);

  return (
    <EventCardGroup
      columnSpan={1}
      items={items}
      groupHeading={field_title}
      buttonLabel="View All Global Events"
      buttonTo="/events"
    />
  )
}
