"use client"

import { DrupalParagraph } from "next-drupal"
import { Table, TableProps, Wrapper } from "@psu-flex/psu-global-ui"

export interface ParagraphTableProps extends DrupalParagraph {
  body: {
    value: string
  }
  field_title?: string
  field_enable_filter?: boolean
}

export function ParagraphTable(paragraph: ParagraphTableProps) {
  const tableMarkup = paragraph.body.value
  const props: TableProps = {
    headers: [],
    data: [],
    heading: paragraph?.field_title ?? '',
    search: paragraph?.field_enable_filter ?? false,
  }

  const markupContainer = document.createElement('document');
  markupContainer.innerHTML = tableMarkup;
  markupContainer.querySelectorAll('tr').forEach((row, rowIndex) => {
    const data: Record<string, string> = {};
    row.querySelectorAll('td,th').forEach((column, columnIndex) => {
      data[columnIndex.toString()] = column.innerHTML.trim();
    });
    if (row.parentNode?.nodeName === 'THEAD' || rowIndex === 0) {
      props.headers = Object.values(data);
      return;
    }
    props.data.push(data);
  });

  return (
    <Wrapper>
      <Table {...props} />
    </Wrapper>
  )
}
