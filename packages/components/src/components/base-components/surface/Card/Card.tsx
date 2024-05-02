/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { CardProps } from './CardTypes';
import { LinkWrapper } from '../../navigation/index';
import { gradients } from '@psu-flex/platform-theme';
import { WithChildren, useSpacing } from '@psu-flex/common-ui';
import { Flex, useFlex } from '../../layout';
/** Cards are surfaces that display content and actions on a single topic.

```jsx
<Card dropShadow='sm-1' extraSx={{maxWidth: '420px', '&:hover': { boxShadow: 'lg-1'}} px={6} py={6}>
...
</Card>
```
*/

export const Card = ({
  backgroundImage,
  square = false,
  backgroundColor,
  borderColor,
  gradient,
  dropShadow,
  to,
  borderRadius = 'sm',
  linkWrapperSx,
  ...props
}: WithChildren<CardProps>) => {
  let flexProps = useFlex(props);
  let spacingProps = useSpacing(props);
  const { extraSx, children, hocId, ...rest } = props;

  const backgroundImageSx = {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  const BaseCard = () => {
    return (
      <Flex
        {...rest}
        {...flexProps}
        direction={flexProps.direction || 'column'}
        extraSx={{
          ...spacingProps,
          ...(!square && { borderRadius: borderRadius }),
          zIndex: 101,
          wordWrap: 'break-word',
          whiteSpace: 'pre-line',
          borderWidth: borderColor ? 'xs' : '0px',
          borderColor: borderColor && borderColor,
          borderStyle: 'solid',
          boxShadow: dropShadow && dropShadow,
          backgroundImage: () => `url(${backgroundImage})`,
          background: gradient && gradients[gradient],
          backgroundColor: backgroundColor && backgroundColor,
          ...(backgroundImage && backgroundImageSx),
          ...extraSx,
        }}
      >
        {children}
      </Flex>
    );
  };

  return (
    <React.Fragment>
      {to ? (
        <LinkWrapper
          extraSx={{ ...(linkWrapperSx && linkWrapperSx) }}
          id={hocId}
          to={to}
        >
          <BaseCard />
        </LinkWrapper>
      ) : (
        <BaseCard />
      )}
    </React.Fragment>
  );
};
