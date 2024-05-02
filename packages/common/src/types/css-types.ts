type AlignTypes = 'center' | 'end' | 'start';
type JustifyTypes =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';
type TextAlignTypes = 'center' | 'inherit' | 'justify' | 'left' | 'right';
type FlexDirections = 'row' | 'row-reverse' | 'column' | 'column-reverse';
type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
type JustifyContents =
  | 'flex-start'
  | 'center'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

export type {
  JustifyContents,
  AlignTypes,
  AlignItems,
  FlexDirections,
  TextAlignTypes,
  JustifyTypes,
};
