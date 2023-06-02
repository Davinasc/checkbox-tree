import { DefaultTheme } from 'styled-components';
import { base, blue, gray, green, red, yellow } from './colors';
import { media, query } from './custom-media';

const palette = {
  primary: {
    main: blue[500],
    dark: blue[600],
    light: blue[100],
    contrastText: base.white,
  },
  secondary: {
    main: gray[50],
    dark: gray[100],
    light: base.white,
    contrastText: gray[900],
  },
  error: {
    main: red[500],
    dark: red[600],
    light: red[100],
    contrastText: base.white,
  },
  warning: {
    main: yellow[500],
    dark: yellow[600],
    light: yellow[100],
    contrastText: base.white,
  },
  success: {
    main: green[500],
    dark: green[600],
    light: green[100],
    contrastText: base.white,
  },
  text: {
    primary: gray[800],
    secondary: gray[700],
    disabled: gray[300],
  },
};

const theme: DefaultTheme = {
  palette,
  media: { ...media, query },
};

export default theme;
