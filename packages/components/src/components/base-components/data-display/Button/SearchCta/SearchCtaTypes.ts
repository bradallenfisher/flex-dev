import { ButtonProps } from '../ButtonTypes';
import { searchCtaSizeObj, searchCtaVariants } from './SearchCtaStyles';
export type SearchCtaVariants = keyof typeof searchCtaVariants;

export type SearchCtaProps = ButtonProps & {
  variant?: SearchCtaVariants;
  size?: keyof typeof searchCtaSizeObj;
};
