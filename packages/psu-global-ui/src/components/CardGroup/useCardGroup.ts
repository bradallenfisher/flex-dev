//utility function used to target CardGroup component with props from the parent that are intended specifically for the CardGroup
export const useCardGroup = (props: any) => {
  return {
    backgroundColor: props.backgroundColor && props.backgroundColor,
    cards: props.cards && props.cards,
    columnSpan: (props.columnSpan && props.columnSpan) || 4,
    totalGridColumns: props.totalGridColumns && props.totalGridColumns,
    container: props.container && props.container,
  };
};
