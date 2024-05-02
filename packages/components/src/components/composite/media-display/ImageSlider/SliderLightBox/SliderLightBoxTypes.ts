import { AdvanceButtonVariants } from '../../../../base-components/data-display/IconButtons/AdvanceButton/AdvanceButtonTypes';
export interface SliderLightBoxProps {
  /**variant for AdvanceButton*/
  advanceButtonVariant?: AdvanceButtonVariants;
  /**image data for the slider*/
  sliderData: any[];
  /**currently selected index. this controls what image is shown when lightbox is opened*/
  selectedIndex: number;
  /**state function that sets the isOpen lightbox state*/
  setIsOpen: Function;
}
