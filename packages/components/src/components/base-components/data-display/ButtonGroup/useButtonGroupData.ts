import { ButtonGroupProps } from './ButtonGroupTypes';

//utility function used to target ButtonGroup component with props data props from the parent that is intended specifically for the ButtonGroup
export const useButtonGroupData = (props: ButtonGroupProps) => {
  return {
    ctaTo: props.ctaTo && props.ctaTo,
    ctaText: props.ctaText && props.ctaText,
    secondaryCtaTo: props.secondaryCtaTo && props.secondaryCtaTo,
    secondaryCtaText: props.secondaryCtaText && props.secondaryCtaText,
  };
};
