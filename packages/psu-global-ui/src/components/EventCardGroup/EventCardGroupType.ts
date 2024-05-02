import { EventCardProps } from '../EventCard/EventCardTypes';

export type EventCardGroupProps = {
  /**Width of the column that the CardItem occupies */
  columnSpan: number;
  items: EventCardProps[]
  groupHeading?: string;
  buttonLabel?: string;
  buttonTo?: string;
  initialCardCount?: number;
  cardIncrement?: number;
};
