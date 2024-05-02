/** @jsxRuntime classic */
/** @jsx jsx */
import { forwardRef } from 'react';
import { jsx } from 'theme-ui';
import { WithChildren } from '@psu-flex/common-ui';
import { GridProps } from './GridTypes';

/**CSS grid layout component to arrange direct child elements in a tiled grid layout. The Grid component includes custom props for adjusting the grid layout. Each prop can use the responsive array syntax for mobile-first responsive styles.
 *
 * ```jsx
 * <Grid>
      <div sx={{ gridColumn: ['auto / span 4'] }}>
        <h2>Grid Item 1</h2>
      </div>
      <div sx={{ gridColumn: ['auto / span 4'] }}>
        <h2>Grid Item 2</h2>
      </div>
      <div sx={{ gridColumn: ['auto / span 4'] }}>
        <h2>Grid Item 3</h2>
      </div>
    </Grid>
    ```
 */

export const Grid = forwardRef(function Grid(
  {
    gap = [3, 4, 5, 7],
    totalGridColumns = [4, 8, 12, 12],
    ...props
  }: WithChildren<GridProps>,
  ref: any
) {
  const { extraSx, ...rest } = props;

  // check if totalGridColumns is responsive and set accordingly
  let gridTemplateColumns: any;
  if (Array.isArray(totalGridColumns)) {
    // If totalGridColumns is an array, map over each item to set gridTemplateColumns
    gridTemplateColumns = totalGridColumns.map((col) => `repeat(${col}, 1fr)`);
  } else {
    // If totalGridColumns is not an array, set gridTemplateColumns using the single totalGridColumns value
    gridTemplateColumns = `repeat(${totalGridColumns}, 1fr)`;
  }

  return (
    <div
      ref={ref && ref}
      sx={{
        display: 'grid',
        gridTemplateColumns: gridTemplateColumns,
        gap: gap && gap,
        ...extraSx,
      }}
      {...rest}
    />
  );
});
