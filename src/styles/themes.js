const calcRem = (size) => `${size / 16}rem`;

const fontSizes = {
  xsmall: calcRem(13),
  small: calcRem(16),
  medium: calcRem(20),
  base: calcRem(25),
  lg: calcRem(30),
  xl: calcRem(40),
  xxl: calcRem(50),
  xxxl: calcRem(60),
  titleSize: calcRem(80),
};

const fontWeights = {
  weak: 300,
  medium: 600,
  strong: 800,
};

const boxShadows = {
  default: '0px 2px 2px rgba(0, 0, 0, 0.25)',
  deep: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
};

const colors = {
  yellow: '#FBE8A6',
  orange: '#F4976C',
  darkBlue: '#303C6C',
  skyBlue: '#B4DFE5',
  whiteBlue: '#D2FDFF',
  indigo: '#253857',
};

const themes = {
  fontSizes,
  fontWeights,
  boxShadows,
  colors,
};

export default themes;
