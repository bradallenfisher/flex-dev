const twoCardGridItemSx = {
  gridColumn: ['1 / span 4', '1 / span 8', '3 / span 8', '3 / span 8'],
  display: 'grid',
  gridTemplateColumns: [
    'repeat(4, 1fr)',
    'repeat(8, 1fr)',
    'repeat(8, 1fr)',
    'repeat(8, 1fr)',
  ],
  gap: [3, 4, 5, 7],
  rowGap: [6, 4, 5, 7],
};

const gapSizeKeyMap: any = {
  sm: [6, 4, 5, 7],
  md: [6, 6, 6, 6],
};

export { twoCardGridItemSx, gapSizeKeyMap };
