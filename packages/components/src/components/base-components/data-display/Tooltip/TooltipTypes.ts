import { Spaces } from '@psu-flex/platform-theme';
import { JSXElementConstructor, ReactElement } from 'react';

export type TooltipProps = {
  // Content of the tooltip
  content: string | ReactElement<any, string | JSXElementConstructor<any>>;
  // Sets the "preferred" position of the tooltip
  placement?: 'left' | 'top' | 'right' | 'bottom';
  // Set a delay period in milliseconds before showing the tooltip
  showDelay?: number;
  // Set a delay period in milliseconds before hiding the tooltip
  hideDelay?: number;
  // Margin from tooltip and element it refers to
  tooltipMargin?: string;
  // If true, adds an arrow to the tooltip.
  arrow?: boolean;
  // extra styling for tooltip container
  extraContainerSx?: any;
  // extra styling for tooltip
  extraTooltipSx?: any;
};
