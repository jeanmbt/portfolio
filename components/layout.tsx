import { Button, createTheme, ThemedProps, ThemeOptions, Toolbar, Typography } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";
import { Box } from "@mui/system";
import Link from "next/link";
import logo from "../public/logo.png";
import styles from "../styles/Home.module.css";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { ReactChild, ReactChildren, ReactNode } from "react";
import { theme } from "../styles/theme/theme";

interface Theme {
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

interface Layout {
  theme: Theme;
  children: ReactNode;
}

const Header = () => {
  console.log(theme);
  return (
    <Toolbar
      style={{
        backgroundColor: theme.palette.secondary.light,
        minHeight: "1.25em",
        height: "2.25em",
        borderBottom: `0.2em solid ${theme.palette.secondary.dark}`,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: 0,
        }}
      >
        <Link href="/" passHref>
          {/* <Box
            style={{
              height: "2em",
              width: "2em",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              // backgroundImage: `url(${logo.src})`,
              color: theme.palette.primary.main,
              cursor: "pointer",
              zIndex: 1,
            }}
          ></Box> */}
          Jean Michel Battirola
        </Link>
        {/* // TODO: make responsive */}
        {/* <Button
          sx={{ margin: "0.5em 0", float: "right", backgroundColor: "white" }}
          variant="outlined"
          href={`people/new`}
        >
          Add Person
        </Button> */}
        Menu
      </Box>
    </Toolbar>
  );
};

export default function Layout({ children, theme }: Layout) {
  // todo if theme... theme
  // <Header theme={theme} />
  return (
    <>
      <Header />
      <main
        style={{
          height: "max-content",
          minHeight: "80vh",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        {children}
      </main>
      <footer
        className={styles.footer}
        style={{
          backgroundColor: theme.palette.secondary.light,
          color: theme.palette.text.primary,
          borderTop: `0.2em solid ${theme.palette.secondary.dark}`,
        }}
      >
        <a href="https://github.com/jeanmbt" target="_blank" rel="noopener noreferrer">
          by Jean Michel Battirola
        </a>
        <Typography margin={1} fontSize={12}>
          Using: NextJs + Typescript, Prisma, Apollo, MUI, Emotion, graphQL
        </Typography>
      </footer>
    </>
  );
}
