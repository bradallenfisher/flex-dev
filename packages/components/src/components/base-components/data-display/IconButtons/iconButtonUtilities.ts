//reusable size key map for consistent scaling IconButton sizes. Values used to target size in component size arrays
export const iconButtonSizeKeyMap = {
  xs: 0,
  sm: 1,
  md: 2,
  lg: 3,
  responsive: null,
};

//function to get property from sizeScaleObject. property name must match key from size scale object
export const getIconButtonSizeProperty = (
  sizeScale,
  size,
  variant,
  property
) => {
  let newProperty;
  if (size !== 'responsive') {
    const sizeIndex = iconButtonSizeKeyMap[size];
    newProperty = variant
      ? sizeScale(variant)[property][sizeIndex]
      : sizeScale()[property][sizeIndex];
  } else {
    newProperty = variant
      ? sizeScale(variant)[property]
      : sizeScale()[property];
  }
  return newProperty;
};
