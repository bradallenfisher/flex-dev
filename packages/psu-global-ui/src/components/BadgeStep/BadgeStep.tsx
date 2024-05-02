/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import * as React from "react";

export interface BadgeStepProps {
  children?: React.ReactNode;
}

export const BadgeStep = ({ children }: BadgeStepProps) => {
  return (
    <div
      sx={{
        backgroundColor: 'slateMaxLight',
        color: 'beaverBlue',
        padding: '8px 16px',
        borderRadius: '4px',
        display: 'inline-block',
        fontFamily: 'Roboto',
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '20px',
        textAlign: 'center',
        borderColor: 'slateLight',
        mb: 8,
      }}
    >
      {children}
    </div>
  );
};
