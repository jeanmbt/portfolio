import { createTheme } from '@mui/material/styles';

// TODO: light theme
export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#496a44", },
    secondary: { main: "#c46d1c" },
    background: {default: "#fff"},
    text: { primary: "#000", secondary: "#496a44"}
  },
});

// TODO: dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#496a44", },
    secondary: { main: "#c46d1c" },
    background: {default: "#000"},
    text: { primary: "#fff", secondary: "#c46d1c"}
  },
});