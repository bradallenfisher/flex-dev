/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { DividerProps } from './DividerTypes';
import { orientationObj } from './DividerStyles';

/**Dividers separate content into clear groups.
 *
 * ```jsx
 * <Divider orientation='horizontal' color='potentialMidnight'
/>
 * ```
  Parent of divider is required to be a flex in order for width and height to be set correctly
 */

export const Divider = ({
  orientation = 'horizontal',
  dividerStyle = 'solid',
  color = 'limestoneLight',
  thickness = 'sm',
  size = 'full',
  align = 'start',
  tag: Tag = 'div',
  ...props
}: DividerProps) => {
  const { extraSx, ...rest } = props;

  return (
    <div
      className={`flex ${
        orientation === 'horizontal' ? `justify-${align}` : `items-${align}`
      } `}
    >
      <Tag
        {...rest}
        sx={{
          ...extraSx,
          ...orientationObj(dividerStyle, size, color)[orientation],
          borderWidth: `${thickness}`,
        }}
      />
    </div>
  );
};
