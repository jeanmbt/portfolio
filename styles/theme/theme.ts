import { createTheme } from '@mui/material/styles';

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

// TODO: dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { light: "#738471", main: "#496a44",dark: "#202e1e"},
    secondary: { light: "#d19a66", main: "#c46d1c",  dark: "#78481c" },
    background: {default: "#000"},
    text: { primary: "#fff", secondary: "#c46d1c"}
  },
});