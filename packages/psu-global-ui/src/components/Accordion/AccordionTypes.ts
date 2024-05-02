import { BaseProps } from '@psu-flex/common-ui';
import { VariableGridComponentOneItem } from '@psu-flex/common-ui';
interface AccordionDataItem {
  question: string;
  answer: any;
}

export interface AccordionItemProps {
  /**Question and answer data object for item*/
  accordionDataItem: AccordionDataItem;
  /**Toggle function to trigger AccordionItem open state*/
  handleToggle: Function;
  /**State if AccordionItem is open or not */
  open: boolean;
  /**Index key for AccordionItem */
  i: number;
}

export interface AccordionProps
  extends VariableGridComponentOneItem,
    BaseProps {
  /**Array of AccordionDataItems */
  data: AccordionDataItem[];
  /**Heading above Accordion */
  heading?: string;
  /**Body above Accordion */
  body?: string;
}
