import { Box, Container, Paper } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { StickyLinks } from "../../components/stickyLinks";

import cv from "../../public/cv.png";

const Cv: NextPage = () => {
  return (
    <>
      <div
        style={{
          background: "linear-gradient(180deg, #02444F 1%,  #024f4b 100%)",
          minHeight: "100vh",
          padding: "0",
        }}
      >
        <Head>
          <title>Jean Michel Battirola</title>
          <meta name="description" content="Web Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <StickyLinks />

        <Container sx={{ marginTop: "-10em" }}>
          <Box
            sx={{
              padding: `75% 10em`,
              backgroundImage: `url(${cv.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
            }}
          />
        </Container>
      </div>
    </>
  );
};

export default Cv;
