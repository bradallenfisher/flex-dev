export type BackgroundColorVariants =
  | 'slateMaxLight'
  | 'limestoneMaxLight'
  | 'limestone'
  | 'nittanyNavy'
  | 'white';

export interface BackgroundWrapperProps {
  variant?: BackgroundColorVariants;
  hasFixedHeight?: boolean;
}
