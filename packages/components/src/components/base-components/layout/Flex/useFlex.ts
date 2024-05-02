//utility function used to target Flex component with props from the parent that are intended specifically for the Flex
export const useFlex = props => {
  return {
    variant: props.variant && props.variant,
    gutterX: props.gutterX && props.gutterX,
    responsive: props.responsive && props.responsive,
    wrap: props.wrap && props.wrap,
    gap: props.gap && props.gap,
    gutterY: props.gutterY && props.gutterY,
    alignItems: props.alignItems && props.alignItems,
    justifyContent: props.justifyContent && props.justifyContent,
    direction: props.direction && props.direction,
    tag: props.tag && props.tag
  };
};
