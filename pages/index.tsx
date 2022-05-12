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
import { StickyLinks } from "../components/stickyLinks";

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
        background: "linear-gradient(180deg, #02444F 1%,  #024f4b 100%)",
        minHeight: "100vh",
        padding: "0",
      }}
    >
      <Head>
        <title>Jean Michel Battirola</title>
        <meta name="description" content="Full-stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyLinks />

      <Container sx={{ marginTop: "-130px" }}>
        <Box
          sx={{
            margin: "auto",
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
    </div>
  );
};

export default Home;
