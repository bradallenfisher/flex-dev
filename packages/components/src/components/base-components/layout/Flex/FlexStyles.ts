import { FlexVariants } from './FlexTypes';

export const flexVariants: Record<FlexVariants, object> = {
  //soon to be deprecated
  wrap: {
    flexWrap: 'wrap',
  },

  //soon to be deprecated
  nowrap: {
    flexWrap: 'nowrap',
  },

  //soon to be deprecated
  start: {
    alignItems: 'flex-start',
  },

  //soon to be deprecated
  baseline: {
    alignItems: 'baseline',
  },

  //soon to be deprecated
  col: {
    flexDirection: 'column',
  },

  //soon to be deprecated
  itemsEnd: {
    alignItems: 'flex-end',
  },

  //soon to be deprecated
  justifyEnd: {
    justifyContent: 'flex-end',
  },

  //soon to be deprecated
  stretch: {
    alignItems: 'stretch',
  },

  colStart: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  spaceBetween: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  center: {
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  responsive: {
    flexDirection: ['column', 'column', 'row', 'row'],
  },
};
