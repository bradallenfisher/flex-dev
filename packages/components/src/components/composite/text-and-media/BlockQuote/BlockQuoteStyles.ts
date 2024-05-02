const quoteSx = {
  fontFamily: 'serif',
  fontSize: [20, 22, 24, 24],
  color: 'white',
  fontWeight: 'regular',
  lineHeight: '140',
};

const imageSize = ['160px', '160px', '140px', '160px'];

const imageSx = {
  borderRadius: '100%',
  borderWidth: 'lg',
  borderColor: 'white',
  borderStyle: 'solid',
  width: imageSize,
  height: imageSize,
};

const quoteSvgSx = (imageSrc) => ({
  position: [
    imageSrc ? 'absolute' : 'unset',
    imageSrc ? 'absolute' : 'unset',
    'absolute',
    'absolute',
  ],
  top: ['unset', 'unset', '-13px', '-10px'],
  right: ['unset', 'unset', 0, 0],
  left: [0, 0, 'unset', 'unset'],
  bottom: ['-30px', '-30px', 'unset', 'unset'],
  ...(imageSrc
    ? {
        width: ['60px', '60px', '48px', '60px'],
        height: ['44px', '44px', '35.2px', '44px'],
      }
    : { width: '60px', height: '44px' }),
});

const nameSx = {
  color: 'white',
  variant: 'text.headingStyle.full.18',
  mt: 5,
  mb: 1,
};

const gridItemSx = (imageSrc) => ({
  justifyContent: [
    imageSrc ? 'center' : 'flex-start',
    imageSrc ? 'center' : 'flex-start',
    'flex-start',
    'flex-start',
  ],
  gridColumn: ['1/5', '2/8', '1/3', imageSrc ? '2/4' : '1/3'],
  mb: [imageSrc ? 9 : 2, imageSrc ? 9 : 2, 0, 0],
});

export { imageSx, quoteSx, quoteSvgSx, nameSx, gridItemSx };
