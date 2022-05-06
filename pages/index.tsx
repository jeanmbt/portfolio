import { Box, Button, Container, Paper, styled, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AboutMe } from "../components/sections/aboutme";
import { Theme } from "../styles/theme/theme";
import { ProjectCard } from "../components/projectCard";
import { Projects } from "../components/sections/projects";

export const Section = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  marginBottom: 5,
}));

export const Stacked = styled(Section)(({}) => ({
  flexDirection: "column",
  margin: 8,
}));

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jean Michel Battirola</title>
        <meta name="description" content="Full-stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container sx={{ paddingY: 2 }}>
          {/* Main Document */}
          <Box
            component={Paper}
            sx={{
              margin: "auto",
            }}
            paddingY={10}
          >
            {/*  */}
            {/* ABOUT */}
            {/* TODO: Abstract into a component */}
            <Section>
              <AboutMe />
            </Section>

            {/* PROJECTS  */}
            <Section>
              <Projects />
            </Section>

            {/* CONTACT  */}
            <Section>
              <Typography variant="h4">Contact</Typography>
            </Section>
            {/*  */}
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Home;
