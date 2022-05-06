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
        <Container sx={{ paddingY: 2 }}>
          {/* Main Document */}
          <Box
            component={Paper}
            sx={{
              margin: "auto",
            }}
            paddingY={10}
          >
            {/* ABOUT */}
            {/* TODO: Abstract into a component */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              {/* Profile  */}
              <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <Box
                  borderRadius={"100%"}
                  margin="2em"
                  padding={10}
                  border={2}
                  width={"3em"}
                  height={"3em"}
                ></Box>
                Jean Michel Battirola
                <Box>Links....</Box>
              </Box>
              {/* Bio  */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "50%",
                }}
              >
                <Typography variant="h5" marginBottom={3}>
                  About me
                </Typography>
                <Box>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis, enim at
                  tincidunt finibus, neque orci elementum metus, eget lacinia ipsum tellus eu
                  libero. Quisque tortor velit, dignissim ut odio non, placerat tempus arcu.
                  Pellentesque cursus, risus sed dictum gravida, tellus elit tincidunt urna, vitae
                  ullamcorper nisl justo id lacus. Fusce scelerisque elit id arcu posuere, in
                  hendrerit felis consequat. Praesent orci turpis, gravida eget libero eu, congue
                  ultrices lorem. Etiam vel feugiat velit, id porttitor risus. Mauris iaculis erat
                  eu accumsan dictum. Phasellus ut suscipit est. Curabitur quis dolor dignissim,
                  auctor mi at, facilisis nunc. Duis imperdiet feugiat leo eu iaculis. Quisque a
                  diam eu dolor auctor sollicitudin. Nunc fermentum efficitur tincidunt. Proin et
                  sollicitudin quam. Donec condimentum lorem cursus imperdiet sollicitudin. Mauris
                  sapien quam, tincidunt ultrices quam ut, scelerisque dignissim lorem. Pellentesque
                  id cursus elit.
                </Box>
              </Box>
            </Box>
            {/* PROJECTS  */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: 5,
              }}
            >
              <Typography variant="h4">Projects</Typography>
              {/* project placeholder */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: 5,
                }}
              >
                <Box margin="2em" padding={10} border={2}>
                  image
                </Box>
                <Typography variant="h6">Title</Typography>
                <Box>used techs</Box>
              </Box>
              {/* project placeholder */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  flexDirection: "column",
                  margin: 5,
                }}
              >
                <Box margin="2em" padding={10} border={2}>
                  image
                </Box>
                <Typography variant="h6">Title</Typography>
                <Box>used techs</Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Home;
