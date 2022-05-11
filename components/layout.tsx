/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  createTheme,
  ThemedProps,
  ThemeOptions,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import { ReactNode } from "react";
import { theme, Theme } from "../styles/theme/theme";
import { Stacked } from "../pages";

interface Layout {
  theme: Theme;
  children: ReactNode;
}

// TODO: abstract to it's own file
const Header = () => {
  console.log(theme);
  return (
    <Toolbar
      sx={{
        bgcolor: theme.palette.secondary.dark,
        minHeight: "1.50em !important",
        height: "2.25em",

        color: theme.palette.background.paper,
      }}
    >
      {/* TODO: ADD switch from  https://mui.com/material-ui/react-switch/ to toggle themes*/}
      {/* TODO: ADD languange options DE/EN/PT*/}
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          margin: 0,
          color: theme.palette.text.secondary,
        }}
      >
        <Link href="/" passHref>
          Jean Michel Battirola - Web developer
        </Link>
        <Button href="/art" variant="text" sx={{ color: theme.palette.text.secondary }}>
          Here for my art?
        </Button>
        {/* // TODO: make responsive */}
      </Box>
    </Toolbar>
  );
};

export default function Layout({ children, theme }: Layout) {
  // TODO: if theme... theme
  // <Header theme={theme} />
  return (
    <>
      <Header />
      <main
        style={{
          height: "max-content",
          minHeight: "80vh",
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {children}
      </main>
      <footer
        className={styles.footer}
        style={{
          backgroundColor: theme.palette.secondary.light,
          borderTop: `0.2em solid ${theme.palette.secondary.dark}`,
        }}
      >
        <Box></Box>
        <Stacked sx={{ color: theme.palette.text.secondary }}>
          <Link href="https://github.com/jeanmbt/portfolio">
            <a target="_blank">
              <Typography sx={{ textDecoration: "underline" }}>
                check this project's repository!
              </Typography>
            </a>
          </Link>

          <hr />
          <Typography>dev@jeanbattirola.com</Typography>
          <Typography variant="subtitle2">+49 1522 4945 601</Typography>
        </Stacked>
      </footer>
    </>
  );
}
