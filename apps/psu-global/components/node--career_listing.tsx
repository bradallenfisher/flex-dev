import { DrupalMedia, DrupalNode, DrupalParagraph } from 'next-drupal';
import { getComponent } from 'lib/component-factory';
import {
  CareerListingCardProps,
  CareerListingGroup,
  Flex,
  HeroCareers,
  Section,
} from '@psu-flex/psu-global-ui';
import { HeroCareersProps } from '@psu-flex/psu-global-ui/src/components/HeroCareers/HeroCareers';
import { useEffect, useState, useRef } from 'react';
import { stripHtml } from 'string-strip-html';

type JobPosting = DrupalNode & {
  body: { value: string };
  field_job_location: string;
  field_job_position_type: string | null;
  field_link: { uri: string };
};

export interface CareerListingPageProps extends DrupalNode {
  field_hero_component: DrupalParagraph & {
    field_eyebrow?: string;
    field_title: string;
    field_media: DrupalMedia;
  };
  field_components: DrupalParagraph[];
  postings: JobPosting[];
}

export function CareerListingPage({
  title,
  field_hero_component,
  field_components,
  postings,
}: CareerListingPageProps) {
  const [heroProps, setHeroProps] = useState<HeroCareersProps>({
    title,
    subHeading: field_hero_component?.field_eyebrow,
    locations: [],
  });
  const [cards, setCards] = useState<CareerListingCardProps[]>([]);
  const [currentType, setCurrentType] = useState<string>('staff');
  const [currentLocation, setCurrentLocation] = useState<string>('');
  const originalCards = useRef([]);

  const onTypeChange = (selectedType: string) => {
    setCurrentType(selectedType);
    setCards(() =>
      originalCards.current.filter(({ itemType, itemLocation }) =>
        currentLocation.length
          ? itemType === selectedType && itemLocation === currentLocation
          : itemType === selectedType
      )
    );
  };

  const onLocationChange = (location: string) => {
    setCurrentLocation(location);
    setCards(() =>
      originalCards.current.filter(
        ({ itemLocation, itemType }) =>
          itemLocation === location && itemType === currentType
      )
    );
  };

  useEffect(() => {
    const careerListingCards: CareerListingCardProps[] = [];
    postings.forEach((post, index) => {
      if (
        post?.field_job_position_type &&
        !heroProps.locations.find(
          ({ name }) => name === post.field_job_location
        )
      ) {
        setHeroProps((prev) => ({
          ...prev,
          locations: [
            ...prev.locations,
            {
              id: index,
              name: post.field_job_location,
            },
          ],
        }));
      }
      careerListingCards.push({
        id: index,
        itemHeading: post.title,
        itemLocation: post.field_job_location,
        itemType: post?.field_job_position_type ?? '',
        itemBody: stripHtml(post.body.value).result,
        itemTo: post.field_link.uri,
        itemToBody: 'Go To Listing',
      });
    });
    // @ts-expect-error
    originalCards.current = careerListingCards;

    setCards(careerListingCards.filter(({ itemType }) => itemType === 'staff'));
  }, [postings]);

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
        <HeroCareers
          {...heroProps}
          onTypeChange={onTypeChange}
          onLocationChange={onLocationChange}
        />
        {cards.length > 0 && (
          <CareerListingGroup
            items={cards}
            careersType={`${currentType
              .charAt(0)
              .toUpperCase()}${currentType.slice(1)} Positions`}
          />
        )}
        {field_components && field_components.map(getComponent)}
      </Flex>
    </Section>
  );
}
