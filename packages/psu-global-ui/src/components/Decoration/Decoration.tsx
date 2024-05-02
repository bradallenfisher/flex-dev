/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, BaseProps } from '@psu-flex/core-ui';

export interface DecorationProps extends BaseProps {}

export const Decoration = ({ ...props }: DecorationProps) => {
  const { extraSx, ...rest } = props;
  return (
    <div {...rest} sx={{ width: 594, height: 300, ...extraSx }}>
      <svg width="595" height="503" viewBox="0 0 595 503" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 122.909H431.089L451.88 62.4297H21.8394L1 122.909Z" stroke="#1E407C" stroke-miterlimit="10"/>
        <path d="M246.799 293.776H414.33L430.32 247.324H262.788L246.799 293.776Z" stroke="#1E407C" stroke-miterlimit="10"/>
        <path d="M359.447 192.996H527.603L557.181 107.105H389.026L359.447 192.996Z" stroke="#1E407C" stroke-miterlimit="10"/>
        <path d="M160.944 339.028H385.616L405.255 282.008H180.583L160.944 339.028Z" fill="#F0FF3E"/>
        <path d="M478.817 319.669H593.722L606.639 282.152H491.734L478.817 319.669Z" stroke="#1E407C" stroke-miterlimit="10"/>
      </svg>
    </div>
  );
};
