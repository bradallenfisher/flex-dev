/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { WithChildren } from '@psu-flex/common-ui';
import { SectionProps } from './SectionTypes';

/**You can use the Section to divide up a web page into standalone sections of related content.
 * Section should be the most outer wrapper on a component.
 */
export const Section = ({ extraSx, ...props }: WithChildren<SectionProps>) => {
  return (
    <section
      sx={{
        width: '100%',
        mx: ['auto'],
        height: '100%',
        ...extraSx,
      }}
      {...props}
    />
  );
};
