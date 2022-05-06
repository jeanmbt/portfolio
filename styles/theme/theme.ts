import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { createTheme, ThemeOptions } from '@mui/material/styles';


export interface Theme {
  children?: ReactJSXElement | string;
  palette: {
    mode: string;
    primary: { main: string; light: string; dark: string };
    secondary: { main: string; light: string; dark: string };
    background: { default: string };
    text: { primary: string; secondary: string };
  };
  theme?: ThemeOptions | any;
}


//sort theme function
// if themeToggle: dark....


// TODO: light theme
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { light: "#738471", main: "#496a44",dark: "#202e1e" },
    secondary: { light: "#d19a66", main: "#c46d1c",  dark: "#78481c" },
    background: {default: "#fff"},
    text: { primary: "#000", secondary: "#496a44"}
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { light: "#738471", main: "#496a44",dark: "#202e1e"},
    secondary: { light: "#d19a66", main: "#c46d1c",  dark: "#78481c" },
    background: {default: "#000"},
    text: { primary: "#fff", secondary: "#c46d1c"}
  },
});