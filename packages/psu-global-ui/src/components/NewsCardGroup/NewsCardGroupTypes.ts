import { NewsCardsItemInterface } from '../NewsCard/NewsCardItem';

export type NewsCardGroupProps = {
  /**Width of the column that the CardItem occupies */
  columnSpan: number;
  cards: NewsCardsItemInterface[]
  groupHeading?: string;
  buttonLabel?: string;
  buttonTo?: string;
  initialCardCount?: number;
  cardIncrement?: number;
};
