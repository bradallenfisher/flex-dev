/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui';
import React, { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import { RichTextContentProps } from './RichTextContentTypes';
import { RichTextParser } from '../../../Contexts';
import { Body, Divider, Heading } from '../../data-display/index';
import { Link } from '../../navigation/index';
import { Flex } from '../../layout/index';
import { Modal, useModal } from '../../feedback';
import './RichTextTableStyles/richTextTables.css';
import {
  mobileTbodyStyles,
  tableBodyRowStyles,
  tableHeadRowStyles,
  tHeadStyles,
} from './RichTextTableStyles/richTextTablesSx';
import { populateMobileTableSlots } from './richTextUtilities';
export const RichTextParagraph = ({
  variant,
  children,
  isLastNode = false,
}) => (
  <Body
    extraSx={{
      mb: isLastNode ? 0 : [3, 3, 4, 4],
    }}
    variant={variant}
  >
    {children}
  </Body>
);

export const RichTextHeading1 = ({
  variant,
  children,
  isFirstNode = false,
}) => (
  //using h1 tag here since its custom styling that conflicts with style guide for Heading tokens
  <h1
    sx={{
      color: 'nittanyNavy',
      mt: isFirstNode ? 0 : 12,
      mb: [6, 6, 8, 8],
      ...(variant
        ? { variant: `text.headingStyle.full.${variant}` }
        : {
            fontFamily: 'serif',
            lineHeight: '120',
            fontSize: [32, 36, 40, 48],
          }),
    }}
  >
    {children}
  </h1>
);

export const RichTextHeading2 = ({
  variant,
  children,
  isFirstNode = false,
}) => (
  <Heading
    tag="h2"
    extraSx={{
      mb: [3, 3, 4, 4],
      mt: isFirstNode ? 0 : 2,
    }}
    variant={variant}
  >
    {children}
  </Heading>
);

export const RichTextHeading3 = ({ variant, children }) => (
  <Heading
    tag="h3"
    extraSx={{ mb: [3, 3, 4, 4], fontWeight: 500 }}
    variant={variant}
  >
    {children}
  </Heading>
);

export const RichTextHeading4 = ({ variant, children }) => (
  <Heading tag="h4" extraSx={{ mb: [3, 3, 4, 4] }} variant={variant}>
    {children}
  </Heading>
);

export const RichTextHeading5 = ({ variant, children }) => (
  <Heading tag="h5" extraSx={{ mb: [3, 3, 4, 4] }} variant={variant}>
    {children}
  </Heading>
);

export const RichTextHeading6 = ({ variant, children }) => (
  <Heading
    tag="h6"
    extraSx={{ mb: [3, 3, 4, 4], fontWeight: 500 }}
    variant={variant}
  >
    {children}
  </Heading>
);

export const RichTextUnorderedList = ({ children }) => (
  <ul
    className="flex-col"
    sx={{
      gap: 4,
      '& > li': { pl: 2 },
      '& li': { fontSize: '1.4rem' },
      my: [5, 5, 7, 7],
    }}
  >
    {children}
  </ul>
);

export const RichTextOrderedList = ({ children }) => (
  <ol className="flex-col" sx={{ '& > li': { pl: 3 }, gap: 4, my: 10 }}>
    {children}
  </ol>
);

export const RichTextListItem = ({ children }) => (
  <li sx={{ ml: [15, 18, 21, 24], '& > p': { m: 0 } }}>{children}</li>
);

export const RichTextQuote = ({ children }) => (
  <Flex
    gutterY={4}
    gap={5}
    extraSx={{
      '& > p': { py: 2, mb: 0, fontStyle: 'italic', fontSize: 20 },
    }}
  >
    <Divider
      extraSx={{
        ml: [5, 7, 7, 7],
      }}
      thickness="lg"
      orientation="vertical"
      color="pughBlue"
    />
    {children}
  </Flex>
);

export const RichTextHorizontalRule = () => (
  <Divider
    extraSx={{ mt: [4, 4, 5, 5], mb: [7, 7, 9, 9] }}
    thickness="xs"
    size="full"
    color="limestoneLight"
  />
);

export const RichTextLink = ({ to, children }) => (
  <Link extraSx={{ fontWeight: 'bold' }} to={to}>
    {children}
  </Link>
);

export const RichTextTableBodyRow = ({ children, ...props }) => {
  return (
    <tr
      {...props}
      sx={{
        ...tableBodyRowStyles,
      }}
    >
      {children}
    </tr>
  );
};

export const RichTextTableHeadRow = ({ children, ...props }) => {
  return (
    <tr
      {...props}
      sx={{
        ...tableHeadRowStyles(children.length),
      }}
    >
      {children}
    </tr>
  );
};

export const RichTextTable = ({ children, tableCaption, tableSummary }) => {
  const [modalContentState, setModalContentState] = useState(null);
  const { isModalOpen, openModal, closeModal } = useModal(false);
  const offCanvasRef = useRef(null);
  const theadChildren: any = [];
  const tbodyChildren: any = [];

  children.forEach((child: any, index) => {
    if (child.props.children.every((node) => node.type === 'th')) {
      // All children are header cells, so add to the theadChildren array
      theadChildren.push(child);
    } else {
      // Not all children are header cells, add to the tbodyChildren array
      tbodyChildren.push(child);
    }
  });

  useEffect(() => {
    // grab mobileTableHeads only when modal is open
    if (isModalOpen) {
      const mobileTableHeads = theadChildren[0]?.props?.children.map(
        (item) => item.props?.children[0]?.props?.children[0][1]
      );
      populateMobileTableSlots(
        modalContentState,
        offCanvasRef,
        mobileTableHeads
      );
    }
  }, [isModalOpen, modalContentState, theadChildren]);

  return (
    <>
      {tableCaption && (
        <p
          id="tblDesc"
          className="text-left"
          sx={{
            mb: [4, 4, 5, 5],
            variant: 'text.headingStyle.full.24',
            color: 'nittanyNavy',
          }}
        >
          {tableCaption}
        </p>
      )}
      <div
        sx={{
          maxHeight: ['540px', '800px', '540px', '600px'],
          borderWidth: 'xs',
          borderColor: 'limestoneLight',
          borderStyle: 'solid',
          borderTopWidth: '0px',
        }}
        className="overflow-auto"
      >
        <table className="w-full border-collapse" aria-describedby="tblDesc">
          {theadChildren.length > 0 && (
            <thead
              sx={{
                ...tHeadStyles,
                position: 'sticky',
                top: 0,
                zIndex: 10000,
                boxShadow: 'sm-1',
              }}
            >
              {theadChildren}
            </thead>
          )}
          {/* desktop tbody */}
          {tbodyChildren.length > 0 && (
            <tbody className="hidden-below-lg">{tbodyChildren}</tbody>
          )}
          {/* mobile tbody */}
          {/* made a mobile version since the mobile rows need an onclick, and the tr is getting generated */}
          {tbodyChildren.length > 0 && (
            <tbody
              className="hidden-above-lg"
              sx={{
                ...mobileTbodyStyles,
              }}
            >
              {/* cloning each row here in order to pass the correct onClick to each unknown row */}
              {tbodyChildren.map((item, index) => {
                return React.cloneElement(item, {
                  key: index,
                  onClick: () => {
                    openModal();
                    setModalContentState(item);
                  },
                });
              })}
            </tbody>
          )}
        </table>
        {/* modal for mobile onclick */}
        <Modal
          className="hidden-above-lg"
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          <aside aria-hidden="true">
            <dl sx={{ m: 0 }} ref={offCanvasRef}>
              {/* modal content populated here*/}
            </dl>
          </aside>
        </Modal>
      </div>
      {tableSummary && (
        <Body
          variant={16}
          className="italic"
          id="tableDescription"
          extraSx={{ mt: 4 }}
        >
          {tableSummary}
        </Body>
      )}
    </>
  );
};

export const RichTextContent = ({
  id,
  gutterY = 0,
  richTextRaw,
  assetMap,
  h1Variant,
  h2Variant = 32,
  h3Variant = 28,
  h4Variant = 24,
  h5Variant = 22,
  h6Variant = 20,
  bodyVariant = 18,
  tableCaption,
  tableSummary,
  ...props
}: RichTextContentProps) => {
  const parser = useContext(RichTextParser);
  const { extraSx, ...rest } = props;
  const parserOptions = {
    id,
    gutterY,
    richTextRaw,
    assetMap,
    h1Variant,
    h2Variant,
    h3Variant,
    h4Variant,
    h5Variant,
    h6Variant,
    bodyVariant,
    tableCaption,
    tableSummary,
  };
  return (
    <div
      sx={{
        my: gutterY as number,
        //adds increased margin between paragraphs & headings for contentful
        '& > div > p + h1, & > div > p + h2, & > div > p + h3, & > div > p + h4, & > div > p + h5, & > div > p + h6':
          {
            mt: [6, 6, 8, 8],
          },
        //adds increased margin between paragraphs & headings for drupal
        '&  > p + h1, &  > p + h2, &  > p + h3, & > p + h4, & > p + h5, & > p + h6':
          {
            mt: [6, 6, 8, 8],
          },
        ...extraSx,
      }}
      {...rest}
    >
      {parser(richTextRaw, parserOptions)}
    </div>
  );
};
