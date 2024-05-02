import React from 'react';

interface BaseProps extends React.HTMLAttributes<any> {
  /**Style extension with exposed theme*/
  extraSx?: {};
  /**Any extra styling for functional components should be included in extraSx prop instead of sx. Sx is reserved or native html elements*/
  sx?: never;
}

interface BaseWithTag extends BaseProps {
  /**The component used for the root node. Either a string to use a HTML element or a component. */
  tag?: React.ElementType | React.FC;
}

interface InnerComponent {
  /**High order component id. Generally used to append to base element id or attach to higher order component's outermost element*/
  hocId?: string;
}

type WithChildren<T = {}> = T & {
  children?: React.ReactNode | React.ReactNode[];
};

export type { InnerComponent, BaseWithTag, BaseProps, WithChildren };
