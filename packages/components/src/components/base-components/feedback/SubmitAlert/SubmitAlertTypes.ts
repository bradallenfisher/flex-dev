import { BaseProps } from '@psu-flex/common-ui';

type SubmitAlertVariants = 'error' | 'success';

export interface SubmitAlertProps extends BaseProps {
  alertTitle: string;
  variant?: SubmitAlertVariants;
}
