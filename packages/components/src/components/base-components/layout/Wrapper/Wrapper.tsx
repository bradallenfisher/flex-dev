/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithChildren } from '@psu-flex/common-ui';
import {
  contentContainerMinWidths,
  contentContainerMargins,
} from '@psu-flex/platform-theme';
import { WrapperProps } from './WrapperTypes';

/**The Wrapper automatically provides responsive margins to the left and right of the content. Wrapper should be the child of a Container*/

export const Wrapper = ({
  tag: Tag = 'div',
  extraSx,
  ...props
}: WithChildren<WrapperProps>) => {
  const { lg, xl } = contentContainerMinWidths;
  const { msm, mmd, mlg, mxl } = contentContainerMargins;
  return (
    <Tag
      sx={{
        width: ['100%', '100%', lg, xl],
        height: '100%',
        px: [msm, mmd, mlg, mxl],
        mx: ['auto'],
        ...extraSx,
      }}
      {...props}
    />
  );
};
