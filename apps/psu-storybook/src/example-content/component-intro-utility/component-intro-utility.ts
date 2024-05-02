export const introParagraph = (userInput: string) => {
  if (userInput == '') {
    return null;
  } else {
    return {
      data: {},
      content: [
        {
          data: {},
          content: [
            {
              data: {},
              marks: [],
              value: userInput,
              nodeType: 'text',
            },
          ],
          nodeType: 'paragraph',
        },
      ],
      nodeType: 'document',
    };
  }
};

export const useIntroArgs = (args) => ({
  introHeading: args.introHeading && args.introHeading,
  introParagraph: args.introParagraph && introParagraph(args.introParagraph),
});
