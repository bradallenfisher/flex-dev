/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import {
  Body,
  RichTextHeading1,
  RichTextHeading2,
  RichTextHeading3,
  RichTextHeading4,
  RichTextHeading5,
  RichTextHeading6,
  RichTextUnorderedList,
  RichTextOrderedList,
  RichTextListItem,
  RichTextQuote,
  RichTextHorizontalRule,
  RichTextLink,
  RichTextParagraph
} from '@psu-flex/psu-global-ui';
import React, { ReactNode } from 'react';
import parse, { HTMLReactParserOptions, Element, domToReact, DOMNode } from 'html-react-parser';

export const RichTextDrupalParser = (richTextRaw, parserOptions = {}) => {
  const { id, bodyVariant, h1Variant, h2Variant, h3Variant, h4Variant, h5Variant, h6Variant } = parserOptions;
  let firstNode: number | null = null;
  const options: HTMLReactParserOptions = {
    replace: (domNode, index) => {
      if (domNode instanceof Element && domNode.attribs) {
        const children = domNode.children as DOMNode[];
        switch (domNode.name) {
          case 'p':
            firstNode = firstNode ?? index;
            const isLastNode = domNode?.next?.next?.name !== 'p';
            return <RichTextParagraph variant={bodyVariant} isLastNode={isLastNode}>{domToReact(children, options)}</RichTextParagraph>

          case 'drupal-media':
            firstNode = firstNode ?? index;
            return React.createElement(Body, {}, domNode.attribs['data-entity-uuid']);

          case 'blockquote':
            firstNode = firstNode ?? index;
            return <RichTextQuote>{domToReact(children, options)}</RichTextQuote>

          case 'h1':
            firstNode = firstNode ?? index;
            return <RichTextHeading1 variant={h1Variant} isFirstNode={firstNode === index}>{domToReact(children)}</RichTextHeading1>

          case 'h2':
            firstNode = firstNode ?? index;
            return <RichTextHeading2 variant={h2Variant} isFirstNode={firstNode === index}>{domToReact(children)}</RichTextHeading2>

          case 'h3':
            firstNode = firstNode ?? index;
            return <RichTextHeading3 variant={h3Variant}>{domToReact(children)}</RichTextHeading3>

          case 'h4':
            firstNode = firstNode ?? index;
            return <RichTextHeading4 variant={h4Variant}>{domToReact(children)}</RichTextHeading4>

          case 'h5':
            firstNode = firstNode ?? index;
            return <RichTextHeading5 variant={h5Variant}>{domToReact(children)}</RichTextHeading5>

          case 'h6':
            firstNode = firstNode ?? index;
            return <RichTextHeading6 variant={h6Variant}>{domToReact(children)}</RichTextHeading6>

          case 'hr':
            firstNode = firstNode ?? index;
            return <RichTextHorizontalRule/>

          case 'a':
            firstNode = firstNode ?? index;
            return <RichTextLink to={domNode.attribs.href}>{domToReact(children)}</RichTextLink>

          case 'li':
            firstNode = firstNode ?? index;
            return (
              <div sx={{
                'li: first-line': {
                  textAlign: 'inherit',
                  fontSize: '1.125rem',
                  fontFamily: 'Roboto, Arial, Tahoma, sans-serif',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: 'normal',
                  color: 'var(--theme-ui-colors-coalyGray)',
                }
              }}>
                <RichTextListItem>{domToReact(children, options)}</RichTextListItem>
              </div>
            )

          case 'ul':
            firstNode = firstNode ?? index;
            return <RichTextUnorderedList>{domToReact(children, options)}</RichTextUnorderedList>

          case 'ol':
            firstNode = firstNode ?? index;
            return <RichTextOrderedList>{domToReact(children, options)}</RichTextOrderedList>

          case 'table':
            firstNode = firstNode ?? index;
            // Strip out styling that is added by Drupal to the table tags.
            return <table>{domToReact(children, options)}</table>

          case 'td':
            firstNode = firstNode ?? index;
            return <td><RichTextParagraph variant={bodyVariant} isLastNode={false}>{domToReact(children, options)}</RichTextParagraph></td>

          case 'th':
            firstNode = firstNode ?? index;
            return <th><RichTextParagraph variant={bodyVariant} isLastNode={false}>{domToReact(children, options)}</RichTextParagraph></th>
        }
      }
    },
  }
  return <>{parse(richTextRaw, options)}</>
}
