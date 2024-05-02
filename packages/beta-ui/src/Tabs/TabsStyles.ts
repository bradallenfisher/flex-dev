const orientationKeyMap = {
  horizontal: 'row',
  vertical: 'column',
};

const sliderSx = (tabLeft, tabHeight, tabWidth) => ({
  p: 4,
  transform: `translateX(${tabLeft}px)`,
  height: tabHeight,
  width: tabWidth,
  borderRadius: 'sm',
  transition: '0.25s ease-out',
});

export { sliderSx, orientationKeyMap };
