import { DrupalNode, DrupalParagraph } from "next-drupal"
import { getComponent } from "lib/component-factory"

export interface EventPageProps extends DrupalNode {
  title: string
  field_event_location: string
  field_dates: {
    value: string
    end_value: string
  }
  field_event_type: Array<{
    resourceIdObjMeta: {
      drupal_internal__target_id: number;
    }
  }>
  field_hero_component?: DrupalParagraph
  field_components?: DrupalParagraph[]
}

export function EventPage({ id, langcode, status, title, field_event_location, field_dates, field_components, field_hero_component, field_event_type }: EventPageProps) {
  return (
    <>
      {field_hero_component && getComponent({
        ...field_hero_component,
        // Pass fields from the event node into the hero component.
        field_title: title,
        eventDate: field_dates?.value,
        eventLocation: field_event_location,
      })}
      {Array.isArray(field_components) && field_components.map(getComponent)}
      {field_event_type.length !== 0 && getComponent({
        id,
        langcode,
        status,
        type: 'paragraph--upcoming_events',
        field_title: 'Related Events',
        field_event_type,
      })}
    </>
  )
}
