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
    primary: { light: "#F1F2ED", main: "#b8be23",dark: "#76761e"},
    secondary: { light: deepOrange[500], main: "#E64C00",  dark: "#9C2B14" },
    background: {default: "#02444F", paper: "#fff"},
    text: { primary: "#000", secondary: "#F1F2ED"}
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