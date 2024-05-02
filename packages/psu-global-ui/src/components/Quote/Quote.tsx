import { Body, Flex } from "@psu-flex/core-ui";
import * as React from "react";

export interface QuoteProps {
  body: string;
  author: string;
}

export const Quote = ({ body, author }: QuoteProps) => {
  return (
    <Flex
      alignItems="center"
      gap="5rem"
      extraSx={{
        padding: [4, 14, 14, 14],
      }}
    >
      <Flex
        direction="column"
        alignItems="flex-start"
        gap="var(--3rem, 3rem)"
        extraSx={{
          flex: '1 0 0',
        }}
      >
        <Body
          variant={36}
          extraSx={{
            width: ['22.5rem', '48rem', '67.5rem', '90rem'],
            color: 'white',
            fontFamily: 'serif',
            fontSize: ['1.75rem', '2rem', '2.25rem', '2.25rem'],
            fontWeight: 'medium',
            lineHeight: '120',
          }}
        >"{ body }"</Body>
        <Body
          variant={36}
          extraSx={{
            width: ['22.5rem', '48rem', '67.5rem', '90rem'],
            color: 'white',
            fontSize: ['1rem', '1.125rem', '1.125rem', '1.125rem'],
            fontFamily: 'Roboto',
            lineHeight: '150',
            pt: 1
          }}
        >{ author }</Body>
      </Flex>
    </Flex>
  );
};
