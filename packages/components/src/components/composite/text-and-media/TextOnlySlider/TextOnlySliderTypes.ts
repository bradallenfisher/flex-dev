import { DividerColors } from '../../../base-components/data-display/Divider/DividerTypes';

export interface TextOnlySliderProps {
  /**image data for the slider*/
  sliderData: any[];
  /** variant for slider */
  sliderVariant: 'white' | 'navy';
  /** dividerColor for slider */
  dividerColor: DividerColors;
}
