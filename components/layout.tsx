/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { ReactNode } from "react";
import { theme, Theme } from "../styles/theme/theme";
import { Stacked } from "../pages";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
interface Layout {
  theme: Theme;
  children: ReactNode;
}

// TODO: abstract to it's own file
const Header = () => {
  return (
    <Toolbar
      sx={{
        bgcolor: theme.palette.secondary.main,
        minHeight: "1.50em !important",
        height: "2.25em",
        color: theme.palette.background.paper,
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        top: "0%",
      }}
    >
      {/* TODO: ADD switch from  https://mui.com/material-ui/react-switch/ to toggle themes*/}
      {/* TODO: ADD languange options DE/EN/PT*/}
      <Box
        sx={{
          display: "flex",
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: 0,
          color: theme.palette.text.secondary,
          fontWeight: "bold",
          fontSize: "0.8em",
          fontFamily: "Koulen ",
          letterSpacing: " 0.5em",
        }}
      >
        <Link href="/" passHref>
          JEAN MICHEL BATTIROLA
        </Link>
        {/* 
        TODO: Make a better under construction page
        <Button
          href="/art"
          variant="text"
          sx={{ color: theme.palette.text.secondary, fontFamily: "Koulen " }}
        >
          art?
        </Button> */}
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
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography
              variant="subtitle2"
              sx={{ fontFamily: "Koulen ", letterSpacing: "0.1em", fontSize: "1em" }}
            >
              <LocalPhoneIcon sx={{ fontSize: "0.8em" }} /> +49 1522 4945 601
            </Typography>
          </Box>
        </Stacked>
      </footer>
    </>
  );
}
