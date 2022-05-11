import { Box, Button, Container, Paper, styled, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AboutMe } from "../components/sections/aboutme";
import { theme, Theme } from "../styles/theme/theme";
import { ProjectCard } from "../components/sections/projects/projectCard";
import { Projects } from "../components/sections/projects";
import { Contact } from "../components/sections/contact";
import Link from "next/link";

export const Section = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  marginBottom: "5em",
}));

// TODO: https://mui.com/material-ui/react-stack/
export const Stacked = styled(Section)(({}) => ({
  flexDirection: "column",
  margin: 8,
  alignItems: "center",
}));

const Home: NextPage = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(360deg, #b0b28348 1%, rgba(255,255,255,0.0020278375021883788) 28%, #bebfb13a 100%)",
        minHeight: "100vh",
        padding: "4rem 0",
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Head>
        <title>Jean Michel Battirola</title>
        <meta name="description" content="Full-stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container sx={{ paddingY: 2 }}>
        <Box
          component={Paper}
          sx={{
            margin: "auto",
            bgcolor: theme.palette.primary.light,
            background:
              "linear-gradient(180deg, #b0b28348 1%, rgba(255,255,255,0.0020278375021883788) 28%, rgba(176,178,131,0.7583303585105917) 100%)",
          }}
          paddingY={10}
        >
          <Section>
            <AboutMe />
          </Section>

          <Section sx={{ marginTop: 20 }}>
            <Projects />
          </Section>
          {/* TODO: Fix migrated contact form  */}
          {/* CONTACT  */}
          {/* <Section>
              <Contact />
            </Section> */}
          {/*  */}
        </Box>
      </Container>
      <Button>
        <Link passHref={false} href={""}>
          to the top
        </Link>
      </Button>
    </div>
  );
};

export default Home;
