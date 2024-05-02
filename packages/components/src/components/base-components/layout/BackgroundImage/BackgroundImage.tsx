/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithChildren } from '@psu-flex/common-ui';
import { BackgroundImageProps } from './BackgroundImageProps';
import { Flex } from '@psu-flex/core-ui';

/** BackgroundImage allows us to wrap the component in a full width image */

export const BackgroundImage = ({
  image,
  children,
}: WithChildren<BackgroundImageProps>) => {
  return (
    <Flex
      className="w-full bg-cover bg-center bg-no-repeat"
      extraSx={{
        backgroundImage: () => `url(${image})`,
      }}
    >
      {children}
    </Flex>
  );
};
