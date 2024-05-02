import { BaseProps } from '@psu-flex/common-ui';

export type UploadProps = BaseProps & {
  /** Acceptable file types can be specified with the accept attribute'*/
  accept?: string;
  /** If true, user can select multiple files to upload */
  multiple?: boolean;
};
