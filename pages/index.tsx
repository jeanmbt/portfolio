import { Box, Container, styled, } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import { AboutMe } from "../components/sections/aboutme";
import { Projects } from "../components/sections/projects";
import { StickyLinks } from "../components/stickyLinks";

export const Section = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
  marginBottom: "5em",
}));

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
        <meta name="description" content="Jean Michel Battirola, Full Stack Software Enginner"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StickyLinks />

      <Container sx={{ marginTop: "-200px" }}>
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
        </Box>
      </Container>
    </div>
  );
};

export default Home;
