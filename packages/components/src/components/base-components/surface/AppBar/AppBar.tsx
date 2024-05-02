/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { gradients } from '@psu-flex/platform-theme';
import { WithChildren } from '@psu-flex/common-ui';
import { AppBarProps } from './AppBarTypes';

/**
 * The AppBar is a surface that wraps full width content at the top or bottom of the screen. Some use cases are header, footer, banner alerts, etc.
 *
 * ```jsx
 *  <AppBar gradient="navBar" position="sticky">
        ...
      </AppBar>
    ```
 */

export const AppBar = ({
  position = 'fixed',
  backgroundColor = 'nittanyNavy',
  gradient,
  tag: Tag = 'div',
  ...props
}: WithChildren<AppBarProps>) => {
  const { extraSx, children, ...rest } = props;
  return (
    <Tag
      sx={{
        position: position,
        width: '100vw',
        maxWidth: '100%',
        ...extraSx,
        ...(backgroundColor && {
          backgroundColor: backgroundColor,
          ...(gradient && {
            backgroundImage: () => `${gradients[gradient]}`,
          }),
        }),
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
