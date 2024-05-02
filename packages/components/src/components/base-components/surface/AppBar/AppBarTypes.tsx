import { Colors, Gradients } from '@psu-flex/platform-theme';
import { BaseWithTag } from '@psu-flex/common-ui';
export type AppBarProps = Omit<BaseWithTag, 'disabled'> & {
  /**The positioning type. The behavior of the different options is described in the MDN web docs. Note: sticky is not universally supported and will fall back to static when unavailable.*/
  position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky' | 'unset';
  /**The gradient of the component*/
  gradient?: Gradients;
  /**The backgroundColor of the component*/
  backgroundColor?: Colors | string;
};
