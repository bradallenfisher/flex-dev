import { CtaButton, Flex } from '@psu-flex/core-ui';
import { variantKeyMap } from './ButtonGroupStyles';
import { ButtonGroupProps } from './ButtonGroupTypes';

/** ButtonGroup is a Primary and Secondary cta in a row. Both are optional, so either can exist without the other*/
export const ButtonGroup = ({
  ctaTo,
  ctaText,
  secondaryCtaTo,
  secondaryCtaText,
  withIconCta,
  buttonGroupVariant = 'link',
  ctaSize = 'sm',
  ...props
}: ButtonGroupProps) => {
  const { extraSx, hocId, ...rest } = props;

  return (
    <Flex wrap extraSx={{ ...extraSx }} {...rest} gap={2}>
      {ctaText && (
        <CtaButton
          size={ctaSize}
          hocId={hocId}
          variant={variantKeyMap[buttonGroupVariant]['primaryButton']}
          endIcon={withIconCta ? 'chevronRight' : undefined}
          to={ctaTo}
        >
          {ctaText}
        </CtaButton>
      )}
      {secondaryCtaText && (
        <CtaButton
          size={ctaSize}
          hocId={hocId}
          to={secondaryCtaTo}
          variant={variantKeyMap[buttonGroupVariant]['secondaryButton']}
        >
          {secondaryCtaText}
        </CtaButton>
      )}
    </Flex>
  );
};
