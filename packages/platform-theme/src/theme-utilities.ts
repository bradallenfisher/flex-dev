import figmaJson from './figma/theme.json';
const { color, font, letterspacing } = figmaJson.global;
const { size } = font;
const { overlay } = color;
const baseFontSize: number = size[Object.keys(size)[0]].value;

export const convertToRem = (base: number, pxSize: string): string => {
  const pxSizeNumber: number = parseFloat(pxSize);
  return `${pxSizeNumber / base}rem`;
};
export const convertToPixel = (base: number, remSize: string): string => {
  const remSizeNumber: number = parseFloat(remSize);
  return `${base * remSizeNumber}px`;
};

//gets characters after the last '.' in a string
export const getLastString = (str: string): string => {
  const n = str.lastIndexOf('.');
  return str.substring(n + 1, str.length - 1);
};

export const getLetterSpacing = (
  letterSpacingSize: 'sm' | 'lg' | 'sm-negative' | 'lg-negative',
  fontSize: number
): string => {
  const convertToPx: number =
    (parseFloat(letterspacing[letterSpacingSize].value) / 100) *
    parseInt(size[fontSize].value);
  return `${convertToPx / baseFontSize}rem`;
};

export const convertLetterSpacing = (letterspacingPercent, fontSize) => {
  const convertToPx: number =
    (parseFloat(letterspacingPercent) / 100) * parseInt(size[fontSize].value);
  return `${convertToPx / baseFontSize}rem`;
};

export const getCamelCase = (value: string): any => {
  const newStr = value.replace(/-([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });
  return newStr;
};

export const removeBracket = (str: string): any => {
  const newStr = str.replace(/{\{\}'}+/g, '');
  return newStr;
};

export const removeDecimal = (str: string): any => {
  const newStr = str.replace('.', '');
  return newStr;
};

export const checkLength = (str: string | any[]): any => {
  if (str.length === 1) {
    str += '0';
  }
  return str;
};

export const hexToRgbA = (hex: string) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
    );
  }
  throw new Error('Bad Hex');
};

export const formatAlphaColor = (figmaColor: string) => {
  const name = getLastString(removeBracket(overlay[figmaColor].value));
  let colorRef = color[name].value;
  let rgba = hexToRgbA(colorRef);
  let col = rgba.replace(
    /1\)/i,
    `${overlay[figmaColor].$extensions['studio.tokens'].modify.value})`
  );
  return col;
};
