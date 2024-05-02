export const getCardsFromCollection = <T = Record<string, any>>(
  collection: T[],
  totalCards = 1,
  cardsToDisplayMin: number,
  cardsToDisplayMax: number
) => {
  if (collection) {
    // Ensure that the card count is no greater than the CARDS_TO_DISPLAY_MAX and
    // contains at least 1 card.
    const cardCount = Math.min(
      Math.max(totalCards, cardsToDisplayMin),
      cardsToDisplayMax
    );
    const cards: typeof collection = [];
    while (collection.length > 0 && cards.length < cardCount) {
      cards.push(...collection.slice(0, cardCount - cards.length));
    }
    return cards;
  }
};
