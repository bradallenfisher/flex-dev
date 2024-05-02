import { ComponentSpacingProps } from '../types';

//utility function used to extract any spacing props from props object. these can then be used to target any element needed inside a component
export const useSpacing = (props: ComponentSpacingProps) => {
  return {
    my: props.my && props.my,
    mx: props.mx && props.mx,
    py: props.py && props.py,
    px: props.px && props.px,
  };
};
