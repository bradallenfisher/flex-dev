import { keyframes } from '@emotion/react';

const arrowSize = '6px';
const backgroundColor = 'coalyGray';

export const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const tooltipPlacementKeyMap = (tooltipMargin) => ({
  top: {
    top: `-${tooltipMargin}`,
    '&:before': {
      top: '100%',
      borderTopColor: `${backgroundColor}`,
    },
  },
  bottom: {
    bottom: `-${tooltipMargin}`,
    '&:before': {
      bottom: '100%',
      borderBottomColor: `${backgroundColor}`,
    },
  },
  left: {
    left: 'auto',
    right: `calc(100% + ${tooltipMargin})`,
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
    '&:before': {
      left: 'auto',
      right: `calc(${arrowSize} * -2)`,
      top: '50%',
      transform: 'translateX(0) translateY(-50%)',
      borderLeftColor: `${backgroundColor}`,
    },
  },
  right: {
    right: 'auto',
    left: `calc(100% + ${tooltipMargin})`,
    top: '50%',
    transform: 'translateX(0) translateY(-50%)',
    '&:before': {
      right: 'auto',
      left: `calc(${arrowSize} * -1)`,
      top: '50%',
      transform: 'translateX(0) translateY(-50%)',
      borderRightColor: `${backgroundColor}`,
    },
  },
});

export const tooltipBaseSx: any = (arrow) => ({
  borderRadius: 'xs',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: 2,
  fontSize: 14,
  color: 'white',
  background: `${backgroundColor}`,
  '&::before': {
    content: arrow ? '" "' : 'unset',
    left: '50%',
    border: 'solid transparent',
    position: 'absolute',
    borderWidth: `${arrowSize}`,
    marginLeft: `calc(${arrowSize} * -1)`,
  },
});
