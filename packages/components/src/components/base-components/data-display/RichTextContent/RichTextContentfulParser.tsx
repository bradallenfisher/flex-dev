/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useEffect, useState } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { useContentfulInspectorMode } from '@contentful/live-preview/react';
import {
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
  RichTextParagraph,
  RichTextTableHeadRow,
  RichTextTableBodyRow,
  RichTextTable,
} from './RichTextContent';
import { getEmbeddedEntryBlocks } from './richTextUtilities';
const contentful = require('contentful');

//TODO this will need added to client package
const contentfulClient = contentful.createClient({
  space: '7y2bwuofpora',
  accessToken: 'yUVIt2coT6B89Q9wsu8AvaVvefTSANNCJsnrzNoBrL8',
});

const checkIsLastNode = (node: any, richTextRaw: any) =>
  richTextRaw.content[richTextRaw.content.length - 1] === node;

const checkIsFirstNode = (node: any, richTextRaw: any) =>
  richTextRaw.content[0] === node;

export const RichTextContentfulParser = (richTextRaw, parserOptions = {}) => {
  const {
    id,
    bodyVariant,
    h1Variant,
    h2Variant,
    h3Variant,
    h4Variant,
    h5Variant,
    h6Variant,
    tableCaption,
    tableSummary,
    assetMap,
  } = parserOptions as any;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => (
        <RichTextParagraph
          isLastNode={checkIsLastNode(node, richTextRaw)}
          variant={bodyVariant}
        >
          {children}
        </RichTextParagraph>
      ),
      [BLOCKS.HEADING_1]: (node: any, children: React.ReactNode) => (
        <RichTextHeading1
          variant={h1Variant}
          isFirstNode={checkIsFirstNode(node, richTextRaw)}
        >
          {children}
        </RichTextHeading1>
      ),
      [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => (
        <RichTextHeading2
          variant={h2Variant}
          isFirstNode={checkIsFirstNode(node, richTextRaw)}
        >
          {children}
        </RichTextHeading2>
      ),
      [BLOCKS.HEADING_3]: (node: any, children: React.ReactNode) => (
        <RichTextHeading3 variant={h3Variant}>{children}</RichTextHeading3>
      ),
      [BLOCKS.HEADING_4]: (node: any, children: React.ReactNode) => (
        <RichTextHeading4 variant={h4Variant}>{children}</RichTextHeading4>
      ),
      [BLOCKS.HEADING_5]: (node: any, children: React.ReactNode) => (
        <RichTextHeading5 variant={h5Variant}>{children}</RichTextHeading5>
      ),
      [BLOCKS.HEADING_6]: (node: any, children: React.ReactNode) => (
        <RichTextHeading6 variant={h6Variant}>{children}</RichTextHeading6>
      ),
      [BLOCKS.UL_LIST]: (node: any, children: React.ReactNode) => (
        <RichTextUnorderedList>{children}</RichTextUnorderedList>
      ),
      [BLOCKS.OL_LIST]: (node: any, children: React.ReactNode) => (
        <RichTextOrderedList>{children}</RichTextOrderedList>
      ),
      [BLOCKS.LIST_ITEM]: (node: any, children: React.ReactNode) => (
        <RichTextListItem>{children}</RichTextListItem>
      ),
      [BLOCKS.QUOTE]: (node: any, children: React.ReactNode) => (
        <RichTextQuote>{children}</RichTextQuote>
      ),
      [BLOCKS.HR]: (node: any, children: React.ReactNode) => (
        <RichTextHorizontalRule />
      ),
      [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
        <RichTextLink to={`${node.data.uri}`}>{children}</RichTextLink>
      ),
      [BLOCKS.TABLE_ROW]: (node, children) => {
        if (children.every((node) => node.type === 'th')) {
          // all children are header cells, so we should wrap the row
          // with a <thead /> tag
          return <RichTextTableHeadRow>{children}</RichTextTableHeadRow>;
        } else {
          // not a header row, so we can render an ordinary <tr />
          return <RichTextTableBodyRow>{children}</RichTextTableBodyRow>;
        }
      },
      [BLOCKS.TABLE]: (node, children) => {
        return (
          <RichTextTable
            children={children}
            tableSummary={tableSummary}
            tableCaption={tableCaption}
          />
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: any, children: React.ReactNode) => {
        // ensure that the component doesn't render until the asynchronous operation is complete and the data is available.
        // managing the components state and updating it when the data fetching is done.
        const [embeddedEntryBlocks, setEmbeddedEntryBlocks] = useState(
          null as any
        );
        const entryId = node.data.target.sys.id;
        useEffect(() => {
          const fetchData = async () => {
            try {
              const entry = await contentfulClient.getEntry(entryId);
              const blocks = await getEmbeddedEntryBlocks(
                entry.sys.contentType.sys.id,
                entry.fields
              );
              setEmbeddedEntryBlocks(blocks);
            } catch (error) {
              console.error(error);
              // Handle error
            }
          };
          fetchData();
        }, [entryId]);
        return embeddedEntryBlocks;
      },
      [BLOCKS.EMBEDDED_ASSET]: (node: any, children: React.ReactNode) => {
        if (!assetMap) return;
        else {
          // find the asset in the assetMap by ID
          const asset = assetMap.get(node.data.target.sys.id);
          // render the asset accordingly
          return (
            <img
              sx={{ maxWidth: '100%' }}
              src={`${asset}`}
              alt="My image alt text"
            />
          );
        }
      },
    },
    //to add a space in contentful cms, author needs to hit shift+return
    //render text will then add a break
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  const inspectorProps = useContentfulInspectorMode({ entryId: id });

  return (
    <div {...inspectorProps({ fieldId: 'richText' })}>
      {documentToReactComponents(richTextRaw, options)}
    </div>
  );
};

//good reference https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer
