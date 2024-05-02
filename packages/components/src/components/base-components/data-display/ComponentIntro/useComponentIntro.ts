//utility function used to target ComponentIntro component with props from the parent that are intended specifically for the ComponentIntro
export const useComponentIntro = (props) => {
  // Check if any of the properties exist
  if (props.introHeading || props.introParagraph || props.numberOfCards) {
    return {
      introHeading: props.introHeading,
      introParagraph: props.introParagraph,
      numberOfCards: props.numberOfCards,
    };
  } else {
    return null; // Return null if all properties are undefined
  }
};
