import { BaseProps } from '@psu-flex/common-ui';

export interface ModalProps extends BaseProps {
  /**If true, the modal will have a close button. */
  hasCloseButton?: boolean;
  /**If true, the component is shown. */
  isOpen: boolean;
  /** Callback function used to close modal*/
  onClose?: () => void;
  /** If your modal doesn't require the user to make a confirmation, you can set isDismissable on the Modal. This allows the user to click outside to close the dialog. */
  dismissable?: boolean;
}
