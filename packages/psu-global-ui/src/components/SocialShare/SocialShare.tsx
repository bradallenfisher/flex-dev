/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, IconButton } from '@psu-flex/core-ui';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
} from 'react-share';
import {
  IconButtonSizes,
  IconButtonTypes,
  IconButtonVariants,
} from '@psu-flex/core-ui';

export type SocialShareProps = {
  title: string;
  size?: IconButtonSizes;
  variant?: IconButtonVariants;
  type?: IconButtonTypes;
  direction?: 'vertical' | 'horizontal';
  extraSx?: Record<string, any>;
};

export const SocialShare = ({
  title,
  size = 'sm',
  variant = 'beaverBlue',
  type = 'filled',
  direction = 'horizontal',
  extraSx = {},
  ...props
}: SocialShareProps) => {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const handlePrintButtonClick = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const defaultButtonProps = { type, variant, size };
  return (
    <Flex
      gap={2}
      variant={direction === 'horizontal' ? 'center' : 'col'}
      extraSx={{
        width: 'fit-content',
        p: 4,
        ...extraSx,
      }}
      {...props}
    >
      <FacebookShareButton url={url}>
        <IconButton {...defaultButtonProps} icon="facebook" />
      </FacebookShareButton>
      <TwitterShareButton url={url}>
        <IconButton {...defaultButtonProps} icon="twitter" />
      </TwitterShareButton>
      <LinkedinShareButton url={url}>
        <IconButton {...defaultButtonProps} icon="linkedIn" />
      </LinkedinShareButton>
      <EmailShareButton url={url} subject={title}>
        <IconButton {...defaultButtonProps} icon="email" />
      </EmailShareButton>
      <IconButton
        {...defaultButtonProps}
        icon="print"
        onClick={handlePrintButtonClick}
      />
    </Flex>
  );
};
