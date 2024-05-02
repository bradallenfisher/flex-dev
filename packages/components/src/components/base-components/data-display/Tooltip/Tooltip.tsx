/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useState } from 'react';
import { TooltipProps } from './TooltipTypes';
import { WithChildren } from '@psu-flex/common-ui';
import { tooltipPlacementKeyMap, tooltipBaseSx, fade } from './TooltipStyles';

export const Tooltip = ({
  showDelay = 200,
  hideDelay = 0,
  placement = 'top',
  tooltipMargin = '45px',
  content,
  arrow = true,
  extraContainerSx,
  extraTooltipSx,
  ...props
}: WithChildren<TooltipProps>) => {
  const [active, setActive] = useState(false);

  let timeout;
  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, showDelay);
  };

  const hideTip = () => {
    clearInterval(timeout);
    timeout = setTimeout(() => {
      setActive(false);
    }, hideDelay);
  };

  return (
    <div
      sx={{
        ...extraContainerSx,
      }}
      className="inline-block relative"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <span
          className="absolute z-top nowrap pointer-events-none"
          sx={{
            animationName: `${fade}`,
            animationDuration: '.15s',
            ...tooltipBaseSx(arrow),
            ...tooltipPlacementKeyMap(tooltipMargin)[placement],
            ...extraTooltipSx,
          }}
        >
          {content}
        </span>
      )}
    </div>
  );
};
