'use-client';
import figmaJson from './figma/theme.json';
import {
  convertLetterSpacing,
  convertToPixel,
  convertToRem,
  formatAlphaColor,
  getLastString,
  getLetterSpacing,
} from './theme-utilities';
const { color, font, lineheight, border, breakpoint, spacing, margin } =
  figmaJson.global;

const {
  weight,
  size,
  family,
  displayStyle,
  headingStyle,
  bodyStyle,
  header,
  menu,
} = font;
const { brandBar, tierThree, tierTwo } = header;
const { list, heading } = menu;
const { radius } = border;
const thickness: {} = border.size;
const { alert, accent } = color;
const dropShadow = figmaJson.global['drop-shadow'];
const { sm, md, lg, xl } = dropShadow;

const baseFontSize: number = size[Object.keys(size)[0]].value;

const theme = {
  //built in theme.ui keys
  //docs for implementing theme object by using sx prop >>> https://theme-ui.com/sx-prop
  //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx } from 'theme-ui'; are imported on the component
  //implementation >>> <div sx={{backgroundColor: 'potentialMidnight', color: 'white'}}>this div is using the theme colors with the sx prop</div>
  breakpoints: [
    // `${breakpoint['sm'].value}`,
    `${breakpoint['md'].value}`,
    `${breakpoint['lg'].value}`,
    `${breakpoint['xl'].value}`,
  ].map((n) => n + 'px'),

  space: {
    0: '0rem',
    1: convertToRem(baseFontSize, spacing['1'].value), // .25rem 4px
    2: convertToRem(baseFontSize, spacing['2'].value), // .5rem 8px
    3: convertToRem(baseFontSize, spacing['3'].value), // .75rem 12px
    4: convertToRem(baseFontSize, spacing['4'].value), // 1rem 16px
    5: convertToRem(baseFontSize, spacing['5'].value), // 1.25rem 20px
    6: convertToRem(baseFontSize, spacing['6'].value), // 1.5rem 24px
    7: convertToRem(baseFontSize, spacing['7'].value), // 1.75rem 28px
    8: convertToRem(baseFontSize, spacing['8'].value), // 2rem 32px
    9: convertToRem(baseFontSize, spacing['9'].value), // 2.25rem 36px
    10: convertToRem(baseFontSize, spacing['10'].value), // 2.5rem 40px
    11: convertToRem(baseFontSize, spacing['11'].value), // 2.75rem 44px
    12: convertToRem(baseFontSize, spacing['12'].value), // 3rem 48px
    13: convertToRem(baseFontSize, spacing['13'].value), // 3.25rem 52px
    14: convertToRem(baseFontSize, spacing['14'].value), // 3.5rem 56px
    15: convertToRem(baseFontSize, spacing['15'].value), // 3.75rem 60px
    16: convertToRem(baseFontSize, spacing['16'].value), // 4rem 64px
    17: convertToRem(baseFontSize, spacing['17'].value), // 4.25rem 68px
    18: convertToRem(baseFontSize, spacing['18'].value), // 4.5rem 72px
    19: convertToRem(baseFontSize, spacing['19'].value), // 4.75rem 76px
    20: convertToRem(baseFontSize, spacing['20'].value), // 5rem 80px
    21: convertToRem(baseFontSize, spacing['21'].value), // 5.25rem 84px
    22: convertToRem(baseFontSize, spacing['22'].value), // 5.5rem 88px
    23: convertToRem(baseFontSize, spacing['23'].value), // 5.75rem 92px
    24: convertToRem(baseFontSize, spacing['24'].value), // 6rem 96px
    25: convertToRem(baseFontSize, spacing['25'].value), // 6.25rem 100px
    30: convertToRem(baseFontSize, spacing['30'].value), // 7.5rem 120px
  },

  sizes: [
    '0%',
    '25%',
    '50%',
    '75%',
    '100%',
    'fit-content',
    'auto',
    '33%',
    '66%',
    '70%',
    '80%',
  ],

  fonts: {
    sans: `${family['sans'].value}, Arial, Tahoma, sans-serif`,
    serif: `${family['serif'].value}, "Georgia", "Times New Roman", serif`,
    condensed: `${family['condensed'].value}, Arial Narrow, Arial, Tahoma, sans-serif`,
    openSans: `${family['openSans'].value}, Arial, Tahoma, sans-serif`,
  },

  //example >>> sx={{color: 'white'}} -or- sx={{border: `1px solid ${theme.colors.white}}} (to get colors this way you need to import theme object)
  colors: {
    nittanyNavy: color['nittany-navy'].value,
    beaverBlue: color['beaver-blue'].value,
    beaver70: formatAlphaColor('beaver70'),
    beaver80: formatAlphaColor('beaver80'),
    link: color['link'].value,
    link80: formatAlphaColor('link80'),
    linkLight: color['link-light'].value,
    navy40: formatAlphaColor('navy40'),
    navy60: formatAlphaColor('navy60'),
    navy65: formatAlphaColor('navy65'),
    navy70: formatAlphaColor('navy70'),
    navy80: formatAlphaColor('navy80'),
    potentialMidnight: color['potential-midnight'].value,
    potential0: formatAlphaColor('potential0'),
    potential50: formatAlphaColor('potential50'),
    potential70: formatAlphaColor('potential70'),
    potential75: formatAlphaColor('potential75'),
    white85: formatAlphaColor('white85'),
    white65: formatAlphaColor('white65'),
    pughBlue: color['pugh-blue'].value,
    coalyGray: color['coaly-gray'].value,
    limestoneGray: color['limestone-gray'].value,
    limestoneLight: color['limestone-light'].value,
    limestoneMaxLight: color['limestone-maxlight'].value,
    slateGray: color['slate-gray'].value,
    slateLight: color['slate-light'].value,
    slateMaxLight: color['slate-maxlight'].value,
    creekTeal: color['creek-teal'].value,
    creekLight: color['creek-light'].value,
    creekMaxLight: color['creek-maxlight'].value,
    skyBlue: color['sky-blue'].value,
    skyLight: color['sky-light'].value,
    skyMaxLight: color['sky-maxlight'].value,
    white: color['white'].value,
    shrineTan: color['shrine-tan'].value,
    shrineLight: color['shrine-light'].value,
    shrineMaxLight: color['shrine-maxlight'].value,
    roarGolden: color['roar-golden'].value,
    roarLight: color['roar-light'].value,
    roarMaxLight: color['roar-maxlight'].value,
    original87Pink: color['original87-pink'].value,
    discoveryCoral: color['discovery-coral'].value,
    wonderPurple: color['wonder-purple'].value,
    athertonViolet: color['atherton-violet'].value,
    inventOrange: color['invent-orange'].value,
    keystoneYellow: color['keystone-yellow'].value,
    opportunityGreen: color['opportunity-green'].value,
    futureLime: color['future-lime'].value,
    forestGreen: color['forest-green'].value,
    landgrantBrown: color['landgrant-brown'].value,
    global: '#ebff00',
    disabled: '#f4f4f4',
    transparent: 'transparent',
    alertImmediate: alert['immediate'].value,
    alertUrgent: alert['urgent'].value,
    alertAllClear: alert['all-clear'].value,
    alertNonEmergency: color[getLastString(alert['non-emergency'].value)].value,
    // accent: color.accent[`${colorThemes[siteColorTheme].accent}`].value,
    accent: '#96BEE6', //temporary accent color til we get a solid color theme group standardized
  },

  //example >>> <h1 sx={{fontSize: '32'}}>h1 using a font size of 2rem</h1>
  fontSizes: {
    14: '0.875rem',
    16: convertToRem(baseFontSize, size['16'].value), //1rem
    18: convertToRem(baseFontSize, size['18'].value), //1.125rem
    20: convertToRem(baseFontSize, size['20'].value), //1.25rem
    22: convertToRem(baseFontSize, size['22'].value), //1.375rem
    24: convertToRem(baseFontSize, size['24'].value), //1.5rem
    28: convertToRem(baseFontSize, size['28'].value), //1.75rem
    32: convertToRem(baseFontSize, size['32'].value), //2rem
    36: convertToRem(baseFontSize, size['36'].value), //2.25rem
    40: convertToRem(baseFontSize, size['40'].value), //2.5rem
    48: convertToRem(baseFontSize, size['48'].value), //3rem
    56: convertToRem(baseFontSize, size['56'].value), //3.5rem
    64: convertToRem(baseFontSize, size['64'].value), //4rem
  },
  fontWeights: {
    regular: weight['regular'].value,
    medium: weight['medium'].value,
    bold: weight['bold'].value,
    black: weight['black'].value,
  },
  lineHeights: {
    '120': `${lineheight['120'].value}`,
    '140': `${lineheight['140'].value}`,
    '150': `${lineheight['150'].value}`,
    '16-h': getLastString(headingStyle['16'].value.lineHeight) + '%',
    '18-h': getLastString(headingStyle['18'].value.lineHeight) + '%',
    '20-h': getLastString(headingStyle['20'].value.lineHeight) + '%',
    '22-h': getLastString(headingStyle['22'].value.lineHeight) + '%',
    '24-h': getLastString(headingStyle['24'].value.lineHeight) + '%',
    '28-h': getLastString(headingStyle['28'].value.lineHeight) + '%',
    '32-h': getLastString(headingStyle['32'].value.lineHeight) + '%',
    '36-h': getLastString(headingStyle['36'].value.lineHeight) + '%',
    '40-h': getLastString(headingStyle['40'].value.lineHeight) + '%',
    '48-h': getLastString(headingStyle['48'].value.lineHeight) + '%',
    '56-h': getLastString(headingStyle['56'].value.lineHeight) + '%',

    '16-b': getLastString(bodyStyle['16'].value.lineHeight) + '%',
    '18-b': getLastString(bodyStyle['18'].value.lineHeight) + '%',
    '20-b': getLastString(bodyStyle['20'].value.lineHeight) + '%',
    '22-b': getLastString(bodyStyle['22'].value.lineHeight) + '%',
    '24-b': getLastString(bodyStyle['24'].value.lineHeight) + '%',
    '28-b': getLastString(bodyStyle['28'].value.lineHeight) + '%',

    '40-d': getLastString(displayStyle['40'].value.lineHeight) + '%',
    '48-d': getLastString(displayStyle['48'].value.lineHeight) + '%',
    '56-d': getLastString(displayStyle['56'].value.lineHeight) + '%',
    '64-d': getLastString(displayStyle['64'].value.lineHeight) + '%',
  },
  letterSpacings: {
    '16-sm': getLetterSpacing('sm', 16),
    '18-sm': getLetterSpacing('sm', 18),
    '20-sm': getLetterSpacing('sm', 20),
    '22-sm': getLetterSpacing('sm', 22),
    '24-sm': getLetterSpacing('sm', 24),
    '28-sm': getLetterSpacing('sm', 28),
    '32-sm': getLetterSpacing('sm', 32),
    '36-sm': getLetterSpacing('sm', 36),
    '40-sm': getLetterSpacing('sm', 40),
    '48-sm': getLetterSpacing('sm', 48),
    '56-sm': getLetterSpacing('sm', 56),
    '64-sm': getLetterSpacing('sm', 64),

    '16-lg': getLetterSpacing('lg', 16),
    '18-lg': getLetterSpacing('lg', 18),
    '20-lg': getLetterSpacing('lg', 20),
    '22-lg': getLetterSpacing('lg', 22),
    '24-lg': getLetterSpacing('lg', 24),
    '28-lg': getLetterSpacing('lg', 28),
    '32-lg': getLetterSpacing('lg', 32),
    '36-lg': getLetterSpacing('lg', 36),
    '40-lg': getLetterSpacing('lg', 40),
    '48-lg': getLetterSpacing('lg', 48),
    '56-lg': getLetterSpacing('lg', 56),
    '64-lg': getLetterSpacing('lg', 64),
  },

  borderWidths: {
    xs: `${thickness['xs'].value.width}px`,
    sm: `${thickness['sm'].value.width}px`,
    md: `${thickness['md'].value.width}px`,
    lg: `${thickness['lg'].value.width}px`,
  },

  borders: {
    xs: `${thickness['xs'].value.width}px solid ${color['limestone-maxlight'].value}`,
    sm: `${thickness['sm'].value.width}px solid ${color['limestone-maxlight'].value}`,
    md: `${thickness['md'].value.width}px solid ${color['limestone-maxlight'].value}`,
    lg: `${thickness['lg'].value.width}px solid ${color['limestone-maxlight'].value}`,
  },

  shadows: {
    sm: `${sm.value.x}px ${sm.value.y}px ${sm.value.blur}px ${sm.value.spread}px ${color['potential-midnight'].value}10`,
    md: `${md.value.x}px ${md.value.y}px ${md.value.blur}px ${md.value.spread}px ${color['potential-midnight'].value}10`,
    lg: `${lg.value.x}px ${lg.value.y}px ${lg.value.blur}px ${lg.value.spread}px ${color['potential-midnight'].value}10`,
    xl: `${xl.value.x}px ${xl.value.y}px ${xl.value.blur}px ${xl.value.spread}px ${color['potential-midnight'].value}10`,
  },

  radii: {
    xs: `${radius['xs'].value}px`,
    sm: `${radius['sm'].value}px`,
    md: `${radius['md'].value}px`,
    rounded: `${radius['rounded'].value}px`,
  },

  //custom variants
  //docs for variants >>> https://theme-ui.com/theme-spec
  //to access the sx prop >>> make sure /** @jsx jsx */ import { jsx } from 'theme-ui'; are imported on the component
  //implementation >>> <div sx={{variant: 'layout.row'}}>this div is using the theme layout.row variant with the sx prop</div>
  //responsive typography variants >>> sx={{variant: "text.mega"}} https://theme-ui.com/guides/responsive-typography
  text: {
    chip: {
      fontFamily: 'sans',
      fontWeight: 'bold',
      cursor: 'pointer',
      letterSpacing: '.03em',
      lineHeight: '20px',
      fontSize: 18,
    },
    buttonText: {
      sm: {
        fontFamily: 'sans',
        fontWeight: 'medium',
        lineHeight: 'normal',
        fontSize: 16,
        letterSpacing: 'normal',
        textTransform: 'capitalize',
      },
      md: {
        fontFamily: 'sans',
        fontWeight: 'medium',
        lineHeight: 'normal',
        fontSize: 18,
        letterSpacing: 'normal',
        textTransform: 'capitalize',
      },
      nav: {
        fontFamily: 'sans',
        fontWeight: 'regular',
        lineHeight: 'normal',
        fontSize: 16,
        letterSpacing: 'normal',
        textTransform: 'capitalize',
      },
    },
    headingStyle: {
      full: {
        16: {
          fontFamily: getLastString(headingStyle['16'].value.fontFamily),
          fontWeight: getLastString(headingStyle['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: '16-h',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(headingStyle['18'].value.fontFamily),
          fontWeight: getLastString(headingStyle['18'].value.fontWeight),
          fontSize: 18,
          lineHeight: '18-h',
          letterSpacing: 'normal',
        },
        20: {
          fontFamily: getLastString(headingStyle['20'].value.fontFamily),
          fontWeight: getLastString(headingStyle['20'].value.fontWeight),
          fontSize: [18, 18, 20, 20],
          lineHeight: ['18-h', '18-h', '20-h', '20-h'],
          letterSpacing: 'normal',
        },
        22: {
          fontFamily: getLastString(headingStyle['22'].value.fontFamily),
          fontWeight: getLastString(headingStyle['22'].value.fontWeight),
          fontSize: [18, 20, 22, 22],
          lineHeight: ['18-h', '20-h', '22-h', '22-h'],
          letterSpacing: 'normal',
        },
        24: {
          fontFamily: getLastString(headingStyle['24'].value.fontFamily),
          fontWeight: getLastString(headingStyle['24'].value.fontWeight),
          fontSize: [20, 22, 24, 24],
          lineHeight: ['20-h', '22-h', '24-h', '24-h'],
          letterSpacing: 'normal',
        },
        28: {
          fontFamily: getLastString(headingStyle['28'].value.fontFamily),
          fontWeight: getLastString(headingStyle['28'].value.fontWeight),
          fontSize: [22, 24, 28, 28],
          lineHeight: ['22-h', '24-h', '28-h', '28-h'],
          letterSpacing: 'normal',
        },
        32: {
          fontFamily: getLastString(headingStyle['32'].value.fontFamily),
          fontWeight: getLastString(headingStyle['32'].value.fontWeight),
          fontSize: [24, 28, 32, 32],
          lineHeight: ['24-h', '28-h', '32-h', '32-h'],
          letterSpacing: 'normal',
        },
        36: {
          fontFamily: getLastString(headingStyle['36'].value.fontFamily),
          fontWeight: getLastString(headingStyle['36'].value.fontWeight),
          fontSize: [28, 32, 36, 36],
          lineHeight: ['28-h', '32-h', '36-h', '36-h'],
          letterSpacing: 'normal',
        },
        40: {
          fontWeight: getLastString(headingStyle['40'].value.fontWeight),
          fontSize: [32, 36, 40, 40],
          lineHeight: ['32-h', '36-h', '40-h', '40-h'],
          letterSpacing: 'normal',
        },
        48: {
          fontFamily: getLastString(headingStyle['48'].value.fontFamily),
          fontWeight: getLastString(headingStyle['48'].value.fontWeight),
          fontSize: [36, 40, 48, 48],
          lineHeight: ['36-h', '40-h', '48-h', '48-h'],
          letterSpacing: 'normal',
        },
        56: {
          fontFamily: getLastString(headingStyle['56'].value.fontFamily),
          fontWeight: getLastString(headingStyle['56'].value.fontWeight),
          fontSize: [40, 48, 56, 56],
          lineHeight: ['40-h', '48-h', '56-h', '56-h'],
          letterSpacing: 'normal',
        },
      },

      column: {
        16: {
          fontFamily: getLastString(headingStyle['16'].value.fontFamily),
          fontWeight: getLastString(headingStyle['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: '16-h',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(headingStyle['18'].value.fontFamily),
          fontWeight: getLastString(headingStyle['18'].value.fontWeight),
          fontSize: 18,
          lineHeight: '18-h',
          letterSpacing: 'normal',
        },
        20: {
          fontFamily: getLastString(headingStyle['20'].value.fontFamily),
          fontWeight: getLastString(headingStyle['20'].value.fontWeight),
          fontSize: [18, 18, 18, 20],
          lineHeight: ['18-h', '18-h', '18-h', '20-h'],
          letterSpacing: 'normal',
        },
        22: {
          fontFamily: getLastString(headingStyle['22'].value.fontFamily),
          fontWeight: getLastString(headingStyle['22'].value.fontWeight),
          fontSize: [18, 20, 20, 22],
          lineHeight: ['18-h', '20-h', '20-h', '22-h'],
          letterSpacing: 'normal',
        },
        24: {
          fontFamily: getLastString(headingStyle['24'].value.fontFamily),
          fontWeight: getLastString(headingStyle['24'].value.fontWeight),
          fontSize: [20, 22, 22, 24],
          lineHeight: ['20-h', '22-h', '22-h', '24-h'],
          letterSpacing: 'normal',
        },
        28: {
          fontFamily: getLastString(headingStyle['28'].value.fontFamily),
          fontWeight: getLastString(headingStyle['28'].value.fontWeight),
          fontSize: [22, 24, 24, 28],
          lineHeight: ['22-h', '24-h', '24-h', '28-h'],
          letterSpacing: 'normal',
        },
        32: {
          fontFamily: getLastString(headingStyle['32'].value.fontFamily),
          fontWeight: getLastString(headingStyle['32'].value.fontWeight),
          fontSize: [24, 28, 28, 32],
          lineHeight: ['24-h', '28-h', '28-h', '32-h'],
          letterSpacing: 'normal',
        },
        36: {
          fontFamily: getLastString(headingStyle['36'].value.fontFamily),
          fontWeight: getLastString(headingStyle['36'].value.fontWeight),
          fontSize: [28, 32, 32, 36],
          lineHeight: ['28-h', '32-h', '32-h', '36-h'],
          letterSpacing: 'normal',
        },
        40: {
          fontWeight: getLastString(headingStyle['40'].value.fontWeight),
          fontSize: [32, 36, 36, 40],
          lineHeight: ['32-h', '36-h', '36-h', '40-h'],
          letterSpacing: 'normal',
        },
        48: {
          fontFamily: getLastString(headingStyle['48'].value.fontFamily),
          fontWeight: getLastString(headingStyle['48'].value.fontWeight),
          fontSize: [36, 40, 40, 48],
          lineHeight: ['36-h', '40-h', '40-h', '48-h'],
          letterSpacing: 'normal',
        },
        56: {
          fontFamily: getLastString(headingStyle['56'].value.fontFamily),
          fontWeight: getLastString(headingStyle['56'].value.fontWeight),
          fontSize: [40, 48, 48, 56],
          lineHeight: ['40-h', '48-h', '48-h', '56-h'],
          letterSpacing: 'normal',
        },
      },
    },
    bodyStyle: {
      full: {
        16: {
          fontFamily: getLastString(bodyStyle['16'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: '16-b',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(bodyStyle['18'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['18'].value.fontWeight),
          fontSize: 18,
          lineHeight: '18-b',
          letterSpacing: 'normal',
        },
        20: {
          fontFamily: getLastString(bodyStyle['20'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['20'].value.fontWeight),
          fontSize: [18, 18, 20, 20],
          lineHeight: ['18-b', '18-b', '20-b', '20-b'],
          letterSpacing: 'normal',
        },
        22: {
          fontFamily: getLastString(bodyStyle['22'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['22'].value.fontWeight),
          fontSize: [18, 20, 22, 22],
          lineHeight: ['18-b', '20-b', '22-b', '22-b'],
          letterSpacing: 'normal',
        },
        24: {
          fontFamily: getLastString(bodyStyle['24'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['24'].value.fontWeight),
          fontSize: [20, 22, 24, 24],
          lineHeight: ['20-b', '22-b', '24-b', '24-b'],
          letterSpacing: 'normal',
        },
        28: {
          fontFamily: getLastString(bodyStyle['28'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['28'].value.fontWeight),
          fontSize: [22, 24, 28, 28],
          lineHeight: ['22-b', '24-b', '28-b', '28-b'],
          letterSpacing: 'normal',
        },
      },

      column: {
        16: {
          fontFamily: getLastString(bodyStyle['16'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: '16-b',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(bodyStyle['18'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['18'].value.fontWeight),
          fontSize: 18,
          lineHeight: '18-b',
          letterSpacing: 'normal',
        },
        20: {
          fontFamily: getLastString(bodyStyle['20'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['20'].value.fontWeight),
          fontSize: [18, 18, 18, 20],
          lineHeight: ['18-b', '18-b', '18-b', '20-b'],
          letterSpacing: 'normal',
        },
        22: {
          fontFamily: getLastString(bodyStyle['22'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['22'].value.fontWeight),
          fontSize: [18, 20, 20, 22],
          lineHeight: ['18-b', '20-b', '20-b', '22-b'],
          letterSpacing: 'normal',
        },
        24: {
          fontFamily: getLastString(bodyStyle['24'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['24'].value.fontWeight),
          fontSize: [20, 22, 22, 24],
          lineHeight: ['20-b', '22-b', '22-b', '24-b'],
          letterSpacing: 'normal',
        },
        28: {
          fontFamily: getLastString(bodyStyle['28'].value.fontFamily),
          fontWeight: getLastString(bodyStyle['28'].value.fontWeight),
          fontSize: [22, 24, 24, 28],
          lineHeight: ['22-b', '24-b', '24-b', '28-b'],
          letterSpacing: 'normal',
        },
      },
    },

    displayStyle: {
      full: {
        56: {
          fontFamily: getLastString(displayStyle['56'].value.fontFamily),
          fontWeight: getLastString(displayStyle['56'].value.fontWeight),
          fontSize: [36, 40, 48, 56],
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        64: {
          fontFamily: getLastString(displayStyle['64'].value.fontFamily),
          fontWeight: getLastString(displayStyle['64'].value.fontWeight),
          fontSize: [40, 48, 56, 64],
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
      },

      column: {
        56: {
          fontFamily: getLastString(displayStyle['56'].value.fontFamily),
          fontWeight: getLastString(displayStyle['56'].value.fontWeight),
          fontSize: [36, 40, 48, 56],
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        64: {
          fontFamily: getLastString(displayStyle['64'].value.fontFamily),
          fontWeight: getLastString(displayStyle['64'].value.fontWeight),
          fontSize: [40, 48, 56, 64],
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
      },
    },

    header: {
      brandBar: {
        14: {
          fontFamily: getLastString(brandBar['14'].value.fontFamily),
          fontWeight: getLastString(brandBar['14'].value.fontWeight),
          fontSize: 14,
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        16: {
          fontFamily: getLastString(brandBar['16'].value.fontFamily),
          fontWeight: getLastString(brandBar['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(brandBar['16'].value.fontFamily),
          fontWeight: getLastString(brandBar['16'].value.fontWeight),
          fontSize: [14, 16, 18, 18],
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
      },
      tierTwo: {
        14: {
          fontFamily: getLastString(tierTwo['14'].value.fontFamily),
          fontWeight: getLastString(tierTwo['14'].value.fontWeight),
          fontSize: 14,
          lineHeight: `${tierTwo['14'].value.lineHeight}px`,
        },
        18: {
          fontFamily: getLastString(tierTwo['18'].value.fontFamily),
          fontWeight: getLastString(tierTwo['18'].value.fontWeight),
          fontSize: [14, 14, 18, 18],
          lineHeight: `${tierTwo['18'].value.lineHeight}px`,
          letterSpacing: convertLetterSpacing(
            tierTwo['18'].value.letterSpacing,
            18
          ),
        },
      },
      tierThree: {
        16: {
          fontFamily: getLastString(tierThree['16'].value.fontFamily),
          fontWeight: getLastString(tierThree['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(tierThree['18'].value.fontFamily),
          fontWeight: getLastString(tierThree['18'].value.fontWeight),
          fontSize: [16, 16, 18, 18],
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
      },
    },
    menu: {
      list: {
        16: {
          fontFamily: getLastString(list['16'].value.fontFamily),
          fontWeight: getLastString(list['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(list['18'].value.fontFamily),
          fontWeight: getLastString(list['18'].value.fontWeight),
          fontSize: 18,
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
      },
      heading: {
        16: {
          fontFamily: getLastString(heading['16'].value.fontFamily),
          fontWeight: getLastString(heading['16'].value.fontWeight),
          fontSize: 16,
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
        18: {
          fontFamily: getLastString(heading['18'].value.fontFamily),
          fontWeight: getLastString(heading['18'].value.fontWeight),
          fontSize: [16, 16, 16, 18],
          lineHeight: 'normal',
          letterSpacing: 'normal',
        },
      },
    },
  },

  //built in style object
  styles: {
    root: {
      fontFamily: 'Roboto',
      width: '100%',
      fontWeight: 'regular',
    },
  },
};

//additional custom theme objects
export const gradients = {
  powerFacts: `linear-gradient(360deg, ${theme?.colors?.nittanyNavy} 0%, ${theme?.colors?.nittanyNavy} 35%, ${theme?.colors?.beaverBlue} 100%)`,
  lightBox: `linear-gradient(360deg, ${theme?.colors?.beaverBlue} 0%, ${theme?.colors?.nittanyNavy} 100%)`,
  hero: `linear-gradient(360deg, ${theme?.colors?.navy80} 0%, ${theme?.colors?.navy40} 50%, ${theme?.colors?.potential0} 100%)`,
  antiHero: `linear-gradient(360deg, ${theme?.colors?.skyMaxLight} 0%, ${theme?.colors?.skyMaxLight} 60%, ${theme?.colors?.skyLight} 100%)`,
};

export const backdrops = {
  '45': {
    backgroundColor: 'rgba(38,38,38,0.45)',
  },
  '60': {
    backgroundColor: 'rgba(38,38,38,0.6)',
  },
  '75': {
    backgroundColor: 'rgba(38,38,38,0.75)',
  },
  '90': {
    backgroundColor: 'rgba(38,38,38,0.9)',
  },
};

export const contentContainerMargins = {
  msm: `${margin.sm.value}px`,
  mmd: `${margin.md.value}px`,
  mlg: `${margin.lg.value}px`,
  mxl: `${margin.xl.value}px`,
};

export const contentContainerMinWidths = {
  md: `${parseInt(breakpoint.md.value)}px`,
  lg: `${parseInt(breakpoint.lg.value)}px`,
  xl: `${parseInt(breakpoint.xl.value)}px`,
};

export const transitions = {
  sm: { transition: 'all .2s ease-out' },
  lg: { transition: 'all .4s ease-out' },
  slide: { transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;' },
};

export const iconLibraryObjectArray = [] as any;

export const spacingInPixels = {
  0: '0px',
  1: convertToPixel(baseFontSize, `${theme.space && theme.space[1]}rem`), // .25rem 4px
  2: convertToPixel(baseFontSize, `${theme.space && theme.space[2]}rem`), // .5rem 8px
  3: convertToPixel(baseFontSize, `${theme.space && theme.space[3]}rem`), // .75rem 12px
  4: convertToPixel(baseFontSize, `${theme.space && theme.space[4]}rem`), // 1rem 16px
  5: convertToPixel(baseFontSize, `${theme.space && theme.space[5]}rem`), // 1.25rem 20px
  6: convertToPixel(baseFontSize, `${theme.space && theme.space[6]}rem`), // 1.5rem 24px
  7: convertToPixel(baseFontSize, `${theme.space && theme.space[7]}rem`), // 1.75rem 28px
  8: convertToPixel(baseFontSize, `${theme.space && theme.space[8]}rem`), // 2rem 32px
  9: convertToPixel(baseFontSize, `${theme.space && theme.space[9]}rem`), // 2.25rem 36px
  10: convertToPixel(baseFontSize, `${theme.space && theme.space[10]}rem`), // 2.5rem 40px
  11: convertToPixel(baseFontSize, `${theme.space && theme.space[11]}rem`), // 2.75rem 44px
  12: convertToPixel(baseFontSize, `${theme.space && theme.space[12]}rem`), // 3rem 48px
  13: convertToPixel(baseFontSize, `${theme.space && theme.space[13]}rem`), // 3.25rem 52px
  14: convertToPixel(baseFontSize, `${theme.space && theme.space[14]}rem`), // 3.5rem 56px
  15: convertToPixel(baseFontSize, `${theme.space && theme.space[15]}rem`), // 3.75rem 60px
  16: convertToPixel(baseFontSize, `${theme.space && theme.space[16]}rem`), // 4rem 64px
  17: convertToPixel(baseFontSize, `${theme.space && theme.space[17]}rem`), // 4.25rem 68px
  18: convertToPixel(baseFontSize, `${theme.space && theme.space[18]}rem`), // 4.5rem 72px
  19: convertToPixel(baseFontSize, `${theme.space && theme.space[19]}rem`), // 4.75rem 76px
  20: convertToPixel(baseFontSize, `${theme.space && theme.space[20]}rem`), // 5rem 80px
  21: convertToPixel(baseFontSize, `${theme.space && theme.space[21]}rem`), // 5.25rem 84px
  22: convertToPixel(baseFontSize, `${theme.space && theme.space[22]}rem`), // 5.5rem 88px
  23: convertToPixel(baseFontSize, `${theme.space && theme.space[23]}rem`), // 5.75rem 92px
  24: convertToPixel(baseFontSize, `${theme.space && theme.space[24]}rem`), // 6rem 96px
  25: convertToPixel(baseFontSize, `${theme.space && theme.space[25]}rem`), // 6.25rem 100px
  26: convertToPixel(baseFontSize, `${theme.space && theme.space[26]}rem`), // 6.5rem 104px
  27: convertToPixel(baseFontSize, `${theme.space && theme.space[27]}rem`), // 6.75rem 108px
  28: convertToPixel(baseFontSize, `${theme.space && theme.space[28]}rem`), // 7rem 112px
  29: convertToPixel(baseFontSize, `${theme.space && theme.space[29]}rem`), // 7.25rem 116px
  30: convertToPixel(baseFontSize, `${theme.space && theme.space[30]}rem`), // 7.5rem 120px
};

export const colorThemes = {
  Global: accent['global'].value,
  'Pugh Blue': theme.colors['pughBlue'],
  Coral: theme.colors['discoveryCoral'],
  Creek: theme.colors['creekTeal'],
};

export const siteColorTheme = process.env.COLOR_THEME
  ? `${process.env.COLOR_THEME}`
  : 'global';

export default theme;
