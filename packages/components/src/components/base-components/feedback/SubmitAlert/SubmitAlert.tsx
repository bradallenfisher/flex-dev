/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { IconVariants } from '../../data-display/Icon/IconTypes';
import { WithChildren } from '@psu-flex/common-ui';
import { Flex } from '../../layout/index';
import { SubmitAlertProps } from './SubmitAlertTypes';
import { Heading, Icon } from '../../data-display/index';
import { submitAlertVariants } from './SubmitAlertStyles';

/** A SubmitAlert displays a short, important message usually intended for a form submission */

export const SubmitAlert = ({
  alertTitle,
  variant = 'success',
  ...props
}: WithChildren<SubmitAlertProps>) => {
  const { extraSx, children, ...rest } = props;

  return (
    <div
      sx={{
        py: 6,
        px: 4,
        borderRadius: 'xs',
        ...extraSx,
        backgroundColor: submitAlertVariants[variant].backgroundColor,
      }}
      {...rest}
    >
      <Flex>
        <Icon
          size={24}
          color="coalyGray"
          icon={submitAlertVariants[variant].icon as IconVariants}
        />
        <Flex gap={1} direction="column" extraSx={{ ml: 4 }}>
          <Heading tag="h3" variant={18} color="coalyGray">
            {alertTitle}
          </Heading>
          {children}
        </Flex>
      </Flex>
    </div>
  );
};
