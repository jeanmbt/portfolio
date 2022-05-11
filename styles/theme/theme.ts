import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { deepOrange, green, lightGreen, lime, orange } from '@mui/material/colors';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export interface Theme {
  children?: ReactJSXElement | string;
  palette: {
    mode: string;
    primary: { main: string; light: string; dark: string };
    secondary: { main: string; light: string; dark: string };
    background: { default: string, paper: string };
    text: { primary: string; secondary: string };
  };
  theme?: ThemeOptions | any;
}


// TODO: sort theme function
// if themeToggle: dark....


export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { light: lime[50], main: lime[900],dark: lime[900] },
    secondary: { light: deepOrange[500], main: orange[900],  dark: deepOrange[900] },
    background: {default: "#ffffff99", paper: "#ffffff6b"},
    text: { primary: "#000", secondary: "#fff"}
  },
});

// TODO: Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { light: "#738471", main: "#496a44",dark: "#202e1e"},
    secondary: { light: "#d19a66", main: "#c46d1c",  dark: "#78481c" },
    background: {default: "#000"},
    text: { primary: "#fff", secondary: "#c46d1c"}
  },
});