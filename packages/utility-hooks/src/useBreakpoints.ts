import { useMediaQuery } from './useMediaQuery';

//this needs hooked up to breakpoint tokens
export const useBreakpoints = () => {
  const breakpoints = {
    isSm: useMediaQuery('(max-width: 360px)'),
    isMd: useMediaQuery('(min-width: 361px) and (max-width: 767px)'),
    isLg: useMediaQuery('(min-width: 768px) and (max-width: 1079.9px)'),
    isXl: useMediaQuery('(min-width: 1080px)'),
    is2xl: useMediaQuery('(min-width: 1440px)'),
    active: 'xs',
  };
  if (breakpoints.isSm) breakpoints.active = 'sm';
  if (breakpoints.isMd) breakpoints.active = 'md';
  if (breakpoints.isLg) breakpoints.active = 'lg';
  if (breakpoints.isXl) breakpoints.active = 'xl';
  if (breakpoints.is2xl) breakpoints.active = '2xl';

  return breakpoints;
};
