import { keyframes } from '@emotion/react';

const hiddenSx = {
  opacity: '0%',
  transition: 'opacity .0s ease-out',
  height: '0px',
  visibility: 'hidden',
  pointerEvents: 'none',
  p: 0,
};

const showSx = {
  transition: 'opacity .4s ease-out',
  opacity: '100%',
  height: '100%',
  visibility: 'visible',
  pointerEvents: 'auto',
};

const bannerAlertVariants = {
  urgent: {
    backgroundColor: 'alertUrgent',
    icon: 'warning',
  },
  immediate: {
    backgroundColor: 'alertImmediate',
    icon: 'priorityDiamond',
  },
  allClear: {
    backgroundColor: 'alertAllClear',
    icon: 'priorityCircle',
  },
  nonEmergency: {
    backgroundColor: 'alertNonEmergency',
    icon: 'priorityCircle',
  },
};

export { showSx, hiddenSx, bannerAlertVariants };
