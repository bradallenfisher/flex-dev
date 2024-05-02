// utility function used to merge groups of styling into one variable

export const mergeSx = (...styles: any) => {
  return styles.reduce((merged: any, style: any) => {
    return { ...merged, ...style };
  }, {});
};

// example
//   const baseSx = {
//     color: 'nittanyNavy',
//   };
//   const borderSx = {
//     borderRadius: 'sm',
//   };
//   const hoverSx = {
//     '&:hover': { backgroundColor: 'linkLight'},
//   };

// const componentSx = mergeStyles(baseSx, borderSx, hoverSx);

// <div sx={{...componentSx}}>...</div>
