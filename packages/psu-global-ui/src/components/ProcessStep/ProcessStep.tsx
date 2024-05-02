/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from 'react';

export interface ProcessStepProps {
  id?: string;
  children?: React.ReactNode;
  extraSx?: any;
}

export const ProcessStep = ({
  id,
  children,
  extraSx,
  ...props
}: ProcessStepProps) => {
  return (
    <div
      {...props}
      id={id}
      sx={{
        pb: 8,
        ...extraSx,
      }}
    >
      {children}
    </div>
  );
};
