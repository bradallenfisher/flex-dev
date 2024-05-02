/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { MutableRefObject, useState } from 'react';
import { useRef } from 'react';
import {
  Divider,
  Grid,
  Flex,
  Icon,
  Heading,
  Body,
  useEscapeKey,
} from '@psu-flex/core-ui';
import { RichTextContent } from '@psu-flex/core-ui';
import { AccordionItemProps, AccordionProps } from './AccordionTypes';

const AccordionItem = ({
  accordionDataItem,
  handleToggle,
  open,
  i,
}: AccordionItemProps) => {
  const { question, answer } = accordionDataItem;
  const contentEl: MutableRefObject<any> = useRef<any>();

  return (
    <div key={i}>
      <Heading tag="h3" color={`${open ? 'link' : 'nittanyNavy'}`} variant={20}>
        <button
          className="flex justify-between items-center pointer list-none w-full text-left"
          sx={{
            py: 5,
            px: 4,
            fontFamily: 'inherit',
            fontWeight: 'inherit',
            fontSize: 'inherit',
            color: 'inherit',
            backgroundColor: 'transparent',
            outline: 'none',
            border: 'none',
            '&:focus': {
              backgroundColor: 'limestoneMaxLight',
            },
            '&:hover': {
              backgroundColor: 'limestoneMaxLight',
            },
          }}
          aria-controls={`sect${i}`}
          id={`AccordionItem-${i}`}
          onClick={() => handleToggle(i)}
          role="button"
          aria-expanded={open ? true : false}
        >
          {question}
          <span sx={{ pl: 6 }}>
            <Icon size={20} color="link" icon={`${open ? 'minus' : 'plus'}`} />
          </span>
        </button>
      </Heading>
      <div
        id={`sect${i}`}
        className="overflow-hidden"
        ref={contentEl}
        sx={{
          mx: 4,
          transition: 'height smooth 0.2s',
          ...(open && open
            ? {
                height: contentEl.current && contentEl.current.scrollHeight,
                visibility: 'visible',
              }
            : { height: '0px', visibility: 'hidden' }),
        }}
      >
        <RichTextContent extraSx={{ pt: 7 }} gutterY={0} richTextRaw={answer} />
      </div>
      <Divider thickness="xs" />
    </div>
  );
};

/**
 * The accordion component allows the user to show and hide question and answer format sections of related content on a page.
 *
 * ```jsx
 *     <Accordion data={data} heading="Heading" body="Body" />
 * ```
 */

export const Accordion = ({
  data,
  heading,
  body,
  totalGridColumns,
  gridColumn,
  ...props
}: AccordionProps) => {
  const [openKey, setOpenKey] = useState<number>();

  const handleToggle = (key: number): void => {
    //open clicked AccordionItem by key
    setOpenKey(openKey !== key ? key : undefined);
  };

  //close any AccordionItem that's open
  useEscapeKey(() => setOpenKey(-1));

  return (
    <Grid {...props} totalGridColumns={totalGridColumns && totalGridColumns}>
      <Flex
        direction="column"
        extraSx={{
          gridColumn: (gridColumn && gridColumn) || [
            '1/5',
            '2/8',
            '3/11',
            '3/11',
          ],
        }}
      >
        {heading && (
          <Heading role="heading" variant={32} responsiveType="full">
            {heading}
          </Heading>
        )}
        {body && (
          <Body
            extraSx={{ mt: 4, mb: [5, 6, 6, 6] }}
            variant={18}
            responsiveType="full"
          >
            {body}
          </Body>
        )}
        <Flex direction="column">
          {data?.map((item, i) => {
            return (
              <AccordionItem
                open={openKey === i}
                i={i}
                handleToggle={handleToggle}
                accordionDataItem={item}
              />
            );
          })}
        </Flex>
      </Flex>
    </Grid>
  );
};
