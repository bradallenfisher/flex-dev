/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithChildren } from '@psu-flex/common-ui';
import { BackgroundWrapperProps } from './BackgroundWrapperProps';
import { useBreakpoints } from '@psu-flex/utility-hooks';

/** BackgroundWrapper allows us to wrap the component in a full width standard background color */

export const BackgroundWrapper = ({
  variant = 'white',
  hasFixedHeight = false,
  children,
}: WithChildren<BackgroundWrapperProps>) => {
  const { isLg, isXl, is2xl } = useBreakpoints();

  return (
    <div
      sx={{
        py:
          variant === 'white' || (hasFixedHeight && (is2xl || isXl || isLg))
            ? 0
            : [10, 15, 15, 15],
        pt: `${hasFixedHeight ? '15px' : '0px'}`,
        my: [8, 12, 12, 12],
        backgroundColor: variant,
      }}
    >
      {children}
    </div>
  );
};
