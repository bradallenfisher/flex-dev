/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Colors } from '@psu-flex/platform-theme';
/**
 * 

Use PopoverArrow to present your design and content as clearly and efficiently as possible.

<br>
<br>
<h3>Basic PopoverArrow</h3>
*/

export interface PopoverArrow {
  className?: string;
  color?: Colors;
  menuWidth?: string;
}

export const PopoverArrow = ({
  className,
  color = 'white',
  menuWidth,
}: PopoverArrow) => {
  return (
    <div sx={{ width: menuWidth && menuWidth, height: '7px' }}>
      <span
        className={className}
        sx={{
          zIndex: 1000,
          backgroundColor: `${color as string}`,
          height: '25px',
          left: 4,
          width: '25px',
          transform: 'rotate(45deg)',
        }}
      ></span>
    </div>
  );
};
