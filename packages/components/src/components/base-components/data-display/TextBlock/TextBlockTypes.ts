import { BaseProps } from '@psu-flex/common-ui';
import { VariableGridComponentOneItem } from '@psu-flex/common-ui';
import { RichTextJsonStructure } from '@psu-flex/common-ui';

export interface TextBlockProps
  extends BaseProps,
    VariableGridComponentOneItem {
  /** Rich text field data*/
  data: RichTextJsonStructure;
  /** Asset map used to hold all assets on a given space. This is used to access embedded images by entry id*/
  assetMap?: any;
}
