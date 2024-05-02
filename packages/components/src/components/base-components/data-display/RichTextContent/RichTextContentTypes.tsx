import { BaseProps } from '@psu-flex/common-ui';
import { Spaces } from '@psu-flex/platform-theme';
import { RichTextJsonStructure } from '@psu-flex/common-ui';
import { BodyVariants } from '../Typography/Body/BodyTypes';
import { HeadingVariants } from '../Typography/Heading/HeadingTypes';

export interface RichTextContentProps extends BaseProps {
  /**Gutter in y direction*/
  gutterY?: Spaces;
  /**Raw data from Contentful RichText content type */
  richTextRaw: RichTextJsonStructure;
  /**Object containing array of all assets with their contentful_id's and url's */
  assetMap?: any;
  /**Style variant for h1*/
  h1Variant?: HeadingVariants;
  /**Style variant for h2*/
  h2Variant?: HeadingVariants;
  /**Style variant for h3*/
  h3Variant?: HeadingVariants;
  /**Style variant for h4*/
  h4Variant?: HeadingVariants;
  /**Style variant for h5*/
  h5Variant?: HeadingVariants;
  /**Style variant for h6*/
  h6Variant?: HeadingVariants;
  /**Style variant for body*/
  bodyVariant?: BodyVariants;
  /**Optional table caption */
  tableCaption?: string;
  /**Optional table summary */
  tableSummary?: string;
}
