import React, { FC, useId } from 'react';

export const useHocId = (Component: FC<any>) => {
  return Component.displayName && `${Component.displayName + '-' + useId()}`;
};
