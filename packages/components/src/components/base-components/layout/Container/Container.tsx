/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { contentContainerMinWidths } from '@psu-flex/platform-theme';
import { WithChildren } from '@psu-flex/common-ui';
import { ContainerProps } from './ContainerTypes';

/** The container centers your content horizontally. It's the most basic layout element. While containers can be nested, most layouts do not require a nested container. The container automatically sets a responsive maxWidth for its contents to fit the Grid gutters defined in theme. The Container should be the child of a Section
 *
 * ```jsx
 *  <Container extraSx={{ border: '1px dashed gray', p: 6 }}>
      <Typography>This text is wrapped by a container</Typography>
  </Container>
 * ```
 */

export const Container = ({
  tag: Tag = 'div',
  ...props
}: WithChildren<ContainerProps>) => {
  const { xl } = contentContainerMinWidths;
  const { extraSx, ...rest } = props;
  return (
    <Tag
      sx={{
        maxWidth: xl,
        mx: ['auto'],
        height: '100%',
        ...extraSx,
      }}
      {...rest}
    />
  );
};
