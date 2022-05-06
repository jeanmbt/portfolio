import { Box, Button, Container, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jean Michel Battirola</title>
        <meta name="description" content="Full-stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* TODO: Abstract into a component */}
        <Container sx={{ paddingY: 2 }}>
          <Box
            component={Paper}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",

              height: "80vh",
            }}
            paddingY={5}
          >
            <Typography
              sx={{ marginBottom: 5, textAlign: "center", fontSize: [50, 30] }}
              variant="h5"
              gutterBottom
            >
              Jean Michel Battirola
            </Typography>
            <Button
              sx={{ width: [250], height: [100, 60], fontSize: 20 }}
              variant="contained"
              href="/people"
            >
              See all People
            </Button>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Home;
