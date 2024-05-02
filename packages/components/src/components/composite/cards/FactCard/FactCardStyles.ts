import theme from "@psu-flex/platform-theme";

const cardBorder = `${theme.borderWidths["sm"]} solid ${theme.colors.pughBlue}`;

const fourCardXMargin = { mr: [6, 8, 8, 7], ml: [6, 3, 3, 0] };
const threeCardXMargin = { mr: [6, 8, 8, 10], ml: [6, 8, 3, 3] };

const cardMargins = (itemsLength, index) => ({
  ...//four card case
  (itemsLength === 4
    ? {
        ...(index === 0
          ? {
              mt: [0, 0, 0, 10],
              mb: [8, 9, 9, 10],
              ...fourCardXMargin,
            }
          : index < 2
          ? {
              mt: [8, 0, 0, 10],
              mb: [8, 9, 9, 10],
              ...fourCardXMargin,
            }
          : index === itemsLength - 1
          ? {
              mt: [8, 9, 9, 10],
              mb: [0, 0, 0, 10],
              ...fourCardXMargin,
            }
          : {
              mt: [8, 9, 9, 10],
              mb: [8, 0, 0, 10],
              ...fourCardXMargin,
            }),
      }
    : {
        //three card case
        ...(index === 0
          ? {
              mt: [0, 0, 10, 10],
              mb: [8, 9, 10, 10],
              ...threeCardXMargin,
            }
          : index === itemsLength - 1
          ? {
              mt: [8, 9, 10, 10],
              mb: [0, 0, 10, 10],
              ...threeCardXMargin,
            }
          : { my: [8, 9, 10, 10], ...threeCardXMargin }),
      }),
});

export { cardBorder, cardMargins };
