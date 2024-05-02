import React, { FC } from 'react';

// Generates an id for a higher order component
export const generateHocId = (componentName: React.FC<any> | string | any) => {
  return componentName?.name ? componentName.name : componentName;
};
// Generates an id for an inner component
export const generateIcId = (
  /** React component. Used to append component displayName to id */
  componentName: React.FC<any> | string | any,
  /** Optional higher order component id. Should be passed from parent higher order component */
  hocId?: string,
  /** Optional component variant */
  variant?: string
): string => {
  return `${hocId ? hocId + '-' : ''}${
    componentName.name ? componentName.name : componentName
  }${variant ? '-' + variant : ''}`;
};
