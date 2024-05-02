import { keyframes } from '@emotion/react';

export const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const sliderVariantProps = {
  white: {
    advanceButtonVariant: 'nittanyNavy',
    dividerColor: 'skyBlue',
    headingColor: 'beaverBlue',
    bodyColor: 'coalyGray',
    subHeadingColor: 'link',
    backgroundColor: 'white',
    selectedBulletColor: 'beaverBlue',
    notSelectedBulletColor: 'limestoneLight',
  },
  navy: {
    advanceButtonVariant: 'white',
    dividerColor: 'pughBlue',
    headingColor: 'white',
    bodyColor: 'white',
    subHeadingColor: 'linkLight',
    backgroundColor: 'nittanyNavy',
    selectedBulletColor: 'pughBlue',
    notSelectedBulletColor: 'white',
  },
};
