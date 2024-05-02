/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { DrupalMedia, DrupalNode, DrupalParagraph } from 'next-drupal';
import { getComponent } from 'lib/component-factory';
import {
  BackgroundWrapper,
  DateRangePicker,
  EventCardGroup,
  EventCardProps,
  Flex,
  Heading,
  HeroEventListing,
  HeroEventListingProps,
  Section,
  Select,
  Wrapper,
  useBreakpoints,
} from '@psu-flex/psu-global-ui';
import { EventPageProps } from './node--event';
import { getCanonical, getEntityPath, setImgSrc } from 'lib/utils';
import dayjs from 'dayjs';
import { stripHtml } from 'string-strip-html';
import { useEffect, useMemo, useState } from 'react';
import { Item } from 'react-stately';

interface EventListingHero extends DrupalParagraph {
  body: { value: string };
  field_title: string;
  field_event: EventPageProps;
  field_media: DrupalMedia;
}

interface FilterableEventCard extends EventCardProps {}

export interface EventListingPageProps extends DrupalNode {
  events: Array<DrupalNode>;
  field_hero_component: EventListingHero;
  field_components: DrupalParagraph[];
}

function EventListingHero({
  field_event,
  field_media,
  body,
}: EventListingHero) {
  let formattedDate = '';
  if (field_event?.field_dates?.value) {
    formattedDate = dayjs(field_event.field_dates.value).format('MMMM D, dddd');
  }

  const link =
    field_event?.path?.alias ?? getCanonical(field_event) ?? undefined;
  let content = body?.value ?? null;
  if (content) {
    content = stripHtml(content).result;
  }
  content ??= field_event?.field_summary;
  const heroProps: HeroEventListingProps = {
    title: field_event?.title,
    image: setImgSrc(
      field_media?.field_image?.uri?.url ??
        field_event?.field_hero_component?.field_media?.field_image?.uri?.url
    ),
    content,
    eventDate: formattedDate,
    eventLocation: field_event?.field_event_location,
    link: {
      text: 'Read more about this event',
      url: link,
    },
  };
  return <HeroEventListing {...heroProps} />;
}

export function EventListingPage(props: EventListingPageProps) {
  const { field_hero_component, field_components, events } = props;
  const [cards, setCards] = useState<FilterableEventCard[]>([]);
  const [filters, setFilters] = useState<
    Record<string, ((item: any) => boolean) | null>
  >({
    location: null,
    type: null,
    itemDate: null,
  });

  const [eventCards, locations, eventTypes] = useMemo(() => {
    const mappedEvents: FilterableEventCard[] = [];
    const locationOptions: string[] = [];
    const eventTypeOptions: string[] = [];
    events.forEach((item) => {
      const record = {
        itemHeading: item.title,
        itemBody: item.field_summary,
        itemIcon: {
          icon: item?.field_event_location ? 'locationPin' : '',
          iconBody: item.field_event_location,
        },
        itemDate: item.field_dates.value,
        itemTo: getEntityPath(item) || '',
        location: item.field_event_location,
        type: item.field_event_type.map(({ name }: any) => name) ?? [],
      };
      mappedEvents.push(record);
      if (record.location && !locationOptions.includes(record.location)) {
        locationOptions.push(record.location);
      }
      record.type.forEach((type: string) => {
        if (type && !eventTypeOptions.includes(type)) {
          eventTypeOptions.push(type);
        }
      });
    });
    return [mappedEvents, locationOptions, eventTypeOptions];
  }, [events]);

  useEffect(() => {
    let filteredCards = eventCards;
    for (const filterCallback of Object.values(filters)) {
      if (filterCallback) {
        filteredCards = filteredCards.filter(filterCallback);
      }
    }
    setCards(filteredCards);
  }, [eventCards, filters]);

  const { isSm, isMd, isLg } = useBreakpoints();
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
        {/* Hero */}
        <EventListingHero {...field_hero_component} />

        {/* Filter container */}
        <BackgroundWrapper variant="slateMaxLight">
          <Wrapper
            extraSx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              justifyContent: 'center',
              alignItems: `${isSm || isMd || isLg ? 'flex-start' : 'center'}`,
              '@media (max-width: 1200px)': {
                alignItems: 'flex-start',
              },
            }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              autoComplete="off"
              sx={{
                display: 'flex',
                flexDirection: isSm || isMd || isLg ? 'column' : 'row',
                backgroundColor: 'slateMaxLight',
                alignItems: isSm || isMd || isLg ? 'baseline' : 'end',
                justifyContent: 'space-between',
                gap: 5,
                '@media (max-width: 1200px)': {
                  flexDirection: 'column',
                  alignItems: 'baseline',
                },
              }}
            >
              <Flex
                extraSx={{
                  flexDirection: 'column',
                }}
              >
                <Heading
                  extraSx={{
                    mb: 2,
                    alignSelf: 'flex-start',
                    color: 'beaverBlue',
                    textTransform: 'uppercase',
                    justifyContent: 'center',
                  }}
                  variant={20}
                >
                  Filters
                </Heading>
                <DateRangePicker
                  label="Event Date"
                  onChange={({ start, end }: Record<string, Date>) => {
                    const compareDates = (item: any) => {
                      let eventDate = item.itemDate;
                      if (eventDate) {
                        eventDate = dayjs(eventDate);
                        const isAfterStart =
                          eventDate.format('YYYY-MM-DD') === start.toString() ||
                          eventDate.isAfter(start);
                        if (isAfterStart) {
                          const isBeforeEnd =
                            eventDate.format('YYYY-MM-DD') === end.toString() ||
                            eventDate.isBefore(end);
                          return isBeforeEnd;
                        }
                      }
                      return false;
                    };
                    setFilters({
                      ...filters,
                      itemDate: start && end ? compareDates : null,
                    });
                  }}
                />
              </Flex>
              <Select
                errors={{}}
                size="md"
                defaultPlaceholder="Event Type"
                name="eventType"
                items={eventTypes.map((name, id) => ({ name, id }))}
                onSelectionChange={(valueIndex: number) => {
                  const value = eventTypes?.[valueIndex] ?? null;
                  setFilters({
                    ...filters,
                    type: value
                      ? (item: any) => item?.type && item.type.includes(value)
                      : null,
                  });
                }}
              >
                {(item: any) => (
                  <Item textValue={item.name} key={item.id}>
                    {item.name}
                  </Item>
                )}
              </Select>
              <Select
                errors={{}}
                defaultPlaceholder="Location"
                name="location"
                size="md"
                items={locations.map((name, id) => ({ name, id }))}
                onSelectionChange={(valueIndex: number) => {
                  const value = locations?.[valueIndex] ?? null;
                  setFilters({
                    ...filters,
                    location: value
                      ? (item: any) => item?.location && item.location === value
                      : null,
                  });
                }}
              >
                {(item: any) => (
                  <Item textValue={item.name} key={item.id}>
                    {item.name}
                  </Item>
                )}
              </Select>
            </form>
          </Wrapper>
        </BackgroundWrapper>

        {/* Event cards */}
        {cards.length !== 0 && (
          <Wrapper>
            <EventCardGroup columnSpan={4} items={cards} />
          </Wrapper>
        )}

        {/* Additional components to be included on the page. */}
        {field_components && field_components.map(getComponent)}
      </Flex>
    </Section>
  );
}
